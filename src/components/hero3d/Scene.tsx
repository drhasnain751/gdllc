import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { PerspectiveCamera, Text } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import { Group, MathUtils } from "three";

import { Console } from "./Console";
import { FloatingPanels } from "./FloatingPanels";

function SceneInner({ reducedMotion }: { reducedMotion: boolean }) {
  const groupRef = useRef<Group>(null);
  const { camera, pointer } = useThree();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const hero = document.getElementById("home");
      if (!hero) return;

      const rect = hero.getBoundingClientRect();
      const total = Math.max(window.innerHeight + rect.height, 1);
      const progress = Math.min(1, Math.max(0, (window.innerHeight - rect.top) / total));
      setScrollProgress(progress);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useFrame((_, delta) => {
    const pointerX = reducedMotion ? 0 : pointer.x;
    const pointerY = reducedMotion ? 0 : pointer.y;

    const camTarget = {
      x: pointerX * 0.18,
      y: 0.72 + pointerY * 0.12,
      z: reducedMotion ? 5.8 : 5.9 - scrollProgress * 0.7,
    };

    camera.position.x = MathUtils.damp(camera.position.x, camTarget.x, 4.5, delta);
    camera.position.y = MathUtils.damp(camera.position.y, camTarget.y, 4.5, delta);
    camera.position.z = MathUtils.damp(camera.position.z, camTarget.z, 4.5, delta);
    camera.lookAt(0, 0, 0);

    if (!groupRef.current) return;

    const rotXTarget = reducedMotion ? 0.2 : -0.5 + scrollProgress * 0.6 + pointerY * 0.28;
    const rotYTarget = reducedMotion ? 0.6 : 0.65 + scrollProgress * 0.5 + pointerX * 0.38;
    const rotZTarget = reducedMotion ? 0.08 : 0.12 + scrollProgress * 0.12;

    groupRef.current.rotation.x = MathUtils.damp(groupRef.current.rotation.x, rotXTarget, 5.5, delta);
    groupRef.current.rotation.y = MathUtils.damp(groupRef.current.rotation.y, rotYTarget, 5.5, delta);
    groupRef.current.rotation.z = MathUtils.damp(groupRef.current.rotation.z, rotZTarget, 5.5, delta);

    groupRef.current.position.x = MathUtils.damp(groupRef.current.position.x, pointerX * 0.24, 4.5, delta);
    groupRef.current.position.y = MathUtils.damp(groupRef.current.position.y, 0.18 + pointerY * 0.12, 4.5, delta);
  });

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <>
      <color attach="background" args={["#061633"]} />
      <fog attach="fog" args={["#061633", 5, 12]} />
      <PerspectiveCamera makeDefault position={[0, 0.72, 5.9]} fov={34} />
      <ambientLight intensity={0.7} />
      <hemisphereLight args={["#0b2340", "#00111a", 0.45]} />
      <directionalLight position={[4, 5, 4]} intensity={1.1} color="#00B2EE" />
      <directionalLight position={[-5, 1, -3]} intensity={0.5} color="#d7f5ff" />
      <pointLight position={[0, 0, 3]} intensity={0.5} color="#00B2EE" />

      <group ref={groupRef} scale={isMobile ? 0.9 : 1}>
        <Console />
        <FloatingPanels reducedMotion={reducedMotion} />
      </group>

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.85, 0]} receiveShadow>
        <circleGeometry args={[5.5, 48]} />
        <meshStandardMaterial color="#071a2f" metalness={0.2} roughness={0.8} />
      </mesh>

      <Text position={[0, 2.05, -0.7]} fontSize={0.18} color="#f1f6fb" anchorX="center" anchorY="middle">
        Illustrative Dashboard — Demo Data
      </Text>
    </>
  );
}

export function Scene({ reducedMotion = false }: { reducedMotion?: boolean }) {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <Canvas
      className="h-full w-full"
      dpr={isMobile ? [1, 1.4] : [1, 1.8]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      shadows={false}
      style={{ touchAction: "none" }}
      frameloop="always"
    >
      <SceneInner reducedMotion={reducedMotion} />
    </Canvas>
  );
}
