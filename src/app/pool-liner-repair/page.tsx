import { Metadata } from 'next';
import Image from 'next/image';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Wrench, Search, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Pool Liner Repair Hampshire | Leak Fixes & Patch Repairs',
    description: 'Swimming pool liner repair services across Hampshire. Professional leak detection, patch repairs and seam re-welding. Fast response, lasting repairs. Call today.',
};

export default function PoolLinerRepairPage() {
    return (
        <>
            <Section bg="primary" className="pt-32 pb-20 md:pt-40 md:pb-32  relative overflow-hidden text-white">
                <div className="absolute inset-0 z-0 bg-primary">
                    <Image
                        src="/images/portfolio-3.png"
                        alt="Pool liner repair"
                        fill
                        className="object-cover object-center opacity-30 mix-blend-overlay"
                    />
                </div>
                <div className="container relative z-10 max-w-3xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-semibold mb-6">
                        <Wrench className="w-4 h-4" /> Honest Assessment Guaranteed
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">Pool Liner Repair</h1>
                    <p className="text-xl text-white/90 leading-relaxed font-light mb-10">
                        Not every pool liner issue requires a full replacement. Our repair service can fix tears, punctures, seam failures, and small leaks — extending the life of your existing liner and saving you money.
                    </p>
                    <Button size="lg" href="/contact" variant="accent">Book a Repair Survey</Button>
                </div>
            </Section>

            <Section bg="white" spacing="xl">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-16 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-dark-text mb-6">Our Repair Services</h2>
                        <p className="text-lg text-body-text">We assess every pool honestly and only recommend replacement when repair isn't the best option.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        <Card className="p-8 border-t-4 border-t-secondary">
                            <Search className="w-10 h-10 text-secondary mb-6" />
                            <h3 className="text-xl font-bold mb-3">Leak Detection</h3>
                            <p className="text-body-text">We locate the exact source of water loss, isolating hidden tears and seam splits.</p>
                        </Card>
                        <Card className="p-8 border-t-4 border-t-accent">
                            <Wrench className="w-10 h-10 text-accent mb-6" />
                            <h3 className="text-xl font-bold mb-3">Patch Repairs</h3>
                            <p className="text-body-text">Durable underwater patches that seal punctures and small tears instantly.</p>
                        </Card>
                        <Card className="p-8 border-t-4 border-t-primary">
                            <ShieldCheck className="w-10 h-10 text-primary mb-6" />
                            <h3 className="text-xl font-bold mb-3">Seam Re-Welding</h3>
                            <p className="text-body-text">We can re-weld separated seams using professional hot-air equipment.</p>
                        </Card>
                    </div>

                    <div className="bg-light-bg rounded-2xl p-8 md:p-12 text-center border border-blue-50">
                        <h2 className="text-2xl font-bold text-dark-text mb-4">Emergency Pool Leaks?</h2>
                        <p className="text-body-text mb-8 max-w-2xl mx-auto">
                            If your pool is losing water rapidly, it's crucial to act fast to prevent structural damage behind the liner.
                            Our Hampshire-based team can often respond to emergency leak situations within 48 hours.
                        </p>
                        <a href="tel:07442986034" className="inline-flex items-center justify-center font-semibold transition-all duration-200 rounded-lg bg-dark-text text-white text-lg px-8 py-4 hover:bg-black shadow-lg">
                            Call Now: 07442 986034
                        </a>
                    </div>
                </div>
            </Section>
        </>
    );
}
