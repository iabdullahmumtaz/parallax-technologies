"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { SiteBackgroundScene } from "./SiteBackgroundScene";

export function SiteBackgroundCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 55 }}
      dpr={[1, 1.5]}
      gl={{
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      }}
      style={{ background: "transparent" }}
      onCreated={({ gl }) => {
        gl.setClearColor(0x000000, 0);
      }}
    >
      <Suspense fallback={null}>
        <SiteBackgroundScene />
      </Suspense>
    </Canvas>
  );
}
