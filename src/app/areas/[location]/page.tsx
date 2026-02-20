import { Metadata } from 'next';
import Image from 'next/image';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { CheckCircle2, MapPin } from 'lucide-react';
import Link from 'next/link';

interface Props {
    params: { location: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const p = await params;
    const loc = p.location.charAt(0).toUpperCase() + p.location.slice(1);

    return {
        title: `Pool Liner Installation ${loc} | Bespoke Pool Liners`,
        description: `Expert swimming pool liner installation, replacement, and repair services in ${loc}. Premium Renolit reinforced liners. 10-year watertight guarantee. Free quote.`
    };
}

export default async function AreaTemplatePage({ params }: Props) {
    const p = await params;
    const locRaw = p.location;
    // Format the location name (capitalise hyphens etc, eg 'new-forest' -> 'New Forest')
    const loc = locRaw.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

    return (
        <>
            <Section bg="primary" className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden text-white">
                <div className="absolute inset-0 z-0 bg-primary">
                    <Image
                        src="/images/hero.png"
                        alt={`Swimming pools in ${loc}`}
                        fill
                        className="object-cover object-center opacity-20"
                    />
                </div>

                <div className="container relative z-10 max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-semibold mb-6">
                        <MapPin className="w-4 h-4 fill-accent" /> Local Hampshire Installer
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 drop-shadow-lg">Pool Liner Installation in {loc}</h1>
                    <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-light mb-10 max-w-2xl mx-auto">
                        Bespoke Pool Liners provides premium swimming pool liner replacements, installations, and repairs for homeowners across {loc} and the surrounding areas.
                    </p>
                    <Button size="lg" href="/contact" variant="accent">Book your Free Survey in {loc}</Button>
                </div>
            </Section>

            <Section bg="white" spacing="xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl">
                        <Image src="/images/portfolio-1.png" alt={`Pool liner installation project in ${loc}`} fill className="object-cover" />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-dark-text mb-6">Our Services in {loc}</h2>
                        <p className="text-lg text-body-text mb-8 leading-relaxed">
                            Based just a short drive away in Romsey, we are perfectly positioned to serve properties throughout {loc}. We eliminate the need to deal with national agencies or distant contractors.
                        </p>

                        <ul className="space-y-4 mb-10">
                            <li className="bg-light-bg px-6 py-4 rounded-xl border border-blue-50">
                                <h4 className="font-bold text-dark-text flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-accent" /> Bespoke Liner Installation</h4>
                                <p className="text-body-text text-sm mt-1 ml-7">Complete installation of new reinforced pool liners tailored to any pool shape.</p>
                            </li>
                            <li className="bg-light-bg px-6 py-4 rounded-xl border border-blue-50">
                                <h4 className="font-bold text-dark-text flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-accent" /> On-Site Precision Welding</h4>
                                <p className="text-body-text text-sm mt-1 ml-7">Flawless finishes for freeform, geometric, or complex pools using hot-air welding technology.</p>
                            </li>
                            <li className="bg-light-bg px-6 py-4 rounded-xl border border-blue-50">
                                <h4 className="font-bold text-dark-text flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-accent" /> Diagnostic & Repair</h4>
                                <p className="text-body-text text-sm mt-1 ml-7">Quick diagnostic response for leaks and patch repairs to extend the life of your existing liner.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </Section>

            <Section bg="light" spacing="xl" className="text-center">
                <h2 className="text-3xl font-bold text-dark-text mb-6">Why Choose Us For Your {loc} Pool?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-12 mb-16">
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="text-xl font-bold text-primary mb-3">10-Year Guarantee</h3>
                        <p className="text-body-text">Every installation completed in {loc} comes with a comprehensive 10-year watertight warranty for complete peace of mind.</p>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="text-xl font-bold text-primary mb-3">Premium Renolit Products</h3>
                        <p className="text-body-text">We exclusively use 1.5mm Renolit Alkorplan materials — available in over 40 colours, patterns, and 3D textures.</p>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="text-xl font-bold text-primary mb-3">Expert Local Team</h3>
                        <p className="text-body-text">No call centres and no subcontractors. You deal directly with the skilled fitters who will be working on your property.</p>
                    </div>
                </div>
            </Section>

            <Section bg="primary" spacing="lg" className="text-center text-white">
                <h2 className="text-3xl font-bold mb-6">Request A Quote in {loc}</h2>
                <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
                    Book your free, no-obligation site survey. We'll visit your property, assess your pool, and provide a clear quote.
                </p>
                <Button size="lg" variant="accent" href="/contact">Contact the Team</Button>
            </Section>
        </>
    );
}
