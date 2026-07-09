"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-background/70 border-b">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="font-semibold text-lg">
          Christine
        </Link>
        <div className="hidden md:flex gap-6 text-sm">
          <Link href="#about">About</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#experience">Experience</Link>
          <Link href="/blog">Blog</Link>
          <Link href="#contact">Contact</Link>
        </div>
        <Button size="sm">Resume</Button>
      </div>
    </nav>
  );
}