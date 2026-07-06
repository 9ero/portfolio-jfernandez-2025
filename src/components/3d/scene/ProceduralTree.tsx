import * as THREE from "three";

export const SECTIONS = [
  { id: "welcome",  label: "Welcome",  y: 13.5, angle: 0,           branchDir: [1, 0.3, 0] as [number, number, number] },
  { id: "skills",   label: "Skills",   y: 10.0, angle: Math.PI * 0.6, branchDir: [-1, 0.2, 0.5] as [number, number, number] },
  { id: "projects", label: "Projects", y:  6.5, angle: Math.PI * 1.2, branchDir: [0.8, 0.1, -0.8] as [number, number, number] },
  { id: "about",    label: "About Me", y:  3.5, angle: Math.PI * 1.7, branchDir: [-0.9, 0.15, 0.4] as [number, number, number] },
  { id: "contact",  label: "Contact",  y:  0.0, angle: Math.PI * 0,   branchDir: [0, 0, 0] as [number, number, number] }, // ground
] as const;

// Section accent colors (sky blue matches portfolio)
const SECTION_COLORS = ["#38bdf8", "#a78bfa", "#34d399", "#fb923c", "#f472b6"];

const TRUNK_COLOR = "#3d1f0a";
const BARK_COLOR = "#5a2e10";
const DARK_GREEN = "#1a4a1a";
const MID_GREEN = "#2d7a2d";
const BRIGHT_GREEN = "#4aaa3a";

interface BranchProps {
  start: [number, number, number];
  end: [number, number, number];
  radiusStart?: number;
  radiusEnd?: number;
  color?: string;
}

function Branch({ start, end, radiusStart = 0.08, radiusEnd = 0.04, color = BARK_COLOR }: BranchProps) {
  const startV = new THREE.Vector3(...start);
  const endV = new THREE.Vector3(...end);
  const dir = endV.clone().sub(startV);
  const length = dir.length();
  const mid = startV.clone().add(endV).multiplyScalar(0.5);
  const axis = new THREE.Vector3(0, 1, 0);
  const quaternion = new THREE.Quaternion().setFromUnitVectors(axis, dir.clone().normalize());

  return (
    <mesh position={mid.toArray() as [number, number, number]} quaternion={quaternion.toArray() as [number, number, number, number]}>
      <cylinderGeometry args={[radiusEnd, radiusStart, length, 8]} />
      <meshStandardMaterial color={color} roughness={0.9} />
    </mesh>
  );
}

function LeafCluster({ position, scale = 1, color = MID_GREEN }: { position: [number, number, number]; scale?: number; color?: string }) {
  return (
    <group position={position}>
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.7 * scale, 10, 8]} />
        <meshStandardMaterial color={color} roughness={0.8} />
      </mesh>
      <mesh position={[0.4 * scale, 0.2 * scale, 0.2 * scale]}>
        <sphereGeometry args={[0.5 * scale, 10, 8]} />
        <meshStandardMaterial color={DARK_GREEN} roughness={0.8} />
      </mesh>
      <mesh position={[-0.35 * scale, 0.3 * scale, -0.1 * scale]}>
        <sphereGeometry args={[0.55 * scale, 10, 8]} />
        <meshStandardMaterial color={BRIGHT_GREEN} roughness={0.8} />
      </mesh>
      <mesh position={[0.1 * scale, 0.55 * scale, 0.3 * scale]}>
        <sphereGeometry args={[0.42 * scale, 10, 8]} />
        <meshStandardMaterial color={MID_GREEN} roughness={0.8} />
      </mesh>
    </group>
  );
}

function SectionBranch({ section, color }: { section: typeof SECTIONS[number]; color: string }) {
  if (section.id === "contact") return null; // contact is at ground level, no branch

  const [dx, dy, dz] = section.branchDir;
  const len = 2.8;
  const start: [number, number, number] = [0, section.y, 0];
  const end: [number, number, number] = [dx * len, section.y + dy * len, dz * len];

  const subEnd1: [number, number, number] = [end[0] + dx * 0.8 + 0.3, end[1] + 0.5, end[2] + dz * 0.5];
  const subEnd2: [number, number, number] = [end[0] + dx * 0.6 - 0.3, end[1] + 0.6, end[2] - dz * 0.3];

  const tipLeaf: [number, number, number] = [end[0] + dx * 0.4, end[1] + 0.3, end[2] + dz * 0.3];

  return (
    <group>
      <Branch start={start} end={end} radiusStart={0.12} radiusEnd={0.06} />
      <Branch start={end} end={subEnd1} radiusStart={0.05} radiusEnd={0.025} />
      <Branch start={end} end={subEnd2} radiusStart={0.05} radiusEnd={0.025} />

      <LeafCluster position={tipLeaf} scale={0.75} />
      <LeafCluster position={subEnd1} scale={0.5} color={BRIGHT_GREEN} />
      <LeafCluster position={subEnd2} scale={0.45} color={DARK_GREEN} />

      {/* Section marker — glowing orb at branch tip */}
      <mesh position={[end[0] + dx * 0.6, end[1] + 0.8, end[2] + dz * 0.5]}>
        <sphereGeometry args={[0.14, 16, 12]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={1.2} />
      </mesh>
      {/* Ring around marker */}
      <mesh
        position={[end[0] + dx * 0.6, end[1] + 0.8, end[2] + dz * 0.5]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <torusGeometry args={[0.22, 0.018, 8, 32]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.6} transparent opacity={0.7} />
      </mesh>
    </group>
  );
}

export function ProceduralTree() {
  const treeHeight = 16;
  const trunkSegments = 6;

  return (
    <group>
      {/* Main trunk — slightly tapered */}
      <mesh position={[0, treeHeight / 2, 0]}>
        <cylinderGeometry args={[0.18, 0.45, treeHeight, 12]} />
        <meshStandardMaterial color={TRUNK_COLOR} roughness={0.95} />
      </mesh>

      {/* Trunk detail bumps */}
      {Array.from({ length: trunkSegments }, (_, i) => {
        const t = i / trunkSegments;
        const y = 1.5 + t * (treeHeight - 3);
        const r = 0.38 - t * 0.22;
        const angle = (i * 137.5 * Math.PI) / 180; // golden angle spacing
        return (
          <mesh key={i} position={[Math.cos(angle) * r * 0.3, y, Math.sin(angle) * r * 0.3]}>
            <sphereGeometry args={[r * 0.18, 8, 6]} />
            <meshStandardMaterial color={BARK_COLOR} roughness={0.9} />
          </mesh>
        );
      })}

      {/* Roots spreading from base */}
      {[0, 1, 2, 3].map((i) => {
        const angle = (i * Math.PI) / 2 + 0.3;
        const rx = Math.cos(angle) * 1.4;
        const rz = Math.sin(angle) * 1.4;
        return (
          <Branch
            key={i}
            start={[Math.cos(angle) * 0.3, 0.3, Math.sin(angle) * 0.3]}
            end={[rx, 0.05, rz]}
            radiusStart={0.14}
            radiusEnd={0.04}
            color={TRUNK_COLOR}
          />
        );
      })}

      {/* Section branches */}
      {SECTIONS.map((s, i) => (
        <SectionBranch key={s.id} section={s} color={SECTION_COLORS[i]} />
      ))}

      {/* Crown foliage cluster at very top */}
      <LeafCluster position={[0, treeHeight + 0.3, 0]} scale={1.4} />
      <LeafCluster position={[0.5, treeHeight + 0.8, 0.3]} scale={1.0} color={BRIGHT_GREEN} />
      <LeafCluster position={[-0.5, treeHeight + 0.6, -0.2]} scale={0.9} color={DARK_GREEN} />
      <LeafCluster position={[0, treeHeight + 1.6, 0]} scale={0.7} color={BRIGHT_GREEN} />

      {/* Ground plane */}
      <mesh position={[0, -0.02, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <circleGeometry args={[7, 32]} />
        <meshStandardMaterial color="#1a3a1a" roughness={0.9} />
      </mesh>
      {/* Ground ring */}
      <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[7, 8, 32]} />
        <meshStandardMaterial color="#0f2210" roughness={1} />
      </mesh>

      {/* Grass tufts */}
      {Array.from({ length: 18 }, (_, i) => {
        const angle = (i / 18) * Math.PI * 2;
        const r = 2.5 + Math.sin(i * 2.3) * 1.5;
        return (
          <mesh key={i} position={[Math.cos(angle) * r, 0.12, Math.sin(angle) * r]}>
            <coneGeometry args={[0.06, 0.28, 4]} />
            <meshStandardMaterial color={BRIGHT_GREEN} />
          </mesh>
        );
      })}
    </group>
  );
}
