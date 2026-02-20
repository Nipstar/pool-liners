import { Metadata } from 'next';
import Image from 'next/image';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Star } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Customer Testimonials | Bespoke Pool Liners Reviews',
    description: 'Read reviews and testimonials from our happy pool liner customers across Hampshire, Surrey, and the South of England.',
};

const TESTIMONIALS = [
    { name: "James W.", loc: "Winchester", quote: "Antony and his team did an incredible job replacing our 20-year-old pool liner. The new Renolit liner looks absolutely stunning and the installation was completed in just three days. Highly recommend." },
    { name: "Sarah T.", loc: "Southampton", quote: "We had an unusual L-shaped pool that other companies said would be difficult. Bespoke Pool Liners welded a perfect liner on-site — not a single wrinkle. Exceptional craftsmanship." },
    { name: "David & Clare M.", loc: "Romsey", quote: "Professional from start to finish. The free survey was thorough, the quote was fair, and the installation quality was outstanding. Our pool looks brand new." },
    { name: "Mark H.", loc: "Guildford", quote: "Fantastic service. They found and repaired a leak in our old liner that had been driving us crazy for months. Saved us the cost of a full replacement when another company said it couldn't be fixed." },
    { name: "Eleanor P.", loc: "New Forest", quote: "The team were incredibly polite, tidy, and worked incredibly hard to get our new liner fitted before our summer garden party. The 3D Touch Elegance finish is beautiful." },
    { name: "Robert S.", loc: "Fareham", quote: "Brilliant communication and a flawless finish. The 10-year guarantee gives us total peace of mind. Would not hesitate to recommend Antony to anyone needing pool work." }
];

export default function TestimonialsPage() {
    return (
        <>
            <Section bg="primary" className="pt-32 pb-20 md:pt-40 md:pb-24  relative overflow-hidden text-white">
                <div className="absolute inset-0 z-0 bg-primary">
                    <Image
                        src="/images/hero.png"
                        alt="Customer testimonials"
                        fill
                        className="object-cover object-[center_30%] opacity-20"
                    />
                </div>
                <div className="container relative z-10 max-w-4xl text-center mx-auto">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">Customer Testimonials</h1>
                    <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-light mb-10">
                        Don't just take our word for it. Read what our clients across the South of England have to say about our work.
                    </p>
                </div>
            </Section>

            <Section bg="light" spacing="xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {TESTIMONIALS.map((test, i) => (
                        <Card key={i} className="p-8 border border-gray-100 shadow-sm flex flex-col h-full bg-white">
                            <div className="flex gap-1 mb-6">
                                {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
                            </div>
                            <p className="text-body-text italic flex-1 mb-8 leading-relaxed">"{test.quote}"</p>
                            <div className="mt-auto border-t border-gray-100 pt-6">
                                <p className="font-bold text-dark-text">{test.name}</p>
                                <p className="text-sm text-body-text">{test.loc}</p>
                            </div>
                        </Card>
                    ))}
                </div>
            </Section>

            <Section bg="white" spacing="xl" className="text-center">
                <h2 className="text-3xl font-bold text-dark-text mb-6">Ready to join our happy customers?</h2>
                <Button size="lg" variant="primary" href="/contact">Book Your Free Survey Today</Button>
            </Section>
        </>
    );
}
