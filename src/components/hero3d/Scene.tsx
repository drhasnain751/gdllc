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
    // stronger, phased camera progression for distinct visual states
    const pointerX = reducedMotion ? 0 : pointer.x;
    const pointerY = reducedMotion ? 0 : pointer.y;

    // Phase mapping: 0-0.25 (distant), 0.25-0.55 (approach), 0.55-0.85 (turn), 0.85-1 (front)
    let camTarget = { x: 0, y: 0.72, z: 6.2 };
    if (scrollProgress < 0.25) {
      camTarget = { x: pointerX * 0.2, y: 0.82 + pointerY * 0.04, z: 7.2 };
    } else if (scrollProgress < 0.55) {
      const t = (scrollProgress - 0.25) / 0.3;
      camTarget = { x: pointerX * 0.28, y: 0.78 + t * 0.18 + pointerY * 0.06, z: 6.2 - t * 1.4 };
    } else if (scrollProgress < 0.85) {
      const t = (scrollProgress - 0.55) / 0.3;
      camTarget = { x: pointerX * 0.36, y: 0.9 - t * 0.12 + pointerY * 0.08, z: 4.8 - t * 0.8 };
    } else {
      const t = (scrollProgress - 0.85) / 0.15;
      camTarget = { x: pointerX * 0.44, y: 0.78 + t * 0.2 + pointerY * 0.12, z: 4.0 - t * 0.6 };
    }

    camera.position.x = MathUtils.lerp(camera.position.x, camTarget.x, 0.06);
    camera.position.y = MathUtils.lerp(camera.position.y, camTarget.y, 0.06);
    camera.position.z = MathUtils.lerp(camera.position.z, camTarget.z, 0.06);
    camera.lookAt(0, 0, 0);

    if (!groupRef.current) return;

    // group rotation/position with stronger phase-dependent values
    const rotXTarget = reducedMotion ? 0.12 : -0.6 + scrollProgress * 1.6 + pointerY * 0.36;
    const rotYTarget = reducedMotion ? 0.62 : 0.6 + scrollProgress * 1.1 + pointerX * 0.6;
    const rotZTarget = reducedMotion ? 0.15 : -0.18 + scrollProgress * 0.9;

    groupRef.current.rotation.x = MathUtils.lerp(groupRef.current.rotation.x, rotXTarget, 0.06);
    groupRef.current.rotation.y = MathUtils.lerp(groupRef.current.rotation.y, rotYTarget, 0.06);
    groupRef.current.rotation.z = MathUtils.lerp(groupRef.current.rotation.z, rotZTarget, 0.06);

    groupRef.current.position.x = MathUtils.lerp(groupRef.current.position.x, pointerX * 0.28, 0.06);
    groupRef.current.position.y = MathUtils.lerp(groupRef.current.position.y, 0.08 + pointerY * 0.12 + scrollProgress * 0.45 - 0.15, 0.06);

    // subtle continuous spin for life
    const targetGroup = groupRef.current;
    targetGroup.rotation.x += delta * 0.05;
  });

  const panelSize = typeof window !== "undefined" && window.innerWidth < 768 ? 1.15 : 1;

  return (
    <>
      <color attach="background" args={["#061633"]} />
      <fog attach="fog" args={["#061633", 4, 12]} />
      <PerspectiveCamera makeDefault position={[0, 0.72, 6.2]} fov={36} />
      <ambientLight intensity={0.72} />
      <hemisphereLight args={["#0b2340", "#00111a", 0.45]} />
      <directionalLight position={[4, 5, 4]} intensity={1.2} color="#00B2EE" />
      <directionalLight position={[-5, 1, -3]} intensity={0.5} color="#d7f5ff" />
      <pointLight position={[0, 0, 3]} intensity={0.6} color="#00B2EE" />

      <group ref={groupRef} scale={panelSize}>
        <Console />
        <FloatingPanels reducedMotion={reducedMotion} />
      </group>

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.95, 0]} receiveShadow>
        <circleGeometry args={[6, 64]} />
        <meshStandardMaterial color="#071a2f" metalness={0.3} roughness={0.85} />
      </mesh>

      <Text position={[0, 2.05, -0.7]} fontSize={0.2} color="#f1f6fb" anchorX="center" anchorY="middle">
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
      dpr={isMobile ? [1, 1.5] : [1, 2]}
      gl={{ antialias: true, alpha: true }}
      shadows
      style={{ touchAction: "none" }}
    >
      <SceneInner reducedMotion={reducedMotion} />
    </Canvas>
  );
}
