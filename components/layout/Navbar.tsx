"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { useEffect, useState } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "backdrop-blur-xl bg-background/70 border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="font-bold text-lg text-foreground">
          Christian Elias
        </Link>
        <div className="hidden md:flex gap-8 text-sm text-foreground/70">
          <Link href="#about" className="hover:text-accent transition-colors">About</Link>
          <Link href="#projects" className="hover:text-accent transition-colors">Projects</Link>
          <Link href="#experience" className="hover:text-accent transition-colors">Experience</Link>
          <Link href="/blog" className="hover:text-accent transition-colors">Blog</Link>
          <Link href="#contact" className="hover:text-accent transition-colors">Contact</Link>
        </div>
        <ThemeToggle />
      </div>
    </nav>
  );
}