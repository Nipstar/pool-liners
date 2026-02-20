import { Metadata } from 'next';
import Image from 'next/image';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Zap } from 'lucide-react';

export const metadata: Metadata = {
    title: 'On-Site Pool Liner Welding Hampshire | Bespoke Fit Any Shape',
    description: 'Expert on-site pool liner welding for any pool shape or size. Precision hot-air welding of reinforced liners in Hampshire, Surrey & Berkshire. Seamless watertight finish.',
};

export default function OnSiteWeldingPage() {
    return (
        <>
            <Section bg="primary" className="pt-32 pb-20 md:pt-40 md:pb-32  relative overflow-hidden text-white">
                <div className="absolute inset-0 z-0 bg-primary">
                    <Image
                        src="/images/welding.png"
                        alt="On-site pool liner hot air welding"
                        fill
                        className="object-cover object-center opacity-20"
                    />
                </div>
                <div className="container relative z-10 max-w-4xl text-center mx-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-semibold mb-6">
                        <Zap className="w-4 h-4 fill-accent" /> Precision Hot-Air Welding
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">On-Site Pool Liner Welding</h1>
                    <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-light mb-10">
                        On-site welding is what sets bespoke pool liners apart. Rather than stretching a pre-made liner, we weld the raw Renolit material in-situ for a perfectly tailored fit.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Button size="lg" href="/contact" variant="accent">Get a Quote for Your Custom Pool</Button>
                    </div>
                </div>
            </Section>

            <Section bg="white" spacing="xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1 relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl">
                        <Image src="/images/welding.png" alt="On-site pool liner hot air welding" fill className="object-cover" />
                    </div>
                    <div className="order-1 lg:order-2">
                        <h2 className="text-3xl md:text-4xl font-bold text-dark-text mb-6">The Art of On-Site Welding</h2>
                        <p className="text-lg text-body-text mb-6 leading-relaxed">
                            Using specialised overlap hot-air welding equipment, we fuse the 1.5mm reinforced liner panels together directly inside the empty pool shell.
                        </p>
                        <p className="text-lg text-body-text mb-8 leading-relaxed">
                            This process melts the PVC layers together along the overlap, creating an inseparable bond that is actually stronger than the liner material itself. The result is a completely bespoke, watertight membrane that exactly follows every contour of your pool.
                        </p>

                        <div className="bg-light-bg rounded-xl p-6 border-l-4 border-l-accent">
                            <h4 className="font-bold text-lg text-dark-text mb-2">Why It Matters for Freeform Pools</h4>
                            <p className="text-body-text">
                                Kidney shapes, custom Roman ends, wrapped internal steps, and deep hopper bases are impossible to line accurately with pre-formed bags without excessive stretching or wrinkling. On-site welding solves this completely.
                            </p>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    );
}
