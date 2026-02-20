import { Metadata } from 'next';
import Image from 'next/image';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
    title: 'Pool Liner Colours UK | Renolit Alkorplan Colour Range',
    description: 'Browse our complete range of Renolit Alkorplan pool liner colours and patterns. See how each colour looks underwater. Free colour consultation available.',
};

export default function PoolLinerColoursPage() {
    const colours = [
        { name: 'Light Blue', type: 'Plain', hex: '#63B3ED' },
        { name: 'Adriatic Blue', type: 'Plain', hex: '#2B6CB0' },
        { name: 'White', type: 'Plain', hex: '#F7FAFC' },
        { name: 'Sand', type: 'Plain', hex: '#D6BC96' },
        { name: 'Light Grey', type: 'Plain', hex: '#A0AEC0' },
        { name: 'Dark Grey', type: 'Plain', hex: '#4A5568' },
        { name: 'Blue Mosaic', type: 'Printed', src: '/images/color-swatches.png' },
        { name: 'Grey Mosaic', type: 'Printed', src: '/images/color-swatches.png' },
        { name: 'Marble', type: 'Printed', src: '/images/color-swatches.png' },
        { name: 'Touch Elegance', type: '3D Texture', bg: 'bg-slate-700' },
        { name: 'Touch Relax', type: '3D Texture', bg: 'bg-teal-600' },
        { name: 'Touch Authentic', type: '3D Texture', bg: 'bg-stone-500' },
    ];

    return (
        <>
            <Section bg="primary" className="pt-32 pb-20 md:pt-40 md:pb-24  relative overflow-hidden text-white">
                <div className="absolute inset-0 z-0 bg-primary">
                    <Image
                        src="/images/color-swatches.png"
                        alt="Pool liner colours"
                        fill
                        className="object-cover object-center opacity-30 mix-blend-overlay"
                    />
                </div>
                <div className="container relative z-10 max-w-4xl text-center mx-auto">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">Pool Liner Colours & Patterns</h1>
                    <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-light mb-10">
                        The colour of your pool liner dramatically affects how your water looks. Browse our complete Renolit Alkorplan range below.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Button size="lg" href="/contact" variant="accent">Request Colour Consultation</Button>
                    </div>
                </div>
            </Section>

            <Section bg="white" spacing="xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {colours.map((colour, i) => (
                        <div key={i} className="group rounded-2xl overflow-hidden shadow-sm border border-gray-100 bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                            <div
                                className={`h-48 w-full ${colour.bg || ''}`}
                                style={colour.hex ? { backgroundColor: colour.hex } : undefined}
                            >
                                {colour.src && (
                                    <div className="relative w-full h-full">
                                        <Image src={colour.src} fill className="object-cover" alt={`${colour.name} swatch`} />
                                    </div>
                                )}
                            </div>
                            <div className="p-5">
                                <div className="text-xs font-bold tracking-widest text-primary mb-1 uppercase">{colour.type}</div>
                                <h3 className="font-bold text-lg text-dark-text">{colour.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            <Section bg="light" spacing="xl">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-dark-text mb-8 text-center">Tips For Choosing Your Colour</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-xl shadow-sm">
                            <h3 className="text-xl font-bold text-dark-text mb-3">Sunlight & Depth</h3>
                            <p className="text-body-text">Water absorbs red light naturally. A white liner will appear light blue when filled. The deeper the pool, the darker the colour will appear. A pool located in direct sunlight will look noticeably brighter than one in the shade.</p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-sm">
                            <h3 className="text-xl font-bold text-dark-text mb-3">Surroundings</h3>
                            <p className="text-body-text">Consider your patio, decking, and garden style. Sand and grey tones often look more natural in traditional English gardens, mimicking stone, while bright blues suit contemporary, modern properties.</p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-sm">
                            <h3 className="text-xl font-bold text-dark-text mb-3">Plain vs Pattern</h3>
                            <p className="text-body-text">Printed patterns (like mosaic) are excellent at hiding minor dirt and waterline marks between cleans. Plain colours look incredibly sleek and modern but require slightly more diligent skimming.</p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-sm">
                            <h3 className="text-xl font-bold text-dark-text mb-3">Free Colour Consultation</h3>
                            <p className="text-body-text">There's no substitute for seeing swatches in person. During our free survey, we bring our complete sample book so you can see how the colours look against your paving.</p>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    );
}
