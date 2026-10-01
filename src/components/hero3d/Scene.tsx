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
    const targetX = reducedMotion ? 0 : pointer.x * 0.44;
    const targetY = reducedMotion ? 0.18 : pointer.y * 0.36 + scrollProgress * 0.5;
    const camZ = reducedMotion ? 5.8 : 6.2 - scrollProgress * 2.2;

    camera.position.x = MathUtils.lerp(camera.position.x, targetX, 0.05);
    camera.position.y = MathUtils.lerp(camera.position.y, 0.72 + targetY, 0.05);
    camera.position.z = MathUtils.lerp(camera.position.z, camZ, 0.06);
    camera.lookAt(0, 0, 0);

    if (!groupRef.current) return;

    groupRef.current.rotation.x = MathUtils.lerp(
      groupRef.current.rotation.x,
      reducedMotion ? 0.12 : -0.48 + scrollProgress * 0.9 + pointer.y * 0.22,
      0.06,
    );
    groupRef.current.rotation.y = MathUtils.lerp(
      groupRef.current.rotation.y,
      reducedMotion ? 0.62 : 0.7 + scrollProgress * 0.95 + pointer.x * 0.38,
      0.06,
    );
    groupRef.current.rotation.z = MathUtils.lerp(
      groupRef.current.rotation.z,
      reducedMotion ? 0.15 : -0.12 + scrollProgress * 0.32,
      0.06,
    );
    groupRef.current.position.x = MathUtils.lerp(groupRef.current.position.x, reducedMotion ? 0 : pointer.x * 0.2, 0.06);
    groupRef.current.position.y = MathUtils.lerp(groupRef.current.position.y, reducedMotion ? 0.1 : pointer.y * 0.12, 0.06);

    const targetGroup = groupRef.current;
    targetGroup.rotation.x += delta * 0.1;
  });

  const panelSize = typeof window !== "undefined" && window.innerWidth < 768 ? 1.15 : 1;

  return (
    <>
      <color attach="background" args={["#061633"]} />
      <fog attach="fog" args={["#061633", 7, 14]} />
      <PerspectiveCamera makeDefault position={[0, 0.72, 6.2]} fov={38} />
      <ambientLight intensity={0.85} />
      <directionalLight position={[4, 5, 4]} intensity={1.65} color="#00B2EE" />
      <directionalLight position={[-5, 1, -3]} intensity={0.7} color="#d7f5ff" />
      <pointLight position={[0, 0, 3]} intensity={0.8} color="#00B2EE" />

      <group ref={groupRef} scale={panelSize}>
        <Console />
        <FloatingPanels reducedMotion={reducedMotion} />
      </group>

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.95, 0]} receiveShadow>
        <circleGeometry args={[6, 64]} />
        <meshStandardMaterial color="#071a2f" metalness={0.3} roughness={0.85} />
      </mesh>

      <Text position={[0, 2.05, -0.7]} fontSize={0.2} color="#dfeaf8" anchorX="center" anchorY="middle">
        Demo Dashboard — illustrative data
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
