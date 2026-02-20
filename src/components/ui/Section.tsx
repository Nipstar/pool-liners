import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps extends HTMLAttributes<HTMLElement> {
    bg?: 'white' | 'light' | 'dark' | 'primary';
    spacing?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
    container?: boolean;
}

const Section = forwardRef<HTMLElement, SectionProps>(
    ({ className, children, bg = 'white', spacing = 'lg', container = true, ...props }, ref) => {
        const bgStyles = {
            white: 'bg-white',
            light: 'bg-light-bg',
            dark: 'bg-dark-text text-white',
            primary: 'bg-primary text-white',
        };

        const spacingStyles = {
            none: 'py-0',
            sm: 'py-8 md:py-12',
            md: 'py-12 md:py-16',
            lg: 'py-16 md:py-24',
            xl: 'py-24 md:py-32',
        };

        return (
            <section
                ref={ref}
                className={cn(bgStyles[bg], spacingStyles[spacing], className)}
                {...props}
            >
                {container ? (
                    <div className="container mx-auto px-4 max-w-7xl">
                        {children}
                    </div>
                ) : (
                    children
                )}
            </section>
        );
    }
);

Section.displayName = 'Section';

export { Section };
