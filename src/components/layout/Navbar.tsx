"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS } from '@/constants/navigation';
import { CONTACT_INFO } from '@/constants/contact';

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [servicesOpenMobile, setServicesOpenMobile] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [mobileMenuOpen]);

    // Close menu on escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && mobileMenuOpen) {
                setMobileMenuOpen(false);
            }
        };
        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, [mobileMenuOpen]);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-4 max-w-7xl flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 z-50">
                    <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-white font-bold text-xl">
                        BPL
                    </div>
                    <div className="flex flex-col">
                        <span className={cn("font-bold text-lg leading-none", isScrolled ? "text-primary" : "text-primary lg:text-white")}>Bespoke</span>
                        <span className={cn("text-sm font-medium leading-none", isScrolled ? "text-secondary" : "text-secondary lg:text-white/90")}>Pool Liners</span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-8">
                    {NAV_LINKS.map((link) => (
                        <div key={link.name} className="relative group">
                            {link.dropdown ? (
                                <div className="flex items-center gap-1 cursor-pointer py-2">
                                    <span className={cn("text-sm font-medium transition-colors hover:text-accent", isScrolled ? "text-dark-text" : "text-white")}>{link.name}</span>
                                    <ChevronDown className={cn("w-4 h-4", isScrolled ? "text-dark-text" : "text-white")} />

                                    {/* Dropdown */}
                                    <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left translate-y-2 group-hover:translate-y-0 overflow-hidden">
                                        {link.dropdown.map((dropLink) => (
                                            <Link
                                                key={dropLink.name}
                                                href={dropLink.href}
                                                className="block px-4 py-3 text-sm text-body-text hover:bg-light-bg hover:text-primary transition-colors border-b last:border-0 border-gray-50"
                                            >
                                                {dropLink.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <Link
                                    href={link.href}
                                    className={cn("text-sm font-medium py-2 transition-colors hover:text-accent", isScrolled ? "text-dark-text" : "text-white")}
                                >
                                    {link.name}
                                </Link>
                            )}
                        </div>
                    ))}
                </nav>

                {/* CTA & Mobile Toggle */}
                <div className="flex items-center gap-4 z-50">
                    <Link
                        href="/contact"
                        className={cn(
                            "hidden md:flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold transition-all shadow-sm hover:shadow-md",
                            "bg-accent text-white hover:bg-accent/90"
                        )}
                    >
                        Get Free Quote
                    </Link>

                    <button
                        className="lg:hidden p-2 -mr-2 text-primary"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className={cn("w-6 h-6", isScrolled ? "text-primary" : "text-primary md:text-white")} />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-[60] bg-white pt-24 px-4 pb-8 overflow-y-auto"
                    >
                        <div className="flex flex-col gap-6">
                            {NAV_LINKS.map((link) => (
                                <div key={link.name}>
                                    {link.dropdown ? (
                                        <div>
                                            <button
                                                className="flex items-center justify-between w-full text-left py-2 text-xl font-semibold text-primary"
                                                onClick={() => setServicesOpenMobile(!servicesOpenMobile)}
                                            >
                                                {link.name}
                                                <ChevronDown className={cn("w-5 h-5 transition-transform", servicesOpenMobile && "rotate-180")} />
                                            </button>
                                            <AnimatePresence>
                                                {servicesOpenMobile && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        className="flex flex-col gap-3 pl-4 pt-3 overflow-hidden"
                                                    >
                                                        {link.dropdown.map((dropLink) => (
                                                            <Link
                                                                key={dropLink.name}
                                                                href={dropLink.href}
                                                                onClick={() => setMobileMenuOpen(false)}
                                                                className="text-body-text py-1 text-base"
                                                            >
                                                                {dropLink.name}
                                                            </Link>
                                                        ))}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    ) : (
                                        <Link
                                            href={link.href}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="block py-2 text-xl font-semibold text-primary"
                                        >
                                            {link.name}
                                        </Link>
                                    )}
                                </div>
                            ))}

                            <div className="pt-6 border-t border-gray-100 flex flex-col gap-4 mt-4">
                                <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center gap-3 text-primary font-medium">
                                    <span className="w-10 h-10 rounded-full bg-light-bg flex items-center justify-center">
                                        <Phone className="w-5 h-5" />
                                    </span>
                                    {CONTACT_INFO.phone}
                                </a>
                                <Link
                                    href="/contact"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="w-full py-4 bg-accent text-white text-center rounded-xl font-semibold text-lg"
                                >
                                    Get Your Free Quote
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
