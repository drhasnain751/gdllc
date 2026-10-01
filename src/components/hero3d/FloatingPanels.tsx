import { Float, Text } from "@react-three/drei";
import { Group } from "three";

const panelData = [
  { label: "Sales", value: "$128,420", accent: "#00B2EE", position: [-2.4, 1.2, -0.7] },
  { label: "Orders", value: "1,842", accent: "#7dd3fc", position: [2.2, 0.85, -0.2] },
  { label: "Inventory", value: "94.2%", accent: "#5eead4", position: [-2.4, -0.9, 0.2] },
  { label: "Fulfillment", value: "98.7%", accent: "#93c5fd", position: [2.3, -1.15, 0.7] },
] as const;

export function FloatingPanels({ reducedMotion = false }: { reducedMotion?: boolean }) {
  return (
    <group>
      {panelData.map((panel, index) => (
        <Float
          key={panel.label}
          speed={reducedMotion ? 0 : 1.9 + index * 0.3}
          rotationIntensity={reducedMotion ? 0 : 0.28}
          floatIntensity={reducedMotion ? 0 : 0.52}
        >
          <group position={panel.position as [number, number, number]}>
            <mesh castShadow>
              <boxGeometry args={[1.6, 0.8, 0.08]} />
              <meshStandardMaterial color="#0c1a2b" metalness={0.7} roughness={0.32} emissive={panel.accent} emissiveIntensity={0.12} />
            </mesh>
            <mesh position={[0, -0.18, 0.06]}>
              <boxGeometry args={[1.2, 0.34, 0.04]} />
              <meshStandardMaterial color={panel.accent} emissive={panel.accent} emissiveIntensity={0.3} />
            </mesh>
            <Text
              position={[-0.48, 0.15, 0.1]}
              fontSize={0.13}
              color="#dfeaf8"
              anchorX="left"
              anchorY="middle"
            >
              {panel.label}
            </Text>
            <Text
              position={[-0.48, -0.12, 0.1]}
              fontSize={0.2}
              color="#f7fbff"
              anchorX="left"
              anchorY="middle"
              fontWeight={700}
            >
              {panel.value}
            </Text>
          </group>
        </Float>
      ))}
    </group>
  );
}
