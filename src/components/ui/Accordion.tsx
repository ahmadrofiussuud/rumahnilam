"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItemProps {
  value: string;
  trigger: React.ReactNode;
  children: React.ReactNode;
  isOpen?: boolean;
  onToggle?: () => void;
  className?: string;
}

export function AccordionItem({
  trigger,
  children,
  isOpen,
  onToggle,
  className,
}: AccordionItemProps) {
  return (
    <div className={cn("border-b border-brand-forest-green/10", className)}>
      <button
        type="button"
        className="flex w-full items-center justify-between py-4 font-serif text-lg font-medium transition-all hover:text-brand-gold text-brand-forest-green"
        onClick={onToggle}
      >
        <span className="text-left">{trigger}</span>
        <ChevronDown
          className={cn(
            "h-5 w-5 shrink-0 transition-transform duration-200",
            isOpen && "rotate-180 text-brand-gold"
          )}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-4 text-sm text-brand-forest-green/85 leading-relaxed">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface AccordionProps {
  children: React.ReactNode;
  type?: "single" | "multiple";
  defaultValue?: string;
  className?: string;
}

export function Accordion({ children, type = "single", className }: AccordionProps) {
  const [openItems, setOpenItems] = React.useState<string[]>([]);

  const handleToggle = (value: string) => {
    if (type === "single") {
      setOpenItems((prev) => (prev.includes(value) ? [] : [value]));
    } else {
      setOpenItems((prev) =>
        prev.includes(value)
          ? prev.filter((item) => item !== value)
          : [...prev, value]
      );
    }
  };

  return (
    <div className={cn("w-full", className)}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement<AccordionItemProps>(child)) {
          const itemValue = child.props.value;
          return React.cloneElement(child, {
            isOpen: openItems.includes(itemValue),
            onToggle: () => handleToggle(itemValue),
          });
        }
        return child;
      })}
    </div>
  );
}
