import Link from "next/link";
import { cn } from "@/lib/cn";

export function Breadcrumbs({
  current,
  className,
}: {
  current: string;
  className?: string;
}) {
  return (
    <nav aria-label="Brotkrümelnavigation" className={cn("text-sm", className)}>
      <ol className="flex items-center gap-2 text-muted">
        <li>
          <Link href="/" className="transition-colors hover:text-primary">
            Start
          </Link>
        </li>
        <li aria-hidden="true" className="text-muted/50">
          /
        </li>
        <li aria-current="page" className="font-medium text-foreground">
          {current}
        </li>
      </ol>
    </nav>
  );
}
