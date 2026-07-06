import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function MeditatingMan({ position = [0, 0, 0] }: { position?: [number, number, number] }) {
  const groupRef = useRef<THREE.Group>(null);

  // Gentle breathing animation
  useFrame((state) => {
    if (!groupRef.current) return;
    const breath = Math.sin(state.clock.elapsedTime * 0.8) * 0.015;
    groupRef.current.scale.y = 1 + breath;
  });

  const skin = "#e8c49a";
  const hair = "#f0d060";
  const clothing = "#f5f0e8";
  const clothingShadow = "#e0d8c8";

  return (
    <group ref={groupRef} position={position}>
      {/* Crossed legs base — left leg */}
      <mesh position={[-0.28, 0.18, 0.1]} rotation={[0.2, 0, 0.3]}>
        <capsuleGeometry args={[0.12, 0.45, 8, 12]} />
        <meshStandardMaterial color={clothing} />
      </mesh>
      {/* Right leg */}
      <mesh position={[0.28, 0.18, 0.1]} rotation={[0.2, 0, -0.3]}>
        <capsuleGeometry args={[0.12, 0.45, 8, 12]} />
        <meshStandardMaterial color={clothing} />
      </mesh>
      {/* Leg cross connector */}
      <mesh position={[0, 0.14, 0.25]} rotation={[0.5, 0, 0]}>
        <capsuleGeometry args={[0.1, 0.5, 8, 12]} />
        <meshStandardMaterial color={clothingShadow} />
      </mesh>

      {/* Hip/base */}
      <mesh position={[0, 0.22, 0]}>
        <sphereGeometry args={[0.26, 16, 12]} />
        <meshStandardMaterial color={clothingShadow} />
      </mesh>

      {/* Torso */}
      <mesh position={[0, 0.72, 0]}>
        <capsuleGeometry args={[0.22, 0.55, 12, 16]} />
        <meshStandardMaterial color={clothing} />
      </mesh>

      {/* Left upper arm */}
      <mesh position={[-0.3, 0.72, 0]} rotation={[0.3, 0, 0.7]}>
        <capsuleGeometry args={[0.07, 0.32, 8, 12]} />
        <meshStandardMaterial color={clothing} />
      </mesh>
      {/* Left forearm resting on knee */}
      <mesh position={[-0.3, 0.48, 0.22]} rotation={[-0.6, 0, 0.1]}>
        <capsuleGeometry args={[0.065, 0.28, 8, 12]} />
        <meshStandardMaterial color={skin} />
      </mesh>
      {/* Left hand */}
      <mesh position={[-0.26, 0.32, 0.34]}>
        <sphereGeometry args={[0.072, 12, 10]} />
        <meshStandardMaterial color={skin} />
      </mesh>

      {/* Right upper arm */}
      <mesh position={[0.3, 0.72, 0]} rotation={[0.3, 0, -0.7]}>
        <capsuleGeometry args={[0.07, 0.32, 8, 12]} />
        <meshStandardMaterial color={clothing} />
      </mesh>
      {/* Right forearm */}
      <mesh position={[0.3, 0.48, 0.22]} rotation={[-0.6, 0, -0.1]}>
        <capsuleGeometry args={[0.065, 0.28, 8, 12]} />
        <meshStandardMaterial color={skin} />
      </mesh>
      {/* Right hand */}
      <mesh position={[0.26, 0.32, 0.34]}>
        <sphereGeometry args={[0.072, 12, 10]} />
        <meshStandardMaterial color={skin} />
      </mesh>

      {/* Neck */}
      <mesh position={[0, 1.12, 0]}>
        <cylinderGeometry args={[0.09, 0.11, 0.18, 12]} />
        <meshStandardMaterial color={skin} />
      </mesh>

      {/* Head */}
      <mesh position={[0, 1.38, 0]}>
        <sphereGeometry args={[0.26, 20, 16]} />
        <meshStandardMaterial color={skin} />
      </mesh>

      {/* Hair — blonde cap */}
      <mesh position={[0, 1.47, -0.02]}>
        <sphereGeometry args={[0.27, 20, 14, 0, Math.PI * 2, 0, Math.PI * 0.58]} />
        <meshStandardMaterial color={hair} />
      </mesh>
      {/* Hair side left */}
      <mesh position={[-0.2, 1.32, 0.04]} rotation={[0, 0, 0.4]}>
        <capsuleGeometry args={[0.06, 0.18, 8, 8]} />
        <meshStandardMaterial color={hair} />
      </mesh>
      {/* Hair side right */}
      <mesh position={[0.2, 1.32, 0.04]} rotation={[0, 0, -0.4]}>
        <capsuleGeometry args={[0.06, 0.18, 8, 8]} />
        <meshStandardMaterial color={hair} />
      </mesh>

      {/* Closed eyes (flat discs) */}
      <mesh position={[-0.1, 1.4, 0.24]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.03, 0.03, 0.005, 8]} />
        <meshStandardMaterial color="#6b4423" />
      </mesh>
      <mesh position={[0.1, 1.4, 0.24]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.03, 0.03, 0.005, 8]} />
        <meshStandardMaterial color="#6b4423" />
      </mesh>

      {/* Subtle smile */}
      <mesh position={[0, 1.3, 0.25]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.045, 0.008, 8, 12, Math.PI]} />
        <meshStandardMaterial color="#c49078" />
      </mesh>

      {/* Aura / energy ring */}
      <mesh position={[0, 0.7, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.65, 0.012, 8, 48]} />
        <meshStandardMaterial color="#7dd3fc" emissive="#38bdf8" emissiveIntensity={0.8} transparent opacity={0.5} />
      </mesh>
    </group>
  );
}
