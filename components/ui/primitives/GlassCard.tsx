// components/ui/primitives/GlassCard.tsx
export function GlassCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-card/50 backdrop-blur-xl border border-border rounded-3xl p-8 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${className}`}>
      {children}
    </div>
  );
}