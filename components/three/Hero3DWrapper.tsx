"use client";

import dynamic from "next/dynamic";

const Hero3D = dynamic(() => import("./Hero3D").then((mod) => mod.Hero3D), {
  ssr: false,
  loading: () => <div className="w-full h-full" />,
});

export function Hero3DWrapper() {
  return <Hero3D />;
}