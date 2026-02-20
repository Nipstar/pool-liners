import { ButtonHTMLAttributes, forwardRef } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'ghost' | 'accent';
    size?: 'sm' | 'md' | 'lg';
    href?: string;
    withArrow?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', href, withArrow, children, ...props }, ref) => {

        const baseStyles = "inline-flex items-center justify-center font-semibold transition-all duration-200 rounded-lg";

        const variants = {
            primary: "bg-accent text-white hover:bg-[#00A58E] hover:shadow-md",
            secondary: "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white",
            ghost: "bg-transparent text-primary hover:text-accent px-0 hover:translate-x-1",
            accent: "bg-primary text-white hover:bg-[#082a44] shadow-sm hover:shadow-md border border-transparent",
        };

        const sizes = {
            sm: "text-sm px-4 py-2",
            md: variant === 'ghost' ? "text-base py-2" : "text-base px-6 py-3",
            lg: "text-lg px-8 py-4",
        };

        const classes = cn(
            baseStyles,
            variants[variant],
            sizes[size],
            className
        );

        const content = (
            <>
                {children}
                {withArrow && <ArrowRight className={cn("ml-2 w-5 h-5", variant === 'ghost' && "transition-transform group-hover:translate-x-1")} />}
            </>
        );

        if (href) {
            return (
                <Link href={href} className={cn(classes, variant === 'ghost' && "group")}>
                    {content}
                </Link>
            );
        }

        return (
            <button ref={ref} className={cn(classes, variant === 'ghost' && "group")} {...props}>
                {content}
            </button>
        );
    }
);

Button.displayName = 'Button';

export { Button };
