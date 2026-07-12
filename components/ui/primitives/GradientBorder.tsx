// components/ui/primitives/GradientBorder.tsx
export function GradientBorder({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-3xl p-[1px] bg-gradient-to-br from-border to-primary/40">
      <div className="bg-card rounded-3xl h-full w-full">{children}</div>
    </div>
  );
}