import type { ButtonHTMLAttributes, ReactNode } from "react";

type StaticProps = {
  interactive?: false;
  children: ReactNode;
  className?: string;
};

type InteractiveProps = {
  interactive: true;
  selected: boolean;
  children: ReactNode;
  className?: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

/**
 * Shared pill primitive — design.md §3.4.
 * Static mode: plain category tag (gallery items, CaseStudyCard, TestimonialCard service tag).
 * Interactive mode: a FilterChips chip — gets aria-pressed, hover/press states, no role="button"
 * ambiguity since it's a real <button>.
 */
export function Badge(props: StaticProps | InteractiveProps) {
  if (props.interactive) {
    const { interactive, selected, children, className, ...rest } = props;
    void interactive;
    return (
      <button
        type="button"
        aria-pressed={selected}
        className={[
          "rounded-sm px-3 py-1.5 text-caption transition-colors duration-fast ease-out",
          selected ? "bg-ink text-paper" : "bg-surface border border-border text-ink-muted",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        {...rest}
      >
        {children}
      </button>
    );
  }

  const { children, className } = props;
  return (
    <span
      className={["rounded-sm border border-border px-2 py-0.5 text-caption text-ink-muted", className]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </span>
  );
}
