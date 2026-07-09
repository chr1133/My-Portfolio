"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-background/70 border-b">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="font-semibold text-lg">
          Christian Elias
        </Link>
        <div className="hidden md:flex gap-6 text-sm">
          <Link href="#about">About</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#experience">Experience</Link>
          <Link href="/blog">Blog</Link>
          <Link href="#contact">Contact</Link>
        </div>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Button size="sm">Resume</Button>
        </div>
      </div>
    </nav>
  );
}