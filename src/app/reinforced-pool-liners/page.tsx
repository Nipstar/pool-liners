import { Metadata } from 'next';
import Image from 'next/image';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Reinforced Pool Liners UK | Renolit Alkorplan | Bespoke Pool Liners',
    description: 'Premium reinforced pool liners from Renolit Alkorplan. 1.5mm PVC with polyester mesh core for maximum durability. Hampshire installer.',
};

export default function ReinforcedPoolLinersPage() {
    return (
        <>
            <Section bg="primary" className="pt-32 pb-20 md:pt-40 md:pb-32  relative overflow-hidden text-white">
                <div className="absolute inset-0 z-0 bg-primary">
                    <Image
                        src="/images/reinforced-product.png"
                        alt="Renolit Alkorplan Reinforced Liners"
                        fill
                        className="object-cover object-center opacity-20"
                    />
                </div>
                <div className="container relative z-10 max-w-4xl text-center mx-auto">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">Reinforced Pool Liners</h1>
                    <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-light mb-10">
                        We exclusively use Renolit Alkorplan reinforced pool liners — the industry-standard choice for durability and longevity.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Button size="lg" href="/pool-liner-colours" variant="secondary" className="border-white text-white hover:bg-white hover:text-primary">View Liner Colours</Button>
                    </div>
                </div>
            </Section>

            <Section bg="white" spacing="xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-dark-text mb-6">What is a Reinforced Pool Liner?</h2>
                        <p className="text-lg text-body-text mb-6 leading-relaxed">
                            Unlike standard vinyl liners which are typically 0.5mm to 0.75mm thick, a reinforced liner features a <strong className="font-semibold text-primary">1.5mm thick PVC membrane</strong> with an embedded polyester mesh core.
                        </p>
                        <p className="text-lg text-body-text mb-8 leading-relaxed">
                            This makes them significantly stronger, more resistant to punctures, and longer-lasting than any standard pre-fabricated alternative.
                        </p>
                        <ul className="space-y-4 mb-8">
                            {[
                                "Double the thickness of standard liners",
                                "Embedded polyester mesh prevents tearing",
                                "Highly resistant to UV degradation & chemicals",
                                "Can withstand temperatures up to 35°C",
                                "Anti-fungal and anti-bacterial coating"
                            ].map((item, i) => (
                                <li key={i} className="flex gap-3 items-start">
                                    <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                                    <span className="font-semibold text-dark-text">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="relative rounded-2xl bg-gray-100 overflow-hidden aspect-[4/3] shadow-xl">
                        <Image src="/images/portfolio-2.png" alt="Reinforced Pool Liner" fill className="object-cover" />
                    </div>
                </div>
            </Section>

            <Section bg="light" spacing="xl">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-dark-text mb-6">The Renolit Alkorplan Difference</h2>
                    <p className="text-lg text-body-text">
                        As certified Renolit Alkorplan installers, we offer the complete range of premium finishes across their entire collection.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {[
                        { title: "Standard / Plain", desc: "Classic solid colours that provide a clean, timeless look for both indoor and outdoor pools." },
                        { title: "Printed & Ceramic", desc: "Beautiful mosaic, marble, and ceramic tile effects printed directly onto the 1.5mm membrane." },
                        { title: "Touch (3D Texture)", desc: "Exquisite 3D-embossed finishes that mimic natural stone, slate, and sand both visually and to the touch." }
                    ].map((range, i) => (
                        <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
                            <h3 className="text-xl font-bold text-dark-text mb-4">{range.title}</h3>
                            <p className="text-body-text">{range.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <Button href="/pool-liner-colours" variant="primary" size="lg" withArrow>Browse Full Colour Range</Button>
                </div>
            </Section>
        </>
    );
}
