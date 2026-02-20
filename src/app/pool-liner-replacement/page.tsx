import { Metadata } from 'next';
import Image from 'next/image';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { AlertTriangle, Clock, ShieldCheck, Droplets } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Pool Liner Replacement Hampshire & Surrey | Bespoke Pool Liners',
    description: 'Expert pool liner replacement across Hampshire and Surrey. Replace worn, faded or leaking liners with premium Renolit reinforced liners. 10-year guarantee. Free quote.',
};

export default function PoolLinerReplacementPage() {
    return (
        <>
            <Section bg="dark" className="pt-32 pb-20 md:pt-40 md:pb-32  relative overflow-hidden text-white">
                <div className="absolute inset-0 z-0 bg-[#1A2332]">
                    <Image
                        src="/images/hero.png"
                        alt="Pool liner replacement"
                        fill
                        className="object-cover object-center opacity-30 mix-blend-overlay"
                    />
                </div>

                <div className="container relative z-10 max-w-4xl text-center mx-auto">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">Pool Liner Replacement</h1>
                    <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-light mb-10">
                        Is your pool liner faded, wrinkled, cracking, or leaking? A new reinforced pool liner can completely transform your swimming pool — restoring it to better-than-new condition in just a few days.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Button size="lg" href="/contact" variant="accent">Request Replacement Quote</Button>
                    </div>
                </div>
            </Section>

            <Section bg="white" spacing="xl">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-dark-text mb-6">Signs It's Time For A Replacement</h2>
                    <p className="text-lg text-body-text">Don't wait until a major leak damages your pool's structure. Look out for these common warning signs.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { icon: Droplets, title: "Unexplained Water Loss", desc: "Losing more than 1/4 inch of water per day typically indicates a hidden leak." },
                        { icon: AlertTriangle, title: "Cracking & Tearing", desc: "Vinyl liners become brittle over time. Unrepairable cracks require full replacement." },
                        { icon: Clock, title: "Fading & Staining", desc: "Chemicals and UV rays eventually bleach the liner, making the pool look tired and uninviting." },
                        { icon: ShieldCheck, title: "Wrinkles & Stretching", desc: "Excessive wrinkling suggests the liner has lost its elasticity and is fundamentally compromised." },
                    ].map((item, i) => (
                        <Card key={i} className="p-8 text-center flex flex-col items-center">
                            <div className="w-16 h-16 rounded-full bg-light-bg flex items-center justify-center text-primary mb-6">
                                <item.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-dark-text mb-3">{item.title}</h3>
                            <p className="text-body-text">{item.desc}</p>
                        </Card>
                    ))}
                </div>
            </Section>

            <Section bg="light" spacing="xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1 relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl">
                        <Image src="/images/portfolio-1.png" alt="Replaced pool liner" fill className="object-cover" />
                    </div>
                    <div className="order-1 lg:order-2">
                        <h2 className="text-3xl md:text-4xl font-bold text-dark-text mb-6">The Replacement Process</h2>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold shrink-0">1</div>
                                <div>
                                    <h4 className="font-bold text-lg">Drain & Inspect</h4>
                                    <p className="text-body-text">We safely drain the pool and inspect the bare structure for any required repairs.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold shrink-0">2</div>
                                <div>
                                    <h4 className="font-bold text-lg">Remove Old Liner</h4>
                                    <p className="text-body-text">The old, damaged liner is stripped away and ethically disposed of.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold shrink-0">3</div>
                                <div>
                                    <h4 className="font-bold text-lg">Surface Preparation</h4>
                                    <p className="text-body-text">We smooth out the floor and walls, applying anti-fungal treatments and protective underlay.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold shrink-0">4</div>
                                <div>
                                    <h4 className="font-bold text-lg">Install & Weld</h4>
                                    <p className="text-body-text">The new Renolit Alkorplan liner is precision-welded into place and vacuum-sealed.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    );
}
