import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-transform duration-press ease-out active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-ink focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100";

const variantClasses: Record<Variant, string> = {
  primary: "bg-ink text-paper hover:bg-ink/90",
  secondary: "bg-transparent text-ink border border-ink hover:bg-ink/[0.06]",
  ghost: "bg-transparent text-ink-muted hover:text-ink",
};

const sizeClasses: Record<Size, string> = {
  sm: "h-9 px-4 text-body",
  md: "h-11 px-5 text-body",
  lg: "h-[52px] px-6 text-body",
};

function classes(variant: Variant, size: Size, className?: string) {
  return [base, variantClasses[variant], sizeClasses[size], className].filter(Boolean).join(" ");
}

type CommonProps = {
  variant?: Variant;
  size?: Size;
  loading?: boolean;
  children: ReactNode;
  className?: string;
};

type LinkProps = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & { href: string };

type ButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

function ButtonContent({ loading, children }: { loading?: boolean; children: ReactNode }) {
  return (
    <span
      className={`inline-flex items-center gap-2 transition-[filter,opacity] duration-fast ease-out ${
        loading ? "opacity-70 blur-[2px]" : ""
      }`}
    >
      {loading ? (
        <span
          className="h-5 w-5 animate-spin rounded-full border-2 border-current border-t-transparent"
          aria-hidden="true"
        />
      ) : (
        children
      )}
    </span>
  );
}

export function Button(props: LinkProps | ButtonProps) {
  const { variant = "primary", size = "md", loading, children, className, ...rest } = props;

  if ("href" in props && props.href) {
    const { href, ...anchorRest } = rest as Omit<LinkProps, keyof CommonProps>;
    return (
      <Link href={href} className={classes(variant, size, className)} {...anchorRest}>
        <ButtonContent loading={loading}>{children}</ButtonContent>
      </Link>
    );
  }

  const buttonRest = rest as Omit<ButtonProps, keyof CommonProps>;
  return (
    <button
      className={classes(variant, size, className)}
      disabled={loading || buttonRest.disabled}
      {...buttonRest}
    >
      <ButtonContent loading={loading}>{children}</ButtonContent>
    </button>
  );
}
