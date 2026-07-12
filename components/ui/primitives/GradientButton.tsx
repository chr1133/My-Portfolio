// components/ui/primitives/GradientButton.tsx
import Link from "next/link";

export function GradientButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold text-primary-foreground bg-gradient-to-r from-primary to-[hsl(20,24%,38%)] shadow-lg hover:scale-105 transition-transform duration-300"
    >
      {children}
    </Link>
  );
}