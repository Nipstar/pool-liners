import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    withHover?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(({ className, children, withHover = false, ...props }, ref) => {
    return (
        <div
            ref={ref}
            className={cn(
                "bg-white rounded-xl border border-gray-100 overflow-hidden",
                "shadow-[0_4px_20px_rgba(12,59,94,0.04)] transition-all duration-300",
                withHover && "hover:shadow-[0_8px_30px_rgba(12,59,94,0.08)] hover:-translate-y-1",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
});

Card.displayName = "Card";

export { Card };
