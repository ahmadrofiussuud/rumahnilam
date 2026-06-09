import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-brand-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold disabled:pointer-events-none disabled:opacity-50 active:scale-95 duration-150",
  {
    variants: {
      variant: {
        default: "bg-brand-forest-green text-brand-cream hover:bg-brand-forest-green/90 shadow-md",
        secondary: "bg-brand-gold text-brand-cream hover:bg-brand-gold/90 shadow-sm",
        outline: "border border-brand-forest-green/35 text-brand-forest-green hover:bg-brand-forest-green/10 bg-transparent",
        ghost: "hover:bg-brand-forest-green/10 text-brand-forest-green bg-transparent",
        link: "text-brand-forest-green underline-offset-4 hover:underline bg-transparent p-0",
      },
      size: {
        default: "h-10 px-6 py-2",
        sm: "h-9 rounded-brand-sm px-4 text-xs",
        lg: "h-11 rounded-brand-lg px-8 text-base",
        icon: "h-10 w-10 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
