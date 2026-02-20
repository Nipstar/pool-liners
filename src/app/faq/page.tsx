"use client"
import { useState } from 'react';
import Image from 'next/image';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { FAQSchema, BreadcrumbSchema } from '@/components/seo/SchemaOrg';

const FAQS = [
    {
        k: "general",
        title: "General Questions",
        items: [
            { q: "Do you offer a free survey?", a: "Yes, we offer a completely free, no-obligation survey and quote for all properties within our coverage area across Hampshire and the South." },
            { q: "What areas do you cover?", a: "Our primary service area is Hampshire, but we regularly work across Surrey, Berkshire, Dorset, and Wiltshire. We are based in Romsey." },
            { q: "How long does a quote take?", a: "We typically provide a detailed written quote within 48 hours of completing the on-site survey." }
        ]
    },
    {
        k: "installation",
        title: "Installation & Process",
        items: [
            { q: "How long does it take to install a new liner?", a: "Most residential installations take between 2 to 5 days. This includes draining the pool, removing the old liner, surface preparation, welding the new liner, and beginning the refill process." },
            { q: "Do you install liners in winter?", a: "Pool liners need to be welded and fitted at specific temperatures. While we can prepare the pool shell in winter, we typically wait for milder weather (usually mid-spring onwards) to ensure a perfect fit without wrinkles." },
            { q: "What do you do with the old liner?", a: "We remove your old liner and dispose of it responsibly through commercial recycling streams." }
        ]
    },
    {
        k: "products",
        title: "Products & Materials",
        items: [
            { q: "Why use Renolit Alkorplan?", a: "Renolit Alkorplan is the global industry standard for reinforced pool liners. They are 1.5mm thick, feature a strong polyester mesh core, have an anti-fungal coating, and come with a 10-year guarantee." },
            { q: "Can you fix a pool that is leaking?", a: "Yes. Many leaks can be repaired with a patch or by re-welding a failed seam without needing a full replacement." },
            { q: "Are the patterned liners as strong as plain ones?", a: "Yes. Both our plain and printed liners share the exact same 1.5mm reinforced core and durability." }
        ]
    }
];

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState<string | null>('general-0');

    const toggleFaQ = (id: string) => {
        setOpenIndex(openIndex === id ? null : id);
    };

    // Flatten FAQs for schema
    const allFAQs = FAQS.flatMap(category =>
        category.items.map(faq => ({
            question: faq.q,
            answer: faq.a
        }))
    );

    return (
        <>
            <FAQSchema faqs={allFAQs} />
            <BreadcrumbSchema items={[
                { name: 'Home', url: '/' },
                { name: 'FAQ', url: '/faq' }
            ]} />
            <Section bg="primary" className="pt-32 pb-20 md:pt-40 md:pb-24  relative overflow-hidden text-white">
                <div className="absolute inset-0 z-0 bg-primary">
                    <Image
                        src="/images/hero.png"
                        alt="Frequently Asked Questions"
                        fill
                        className="object-cover object-[center_30%] opacity-20"
                    />
                </div>
                <div className="container relative z-10 max-w-4xl text-center mx-auto">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">Frequently Asked Questions</h1>
                    <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-light mb-10">
                        Answers to common questions about pool liner installations, replacements, and our services.
                    </p>
                </div>
            </Section>

            <Section bg="white" spacing="xl">
                <div className="max-w-4xl mx-auto">
                    {FAQS.map((category) => (
                        <div key={category.k} className="mb-16 last:mb-0">
                            <h2 className="text-2xl md:text-3xl font-bold text-dark-text mb-8 pb-4 border-b-2 border-primary/10">
                                {category.title}
                            </h2>

                            <div className="space-y-4">
                                {category.items.map((faq, i) => {
                                    const id = `${category.k}-${i}`;
                                    const isOpen = openIndex === id;

                                    return (
                                        <div key={i} className="border border-gray-100 rounded-xl overflow-hidden shadow-sm bg-white transition-all duration-200">
                                            <button
                                                onClick={() => toggleFaQ(id)}
                                                className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
                                            >
                                                <h3 className="text-lg font-bold text-dark-text pr-8">{faq.q}</h3>
                                                <div className={cn(
                                                    "w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-300",
                                                    isOpen ? "bg-accent text-white rotate-180" : "bg-light-bg text-primary"
                                                )}>
                                                    <ChevronDown className="w-5 h-5" />
                                                </div>
                                            </button>

                                            <div
                                                className={cn(
                                                    "px-6 overflow-hidden transition-all duration-300 ease-in-out",
                                                    isOpen ? "max-h-[500px] py-5 border-t border-gray-100 bg-gray-50/50" : "max-h-0 py-0"
                                                )}
                                            >
                                                <p className="text-body-text leading-relaxed">{faq.a}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}

                    <div className="mt-20 bg-light-bg border border-blue-50 rounded-2xl p-10 text-center">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                            <MessageCircle className="w-8 h-8 text-accent" />
                        </div>
                        <h3 className="text-2xl font-bold text-dark-text mb-4">Still have questions?</h3>
                        <p className="text-lg text-body-text mb-8 max-w-2xl mx-auto">
                            If you couldn't find the answer you were looking for, give us a call or send us a message. We're always happy to help.
                        </p>
                        <Button href="/contact" size="lg" variant="primary">Contact Our Team</Button>
                    </div>
                </div>
            </Section>
        </>
    );
}
