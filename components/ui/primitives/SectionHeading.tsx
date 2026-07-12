// components/ui/primitives/SectionHeading.tsx
export function SectionHeading({ eyebrow, title }: { eyebrow?: string; title: string }) {
  return (
    <div className="mb-16">
      {eyebrow && <p className="text-accent text-xs uppercase tracking-widest font-bold mb-3">{eyebrow}</p>}
      <h2 className="text-section-title text-foreground">{title}</h2>
    </div>
  );
}