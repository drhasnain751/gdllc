import { Canvas, useFrame } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";
import { useRef, useState, useMemo } from "react";
import { Color, CatmullRomCurve3, Vector3 } from "three";

const markets = [
  { lat: 38.0, lon: -97.0, label: "United States" },
  { lat: 51.5, lon: -0.12, label: "United Kingdom" },
  { lat: 52.5, lon: 13.4, label: "Germany" },
  import { Canvas, useFrame } from "@react-three/fiber";
  import { Html, OrbitControls } from "@react-three/drei";
  import { useRef, useMemo } from "react";
  import { Color, CatmullRomCurve3, Vector3 } from "three";

  const markets = [
    { lat: 38.0, lon: -97.0, label: "United States" },
    { lat: 51.5, lon: -0.12, label: "United Kingdom" },
    { lat: 52.5, lon: 13.4, label: "Germany" },
    { lat: -25.0, lon: 133.0, label: "Australia" },
  ];

  function latLonToVector3(lat: number, lon: number, radius = 2.2) {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lon + 180) * (Math.PI / 180);

    const x = -(radius * Math.sin(phi) * Math.cos(theta));
    const z = radius * Math.sin(phi) * Math.sin(theta);
    const y = radius * Math.cos(phi);

    return new Vector3(x, y, z);
  }

  function Node({ position, label }: { position: Vector3; label: string }) {
    const ref = useRef<any>();
    useFrame(({ clock }) => {
      const t = clock.getElapsedTime();
      if (ref.current) ref.current.scale.setScalar(1 + Math.sin(t * 2) * 0.08);
    });

    return (
      <group position={position.toArray()}>
        <mesh ref={ref}>
          <sphereGeometry args={[0.06, 12, 12]} />
          <meshStandardMaterial color="#38dff0" emissive="#00B2EE" emissiveIntensity={0.8} />
        </mesh>
        <Html distanceFactor={6} position={[0, 0.18, 0]}>
          <div style={{ background: 'rgba(10,18,28,0.85)', color: '#e8f6ff', padding: '6px 8px', borderRadius: 8, fontSize: 12, pointerEvents: 'none' }}>
            {label}
          </div>
        </Html>
      </group>
    );
  }

  function Arc({ points }: { points: Vector3[] }) {
    const curve = useMemo(() => new CatmullRomCurve3(points), [points]);
    const pts = curve.getPoints(40);
    const positions = new Float32Array(pts.flatMap((p) => [p.x, p.y, p.z]));

    return (
      <line>
        <bufferGeometry>
          <bufferAttribute attachObject={["attributes", "position"]} count={positions.length / 3} array={positions} itemSize={3} />
        </bufferGeometry>
        <lineBasicMaterial color="#6ee7f8" linewidth={2} transparent opacity={0.85} />
      </line>
    );
  }

  export function Globe() {
    const nodePositions = useMemo(() => markets.map((m) => ({ ...m, pos: latLonToVector3(m.lat, m.lon) })), []);

    return (
      <div style={{ width: '100%', height: 360 }}>
        <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 6], fov: 40 }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 5, 5]} intensity={1} color="#9eeafc" />
          <mesh>
            <sphereGeometry args={[2.2, 48, 48]} />
            <meshStandardMaterial color="#072033" metalness={0.2} roughness={0.6} emissive="#00131a" />
          </mesh>

          {nodePositions.map((n) => (
            <Node key={n.label} position={n.pos} label={n.label} />
          ))}

          {/* arcs */}
          <group>
            {(() => {
              const pairs = [
                [0, 1],
                [0, 2],
                [0, 3],
                [1, 2],
              ];
              return pairs.map(([a, b], i) => {
                const start = nodePositions[a].pos.clone().multiplyScalar(1.02);
                const end = nodePositions[b].pos.clone().multiplyScalar(1.02);
                const mid = start.clone().lerp(end, 0.5).multiplyScalar(1.15);
                return <Arc key={i} points={[start, mid, end]} />;
              });
            })()}
          </group>

          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.08} rotateSpeed={0.4} />
        </Canvas>
      </div>
    );
  }
            <group>
