import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import type { Mesh } from "three";

function SmallBox() {
  const ref = useRef<Mesh | null>(null);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.6;
      ref.current.rotation.x += delta * 0.18;
    }
  });

  return (
    <mesh ref={ref} position={[0, 0, 0]}>
      <boxGeometry args={[0.5, 0.28, 0.14]} />
      <meshStandardMaterial
        color="#00b2ee"
        metalness={0.6}
        roughness={0.25}
        emissive="#0fe0ff"
        emissiveIntensity={0.25}
      />
    </mesh>
  );
}

export function CardScene({ size = 120 }: { size?: number }) {
  return (
    <div style={{ width: size, height: size, pointerEvents: "none" }}>
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 2.2], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[2, 2, 2]} intensity={0.8} />
        <SmallBox />
      </Canvas>
    </div>
  );
}
