// components/ui/primitives/TechBadge.tsx
import { Badge } from "@/components/ui/badge";

export function TechBadge({ label }: { label: string }) {
  return <Badge variant="outline" className="border-border text-foreground/80 rounded-full">{label}</Badge>;
}