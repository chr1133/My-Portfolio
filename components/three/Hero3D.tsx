"use client";

import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere, Float } from "@react-three/drei";

export function Hero3D() {
  return (
    <Canvas camera={{ position: [0, 0, 4] }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[2, 2, 2]} intensity={1} color="#E5F2C9" />
      <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
        <Sphere args={[1.3, 100, 200]}>
          <MeshDistortMaterial
            color="#7F534B"
            attach="material"
            distort={0.45}
            speed={1.8}
            roughness={0.2}
            metalness={0.6}
          />
        </Sphere>
      </Float>
    </Canvas>
  );
}