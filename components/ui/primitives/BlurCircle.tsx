// components/ui/primitives/BlurCircle.tsx
export function BlurCircle({ size = 300, className = "" }: { size?: number; className?: string }) {
  return (
    <div
      style={{ width: size, height: size }}
      className={`absolute rounded-full blur-3xl bg-accent/10 pointer-events-none ${className}`}
    />
  );
}