import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "accent" | "outline" | "ghost" | "onDark";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium leading-none transition-all duration-200 ease-soft select-none cursor-pointer disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary: "bg-primary text-background hover:bg-primary-deep shadow-sm hover:shadow-md hover:-translate-y-0.5",
  accent: "bg-accent text-ink hover:brightness-[1.06] shadow-sm hover:shadow-md hover:-translate-y-0.5",
  outline: "border border-primary/25 text-primary hover:bg-primary hover:text-background",
  ghost: "text-primary hover:bg-surface",
  onDark: "bg-background/95 text-primary hover:bg-background shadow-sm hover:-translate-y-0.5",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-[0.95rem]",
  lg: "h-13 px-7 text-base",
};

function classes(variant: Variant, size: Size, className?: string) {
  return cn(base, variants[variant], sizes[size], className);
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  ...props
}: { variant?: Variant; size?: Size } & ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button className={classes(variant, size, className)} {...props} />;
}

export function ButtonLink({
  variant = "primary",
  size = "md",
  external = false,
  className,
  ...props
}: {
  variant?: Variant;
  size?: Size;
  external?: boolean;
} & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      className={classes(variant, size, className)}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      {...props}
    />
  );
}
