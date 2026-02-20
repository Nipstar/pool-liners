import { Metadata } from 'next';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { MapPin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'Pool Liner Installation Areas | Hampshire, Surrey, Berkshire & More',
    description: 'We install pool liners across Hampshire, Surrey, Berkshire, Dorset and Wiltshire. Based in Romsey with nationwide project capability. See areas we cover.',
};

export default function AreasIndexPage() {
    const regions = [
        {
            name: 'Hampshire',
            tag: 'Primary Base',
            desc: 'Our home county. We cover all major Hampshire towns and surrounding villages.',
            towns: ['Romsey', 'Winchester', 'Southampton', 'Eastleigh', 'Andover', 'Basingstoke', 'Petersfield', 'Fareham', 'Lymington', 'New Forest']
        },
        {
            name: 'Surrey',
            desc: 'Expert installations across prime Surrey residential areas.',
            towns: ['Guildford', 'Farnham', 'Woking', 'Esher', 'Godalming', 'Camberley', 'Weybridge']
        },
        {
            name: 'Berkshire',
            desc: 'Serving the M4 corridor and beautiful Berkshire countryside.',
            towns: ['Reading', 'Newbury', 'Bracknell', 'Wokingham', 'Hungerford']
        },
        {
            name: 'Dorset',
            desc: 'Coastal and inland pool renovations across Dorset.',
            towns: ['Bournemouth', 'Poole', 'Dorchester', 'Christchurch', 'Wimborne']
        },
        {
            name: 'Wiltshire',
            desc: 'Covering historic Wiltshire county with bespoke pool services.',
            towns: ['Salisbury', 'Amesbury', 'Marlborough', 'Devizes']
        },
    ];

    return (
        <>
            <Section bg="primary" className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden text-white">
                <div className="absolute inset-0 z-0 bg-primary">
                    <Image
                        src="/images/portfolio-2.png"
                        alt="Swimming pool regions"
                        fill
                        className="object-cover object-center opacity-30 mix-blend-overlay"
                    />
                </div>
                <div className="container relative z-10 max-w-4xl text-center mx-auto">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">Areas We Cover</h1>
                    <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-light mb-10">
                        Based in Romsey, Hampshire, we provide swimming pool liner services across the South of England. Our primary service area covers Hampshire and neighbouring counties.
                    </p>
                </div>
            </Section>

            <Section bg="white" spacing="xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16 max-w-5xl mx-auto">
                    {regions.map((region, i) => (
                        <div key={i} className={`bg-light-bg rounded-2xl p-8 border border-blue-50 relative ${i === 0 ? 'lg:col-span-2 !bg-primary text-white' : ''}`}>
                            {region.tag && (
                                <span className="absolute top-8 right-8 bg-accent text-white px-3 py-1 text-xs font-bold rounded-full">{region.tag}</span>
                            )}
                            <div className="flex items-center gap-3 mb-4">
                                <MapPin className={`w-8 h-8 ${i === 0 ? 'text-accent' : 'text-primary'}`} />
                                <h2 className={`text-2xl font-bold ${i === 0 ? 'text-white' : 'text-dark-text'}`}>{region.name}</h2>
                            </div>
                            <p className={`mb-6 ${i === 0 ? 'text-white/80' : 'text-body-text'}`}>{region.desc}</p>

                            <div className="flex flex-wrap gap-2">
                                {region.towns.map(town => (
                                    <span key={town} className={`px-3 py-1.5 text-sm font-medium rounded-md ${i === 0 ? 'bg-white/10 text-white' : 'bg-white text-dark-text border border-gray-200'}`}>
                                        {town}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-8 pt-6 border-t border-current/10">
                                <Link href={`/areas/${region.name.toLowerCase()}`} className={`font-semibold transition-colors flex items-center gap-2 ${i === 0 ? 'text-accent hover:text-white' : 'text-primary hover:text-accent'}`}>
                                    View {region.name} Services &rarr;
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 max-w-3xl mx-auto text-center">
                    <h3 className="text-2xl font-bold text-dark-text mb-4">Don't see your area listed?</h3>
                    <p className="text-lg text-body-text mb-8">We frequently take on larger projects slightly outside our typical coverage area. Get in touch to discuss your specific location.</p>
                    <Button size="lg" variant="primary" href="/contact">Contact Us to Check Coverage</Button>
                </div>
            </Section>
        </>
    );
}
