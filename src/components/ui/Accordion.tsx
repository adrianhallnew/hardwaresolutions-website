"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

export type AccordionItemData = {
  question: string;
  answer: string;
};

/**
 * design.md §3.3 — independent expand/collapse per item (opening one does NOT
 * close another). Height animates via grid-template-rows 0fr -> 1fr, not a
 * measured scrollHeight, so it's a real layout-property transition.
 */
export function Accordion({
  items,
  defaultOpenIndex,
}: {
  items: AccordionItemData[];
  defaultOpenIndex?: number;
}) {
  const [openIndexes, setOpenIndexes] = useState<Set<number>>(
    new Set(defaultOpenIndex !== undefined ? [defaultOpenIndex] : []),
  );

  function toggle(index: number) {
    setOpenIndexes((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  }

  return (
    <div>
      {items.map((item, index) => {
        const open = openIndexes.has(index);
        const answerId = `accordion-answer-${index}`;
        return (
          <div key={item.question} className="border-b border-border">
            <button
              type="button"
              aria-expanded={open}
              aria-controls={answerId}
              onClick={() => toggle(index)}
              className="flex w-full items-center justify-between gap-4 py-4 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-ink focus-visible:outline-offset-2"
            >
              <span className="text-body font-medium text-ink">{item.question}</span>
              <Plus
                aria-hidden="true"
                className={`h-5 w-5 shrink-0 text-ink-muted transition-transform duration-medium ease-in-out ${
                  open ? "rotate-45" : "rotate-0"
                }`}
              />
            </button>
            <div
              id={answerId}
              className={`grid transition-[grid-template-rows] duration-medium ease-in-out ${
                open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p
                  className={`pb-4 text-body text-ink-muted transition-opacity duration-fast ease-out ${
                    open ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
