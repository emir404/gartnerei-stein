import { cn } from "@/lib/cn";

type Variant = "solid" | "outline" | "quiet";
type Tone = "light" | "dark";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full text-[0.95rem] font-semibold leading-none transition-[background-color,color,box-shadow,transform] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-2";

const pad = "px-6 py-3.5";

const styles: Record<Tone, Record<Variant, string>> = {
  light: {
    solid:
      "bg-primary text-background shadow-sm hover:bg-primary-deep hover:shadow-md focus-visible:outline-primary",
    outline:
      "border border-foreground/25 text-foreground hover:bg-foreground hover:text-background focus-visible:outline-foreground",
    quiet:
      "text-foreground hover:text-primary focus-visible:outline-primary",
  },
  dark: {
    solid:
      "bg-background text-foreground shadow-sm hover:bg-accent hover:text-background hover:shadow-md focus-visible:outline-background",
    outline:
      "border border-background/35 text-background hover:bg-background hover:text-primary-deep focus-visible:outline-background",
    quiet:
      "text-background hover:text-accent-soft focus-visible:outline-background",
  },
};

export function Cta({
  href,
  children,
  variant = "solid",
  tone = "light",
  withArrow = false,
  className,
  "aria-label": ariaLabel,
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  tone?: Tone;
  withArrow?: boolean;
  className?: string;
  "aria-label"?: string;
}) {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      className={cn(base, variant !== "quiet" && pad, styles[tone][variant], className)}
    >
      {children}
      {withArrow && (
        <span
          aria-hidden
          className="transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0.5"
        >
          →
        </span>
      )}
    </a>
  );
}
