import { Float } from "@react-three/drei";

function ScreenGlow() {
  return (
    <mesh position={[0, 0.08, 0.03]}>
      <planeGeometry args={[3.1, 1.72]} />
      <meshStandardMaterial color="#0b1d2e" emissive="#00B2EE" emissiveIntensity={0.22} />
    </mesh>
  );
}

export function Console() {
  return (
    <group>
      <Float speed={1.4} rotationIntensity={0.18} floatIntensity={0.32}>
        <group position={[0, -0.15, 0]}>
          <mesh position={[0, -0.6, 0]} castShadow receiveShadow>
            <boxGeometry args={[4.4, 0.2, 2.8]} />
            <meshStandardMaterial color="#112a44" metalness={0.82} roughness={0.28} />
          </mesh>

          <mesh position={[0, 0.15, 0.05]} castShadow>
            <boxGeometry args={[4.1, 2.1, 0.18]} />
            <meshStandardMaterial color="#0a1a2d" metalness={0.7} roughness={0.35} />
          </mesh>

          <mesh position={[0, 0.18, 0.18]} castShadow>
            <boxGeometry args={[3.5, 1.8, 0.09]} />
            <meshStandardMaterial color="#061633" metalness={0.55} roughness={0.28} emissive="#00B2EE" emissiveIntensity={0.12} />
          </mesh>

          <ScreenGlow />

          <mesh position={[0, 0.18, 0.3]} castShadow>
            <boxGeometry args={[3.72, 1.96, 0.04]} />
            <meshStandardMaterial color="#0f2239" metalness={0.45} roughness={0.24} />
          </mesh>

          <mesh position={[0, -0.72, 1.28]} castShadow>
            <boxGeometry args={[3.9, 0.08, 0.32]} />
            <meshStandardMaterial color="#163b64" metalness={0.9} roughness={0.22} />
          </mesh>

          <mesh position={[0, -0.65, 0.95]} castShadow>
            <boxGeometry args={[0.2, 0.18, 0.45]} />
            <meshStandardMaterial color="#00B2EE" emissive="#00B2EE" emissiveIntensity={0.7} />
          </mesh>
        </group>
      </Float>
    </group>
  );
}
