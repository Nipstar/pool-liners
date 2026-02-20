import { Metadata } from 'next';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { CheckCircle2, XCircle } from 'lucide-react';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'Bagged Pool Liners Hampshire | Pre-Fabricated Liner Installation',
    description: 'Pre-fabricated bagged pool liners for standard-shaped pools. Cost-effective liner replacement with professional installation across Hampshire. Free quote.',
};

export default function BaggedPoolLinersPage() {
    return (
        <>
            <Section bg="primary" className="pt-32 pb-20 md:pt-40 md:pb-32  relative overflow-hidden text-white">
                <div className="absolute inset-0 z-0 bg-primary">
                    <Image
                        src="/images/portfolio-2.png"
                        alt="Bagged pool liner"
                        fill
                        className="object-cover object-center opacity-20"
                    />
                </div>
                <div className="container relative z-10 max-w-4xl text-center mx-auto">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">Bagged Pool Liners</h1>
                    <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-light mb-10">
                        For standard-shaped pools, a pre-fabricated bagged liner can be a cost-effective alternative to on-site welded liners. We supply and install high-quality bagged liners professionally fitted to ensure a smooth result.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Button size="lg" href="/contact" variant="accent">Get a Quote for a Bagged Liner</Button>
                    </div>
                </div>
            </Section>

            <Section bg="white" spacing="xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-dark-text mb-6">What is a Bagged Liner?</h2>
                        <p className="text-lg text-body-text mb-6 leading-relaxed">
                            Unlike a reinforced liner which is cut and welded on-site, a"bagged" liner is manufactured in a factory to the exact dimensions of your pool, creating a single, enormous"bag".
                        </p>
                        <p className="text-lg text-body-text mb-8 leading-relaxed">
                            During installation, a powerful vacuum is used behind the liner to stretch it tightly against the pool walls and floor before the water is added.
                        </p>
                    </div>
                    <div className="bg-[#F5F9FC] rounded-2xl p-10 border border-blue-50">
                        <h3 className="text-2xl font-bold text-dark-text mb-6">When to Choose a Bagged Liner</h3>
                        <ul className="space-y-4">
                            <li className="flex gap-3 items-start">
                                <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                                <span className="text-body-text"><strong className="text-dark-text font-semibold">Standard Shapes:</strong> Your pool is a simple rectangle or oval.</span>
                            </li>
                            <li className="flex gap-3 items-start">
                                <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                                <span className="text-body-text"><strong className="text-dark-text font-semibold">Budget Constraints:</strong> You need a more cost-effective replacement option than reinforced 1.5mm liners.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </Section>

            <Section bg="light" spacing="xl">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-dark-text mb-4">Bagged vs. Reinforced</h2>
                        <p className="text-lg text-body-text">An honest comparison to help you choose the right product for your pool.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                            <h3 className="text-2xl font-bold text-dark-text mb-6 text-center border-b pb-4">Bagged Liners</h3>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-accent" /> More affordable upfront</li>
                                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-accent" /> Quick installation (once manufactured)</li>
                                <li className="flex items-center gap-3"><XCircle className="w-5 h-5 text-red-400" /> Thinner material (0.5mm - 0.75mm)</li>
                                <li className="flex items-center gap-3"><XCircle className="w-5 h-5 text-red-400" /> Shorter lifespan (5-10 years)</li>
                                <li className="flex items-center gap-3"><XCircle className="w-5 h-5 text-red-400" /> Not suitable for complex stairs or freeform shapes</li>
                            </ul>
                        </div>

                        <div className="bg-primary text-white p-8 rounded-xl shadow-lg border border-primary">
                            <h3 className="text-2xl font-bold mb-6 text-center border-b border-white/20 pb-4">Reinforced Liners</h3>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-accent" /> 1.5mm thick with mesh core</li>
                                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-accent" /> Fits absolutely any shape seamlessly</li>
                                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-accent" /> Much longer lifespan (15-25 years)</li>
                                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-accent" /> Higher resistance to punctures and temperature</li>
                                <li className="flex items-center gap-3"><XCircle className="w-5 h-5 text-white/50" /> Higher initial investment</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    );
}
