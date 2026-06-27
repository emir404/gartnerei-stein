import Link from "next/link";
import { cn } from "@/lib/cn";

export function Breadcrumbs({
  current,
  className,
  invert = false,
}: {
  current: string;
  className?: string;
  invert?: boolean;
}) {
  return (
    <nav aria-label="Brotkrümelnavigation" className={cn("text-sm", className)}>
      <ol
        className={cn(
          "flex items-center gap-2",
          invert ? "text-background/70" : "text-muted"
        )}
      >
        <li>
          <Link
            href="/"
            className={cn(
              "transition-colors",
              invert ? "hover:text-background" : "hover:text-primary"
            )}
          >
            Start
          </Link>
        </li>
        <li aria-hidden="true" className={invert ? "text-background/40" : "text-muted/50"}>
          /
        </li>
        <li
          aria-current="page"
          className={cn("font-medium", invert ? "text-background" : "text-foreground")}
        >
          {current}
        </li>
      </ol>
    </nav>
  );
}
