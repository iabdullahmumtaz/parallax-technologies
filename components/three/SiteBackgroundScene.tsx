"use client";

import { useMemo, useRef } from "react";
import { Edges, Sparkles, Stars, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { globalPointer } from "./global-pointer-store";

const CODE_SNIPPETS = ["{ }", "</>", "01", "AI", "fn", "=>", "/**/", "npm"];

function StarLayers() {
  return (
    <>
      <Stars
        radius={90}
        depth={60}
        count={4800}
        factor={3.8}
        saturation={0.35}
        fade
        speed={0.35}
      />
      <Sparkles
        count={120}
        scale={[14, 10, 8]}
        size={2.2}
        speed={0.22}
        opacity={0.45}
        color="#79d8a5"
      />
      <Sparkles
        count={80}
        scale={[12, 8, 6]}
        size={1.8}
        speed={0.18}
        opacity={0.35}
        color="#4f8dff"
      />
    </>
  );
}

function CodeNetwork() {
  const linesRef = useRef<THREE.LineSegments>(null);
  const nodeCount = 36;

  const { positions, linePositions } = useMemo(() => {
    const nodes: THREE.Vector3[] = [];
    for (let i = 0; i < nodeCount; i++) {
      nodes.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 22,
          (Math.random() - 0.5) * 14,
          (Math.random() - 0.5) * 10 - 4,
        ),
      );
    }

    const segments: number[] = [];
    const maxDist = 4.2;
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (nodes[i].distanceTo(nodes[j]) < maxDist) {
          segments.push(
            nodes[i].x,
            nodes[i].y,
            nodes[i].z,
            nodes[j].x,
            nodes[j].y,
            nodes[j].z,
          );
        }
      }
    }

    const pos = new Float32Array(nodes.length * 3);
    nodes.forEach((n, i) => {
      pos[i * 3] = n.x;
      pos[i * 3 + 1] = n.y;
      pos[i * 3 + 2] = n.z;
    });

    return {
      positions: pos,
      linePositions: new Float32Array(segments),
    };
  }, []);

  useFrame((state) => {
    const lines = linesRef.current;
    if (!lines) return;
    const t = state.clock.elapsedTime;
    lines.rotation.y = t * 0.012;
    lines.rotation.x = Math.sin(t * 0.08) * 0.04;
  });

  return (
    <group>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={0.06}
          color="#4f8dff"
          transparent
          opacity={0.65}
          sizeAttenuation
          depthWrite={false}
        />
      </points>
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[linePositions, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#3164d3"
          transparent
          opacity={0.22}
          depthWrite={false}
        />
      </lineSegments>
    </group>
  );
}

function WireframeShape({
  position,
  rotation,
  scale,
  speed,
  color = "#3164d3",
}: {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: number;
  speed: number;
  color?: string;
}) {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    const g = group.current;
    if (!g) return;
    const t = state.clock.elapsedTime;
    const { x: px } = globalPointer;
    g.rotation.y += speed * 0.003;
    g.rotation.x += speed * 0.0018;
    g.position.y = position[1] + Math.sin(t * speed * 0.12) * 0.15;
    g.position.x = position[0] + px * 0.12;
  });

  return (
    <group ref={group} position={position} rotation={rotation} scale={scale}>
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial transparent opacity={0} depthWrite={false} />
        <Edges color={color} transparent opacity={0.3} />
      </mesh>
    </group>
  );
}

function FloatingCodeGlyphs() {
  const group = useRef<THREE.Group>(null);

  const glyphs = useMemo(
    () =>
      CODE_SNIPPETS.map((text, i) => ({
        text,
        position: [
          (Math.random() - 0.5) * 16,
          (Math.random() - 0.5) * 10,
          -3 - Math.random() * 4,
        ] as [number, number, number],
        phase: i * 0.7,
      })),
    [],
  );

  useFrame((state) => {
    const g = group.current;
    if (!g) return;
    const t = state.clock.elapsedTime;
    g.children.forEach((child, i) => {
      child.position.y =
        glyphs[i].position[1] + Math.sin(t * 0.4 + glyphs[i].phase) * 0.25;
      child.rotation.z = Math.sin(t * 0.25 + glyphs[i].phase) * 0.08;
    });
  });

  return (
    <group ref={group}>
      {glyphs.map((g) => (
        <Text
          key={g.text + g.phase}
          position={g.position}
          fontSize={0.22}
          color="#79d8a5"
          anchorX="center"
          anchorY="middle"
          material-opacity={0.35}
          material-transparent
        >
          {g.text}
        </Text>
      ))}
    </group>
  );
}

function SceneRig() {
  const rig = useRef<THREE.Group>(null);

  useFrame(() => {
    const g = rig.current;
    if (!g) return;
    const { x: px, y: py } = globalPointer;
    g.rotation.y = THREE.MathUtils.lerp(g.rotation.y, px * 0.04, 0.025);
    g.rotation.x = THREE.MathUtils.lerp(g.rotation.x, py * 0.03, 0.025);
  });

  return (
    <group ref={rig}>
      <StarLayers />
      <CodeNetwork />
      <FloatingCodeGlyphs />
      <WireframeShape
        position={[-5, 2, -5]}
        rotation={[0.4, 0.6, 0.15]}
        scale={1.2}
        speed={1}
      />
      <WireframeShape
        position={[6, -1, -6]}
        rotation={[-0.2, -0.5, 0.4]}
        scale={0.9}
        speed={0.85}
        color="#79d8a5"
      />
      <WireframeShape
        position={[-2, -3, -7]}
        rotation={[0.6, 0.2, 0.3]}
        scale={0.75}
        speed={1.15}
      />
    </group>
  );
}

export function SiteBackgroundScene() {
  return (
    <>
      <fog attach="fog" args={["#050b18", 14, 48]} />
      <ambientLight intensity={0.2} />
      <SceneRig />
    </>
  );
}
