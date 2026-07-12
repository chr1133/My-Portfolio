// components/ui/primitives/Glow.tsx
export function Glow({ className = "" }: { className?: string }) {
  return <div className={`absolute rounded-full blur-3xl bg-primary/20 pointer-events-none ${className}`} />;
}