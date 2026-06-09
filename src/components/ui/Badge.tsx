import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-brand-gold",
  {
    variants: {
      variant: {
        default: "bg-brand-forest-green text-brand-cream border-transparent",
        secondary: "bg-brand-gold text-brand-cream border-transparent",
        outline: "text-brand-forest-green border border-brand-forest-green/30",
        teal: "bg-teal-100 text-teal-800 border-transparent",
        rose: "bg-rose-100 text-rose-800 border-transparent",
        amber: "bg-amber-100 text-amber-800 border-transparent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
