import { useRef, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useScroll, Html } from "@react-three/drei";
import * as THREE from "three";
import { ProceduralTree } from "./ProceduralTree";
import { MeditatingMan } from "./MeditatingMan";

// Camera waypoints: overview + one per section (6 total)
const WAYPOINTS: Array<{ pos: [number, number, number]; target: [number, number, number] }> = [
  { pos: [0, 9, 28],    target: [0, 8, 0]      }, // 0 — overview
  { pos: [6, 15.5, 5],  target: [1, 13.5, 0]   }, // 1 — welcome
  { pos: [-7, 11, 5],   target: [-1, 10, 0]    }, // 2 — skills
  { pos: [7, 7.5, 5],   target: [0.5, 6.5, 0]  }, // 3 — projects
  { pos: [-6, 4.5, 5],  target: [-0.5, 3.5, 0] }, // 4 — about
  { pos: [4, 2.5, 7],   target: [1.5, 0.8, 0]  }, // 5 — contact
];

const SEGMENTS = WAYPOINTS.length - 1; // 5

function easeInOutQuad(t: number) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

function lerpVec3(
  a: [number, number, number],
  b: [number, number, number],
  t: number
): THREE.Vector3 {
  const e = easeInOutQuad(t);
  return new THREE.Vector3(
    a[0] + (b[0] - a[0]) * e,
    a[1] + (b[1] - a[1]) * e,
    a[2] + (b[2] - a[2]) * e
  );
}

// Exposes the scroll container element to outside the Canvas
function ScrollElExposer({ onEl }: { onEl: (el: HTMLElement) => void }) {
  const scroll = useScroll();
  useEffect(() => {
    if (scroll.el) onEl(scroll.el as HTMLElement);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return null;
}

function CameraRig({ onSectionChange }: { onSectionChange: (idx: number) => void }) {
  const scroll = useScroll();
  const { camera } = useThree();
  const lastSection = useRef(-1);
  const targetPos = useRef(new THREE.Vector3(...WAYPOINTS[0].pos));
  const lookTarget = useRef(new THREE.Vector3(...WAYPOINTS[0].target));

  useFrame(() => {
    const offset = scroll.offset;
    const raw = Math.min(offset * SEGMENTS, SEGMENTS - 0.0001);
    const idx = Math.floor(raw);
    const t = raw - idx;

    targetPos.current.copy(lerpVec3(WAYPOINTS[idx].pos, WAYPOINTS[idx + 1].pos, t));
    lookTarget.current.copy(lerpVec3(WAYPOINTS[idx].target, WAYPOINTS[idx + 1].target, t));

    camera.position.lerp(targetPos.current, 0.07);
    camera.lookAt(lookTarget.current);

    const secIdx = Math.min(Math.round(offset * SEGMENTS), SEGMENTS);
    if (secIdx !== lastSection.current) {
      lastSection.current = secIdx;
      onSectionChange(secIdx);
    }
  });

  return null;
}

// Each panel manages its own opacity via direct DOM mutation in useFrame,
// staying visible across the full "dwell" range around its scroll center.
function SectionPanel({
  children,
  position,
}: {
  children: React.ReactNode;
  position: [number, number, number];
}) {
  return (
    <Html position={position} center occlude={false}>
      <div style={{ userSelect: "none" }}>{children}</div>
    </Html>
  );
}

// Panel content
const PANELS: Array<{
  sectionIndex: number;
  position: [number, number, number];
  content: React.ReactNode;
}> = [
  {
    sectionIndex: 1,
    position: [4, 15.5, 1.5],
    content: (
      <div className="bg-zinc-900/90 backdrop-blur border border-sky-500/40 rounded-2xl p-5 shadow-xl w-64">
        <p className="text-sky-400 text-xs font-semibold uppercase tracking-widest mb-1">Hello, I'm</p>
        <h2 className="text-white text-2xl font-bold leading-tight">Juan Miguel Fernández</h2>
        <p className="text-lime-400 font-semibold mt-1">Full Stack Developer</p>
        <p className="text-neutral-400 text-sm mt-2 leading-relaxed">
          2+ yrs React · 1+ yr Django<br />Docker · AWS · Costa Rica 🌿
        </p>
      </div>
    ),
  },
  {
    sectionIndex: 2,
    position: [-4.5, 11.5, 2],
    content: (
      <div className="bg-zinc-900/90 backdrop-blur border border-violet-500/40 rounded-2xl p-5 shadow-xl w-64">
        <p className="text-violet-400 text-xs font-semibold uppercase tracking-widest mb-2">Tech Stack</p>
        <div className="space-y-2 text-sm">
          <div>
            <span className="text-neutral-400 text-xs block">Core</span>
            <p className="text-white font-medium">React · Django · Docker · AWS · MySQL</p>
          </div>
          <div>
            <span className="text-neutral-400 text-xs block">Expanding</span>
            <p className="text-white font-medium">Next.js · TypeScript · ML / Data Science</p>
          </div>
          <div>
            <span className="text-neutral-400 text-xs block">Design</span>
            <p className="text-white font-medium">Figma · Adobe CC · Tailwind</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    sectionIndex: 3,
    position: [3.5, 8.5, -1.5],
    content: (
      <div className="bg-zinc-900/90 backdrop-blur border border-emerald-500/40 rounded-2xl p-5 shadow-xl w-64">
        <p className="text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-2">Projects</p>
        <ul className="space-y-2 text-sm">
          {[
            ["EQ Tickets", "Next.js + Django ticketing platform"],
            ["Mabaagroexport", "Bilingual corporate website"],
            ["This Portfolio", "Astro + React + Three.js"],
            ["Old Portfolio", "Next.js · Vercel"],
          ].map(([name, desc]) => (
            <li key={name}>
              <span className="text-white font-semibold">{name}</span>
              <span className="text-neutral-400"> — {desc}</span>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    sectionIndex: 4,
    position: [-4, 5.5, 1],
    content: (
      <div className="bg-zinc-900/90 backdrop-blur border border-orange-500/40 rounded-2xl p-5 shadow-xl w-64">
        <p className="text-orange-400 text-xs font-semibold uppercase tracking-widest mb-2">About Me</p>
        <div className="space-y-2 text-sm">
          {[
            ["Past", "Self-taught since 13 · HTML, CSS, VB"],
            ["Now",  "Full stack dev at a real estate company"],
            ["Next", "Data science, ML & senior engineering"],
          ].map(([label, text]) => (
            <div key={label} className="flex gap-2">
              <span className="text-orange-400 font-bold shrink-0">{label}</span>
              <span className="text-neutral-300">{text}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    sectionIndex: 5,
    position: [3, 2.2, 2.5],
    content: (
      <div className="bg-zinc-900/90 backdrop-blur border border-pink-500/40 rounded-2xl p-5 shadow-xl w-64">
        <p className="text-pink-400 text-xs font-semibold uppercase tracking-widest mb-2">Get in Touch</p>
        <ul className="space-y-1.5 text-sm text-neutral-300">
          <li>📧 juan.fernadez.araya@gmail.com</li>
          <li>🐙 github.com/9ero</li>
          <li>🌐 jfernandezdev.com</li>
        </ul>
        <p className="text-neutral-500 text-xs mt-3">Switch to Classic for the contact form →</p>
      </div>
    ),
  },
];

function SceneContent() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 20, 10]} intensity={1.2} castShadow />
      <pointLight position={[0, 18, 0]} intensity={0.6} color="#7dd3fc" />
      <pointLight position={[0, 0, 5]} intensity={0.5} color="#86efac" />
      <fog attach="fog" args={["#0a0a1a", 28, 60]} />

      <ProceduralTree />
      <MeditatingMan position={[1.8, 0, 1.2]} />

      {PANELS.map((p) => (
        <SectionPanel key={p.sectionIndex} position={p.position}>
          {p.content}
        </SectionPanel>
      ))}
    </>
  );
}

interface SceneWithCameraProps {
  onSectionChange: (i: number) => void;
  onScrollEl: (el: HTMLElement) => void;
}

export function SceneWithCamera({ onSectionChange, onScrollEl }: SceneWithCameraProps) {
  return (
    <>
      <ScrollElExposer onEl={onScrollEl} />
      <CameraRig onSectionChange={onSectionChange} />
      <SceneContent />
    </>
  );
}
