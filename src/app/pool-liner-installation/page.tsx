import { Metadata } from 'next';
import Image from 'next/image';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { CheckCircle2, Navigation } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Pool Liner Installation Hampshire | Bespoke Fit, 10-Year Guarantee',
    description: 'Professional swimming pool liner installation across Hampshire. On-site welded Renolit reinforced liners fitted to any pool shape. 10-year watertight guarantee. Free survey.',
};

export default function PoolLinerInstallationPage() {
    return (
        <>
            <Section bg="primary" className="pt-32 pb-20 md:pt-40 md:pb-32  relative overflow-hidden text-white">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/hero.png" // Fallback to hero if specific image is unavailable
                        alt="Pool liner installation"
                        fill
                        className="object-cover opacity-30 mix-blend-overlay"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent" />
                </div>

                <div className="container relative z-10 max-w-4xl">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">Pool Liner Installation</h1>
                    <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-light mb-10">
                        Whether you're building a new pool or upgrading an existing one, our bespoke liner installation service delivers a precision-fitted, reinforced pool liner tailored to your exact pool dimensions.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Button size="lg" href="/contact" variant="accent">Get Your Free Quote</Button>
                        <Button size="lg" href="#details" variant="secondary" className="border-white text-white hover:bg-white hover:text-primary">Learn More</Button>
                    </div>
                </div>
            </Section>

            <Section id="details" bg="white" spacing="xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-dark-text mb-6">Precision Fit for Every Pool</h2>
                        <p className="text-lg text-body-text mb-6 leading-relaxed">
                            Every liner is welded on-site using premium Renolit Alkorplan material, ensuring a seamless, watertight finish that lasts for decades. We never rely on pre-fabricated stretching.
                        </p>
                        <p className="text-lg text-body-text mb-8 leading-relaxed">
                            Why choose professional installation over DIY? Pool liners require exact measurements, careful surface preparation, and specialised hot-air welding equipment. A tiny mistake in welding can lead to massive water leaks and structural damage over time.
                        </p>

                        <ul className="space-y-4 mb-8">
                            {[
                                "1.5mm Renolit Alkorplan reinforced material",
                                "On-site precision welding",
                                "Suitable for any shape (rectangular, freeform, custom)",
                                "Full draining & surface preparation included",
                                "10-year watertight guarantee"
                            ].map((item, i) => (
                                <li key={i} className="flex gap-3 items-start">
                                    <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                                    <span className="font-semibold text-dark-text">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="relative rounded-2xl overflow-hidden aspect-square md:aspect-[4/3] shadow-xl">
                        <Image src="/images/welding.png" alt="Welding a pool liner" fill className="object-cover" />
                    </div>
                </div>
            </Section>

            <Section bg="light" spacing="xl">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-dark-text mb-6">Frequently Asked Questions</h2>
                </div>
                <div className="max-w-4xl mx-auto space-y-6">
                    <Card className="p-8">
                        <h3 className="text-xl font-bold text-dark-text mb-3">How long does pool liner installation take?</h3>
                        <p className="text-body-text">Most residential installations are completed in 2-5 days, depending on pool size and complexity.</p>
                    </Card>
                    <Card className="p-8">
                        <h3 className="text-xl font-bold text-dark-text mb-3">Can you install a liner in any shape pool?</h3>
                        <p className="text-body-text">Yes. Our on-site welding process means we can fit a liner to absolutely any pool shape, including freeform and custom designs.</p>
                    </Card>
                    <Card className="p-8">
                        <h3 className="text-xl font-bold text-dark-text mb-3">What preparation is needed before installation?</h3>
                        <p className="text-body-text">We handle everything — draining, cleaning, surface preparation, and removal of the old liner if replacing.</p>
                    </Card>
                </div>
            </Section>

            <Section bg="primary" spacing="lg" className="text-center text-white">
                <h2 className="text-3xl font-bold mb-6">Ready to install your new pool liner?</h2>
                <Button size="lg" variant="accent" href="/contact">Book Your Free Survey</Button>
            </Section>
        </>
    );
}
