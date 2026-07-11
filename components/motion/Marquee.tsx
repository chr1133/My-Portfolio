export function Marquee({ items, speed = 30 }: { items: string[]; speed?: number }) {
  return (
    <div className="overflow-hidden whitespace-nowrap border-y py-5 bg-muted/30">
      <div
        className="inline-flex animate-marquee"
        style={{ animationDuration: `${speed}s` }}
      >
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="text-2xl md:text-4xl font-bold uppercase tracking-tight text-muted-foreground/40 flex items-center gap-8 mr-8"
          >
            {item} <span className="text-muted-foreground/20">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}