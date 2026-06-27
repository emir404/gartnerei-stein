import { Reveal } from "@/components/ui/Reveal";
import { Check } from "@/components/ui/icons";
import { cn } from "@/lib/cn";

export function InfoGrid({
  items,
  columns = 2,
}: {
  items: readonly { name: string; desc: string }[];
  columns?: 2 | 3;
}) {
  return (
    <div
      className={cn(
        "grid gap-4",
        columns === 3 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2"
      )}
    >
      {items.map((it, i) => (
        <Reveal key={it.name} delay={(i % 3) * 80}>
          <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 ease-soft hover:-translate-y-0.5 hover:shadow-md">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-secondary/12 text-secondary">
                <Check size={16} />
              </span>
              <div>
                <h3 className="text-lg font-semibold text-primary">{it.name}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{it.desc}</p>
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
