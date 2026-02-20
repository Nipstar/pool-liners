"use client"
import { useState } from 'react';
import Image from 'next/image';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';

const PORTFOLIO_ITEMS = [
    { img: 'portfolio-1.png', loc: 'Winchester', type: 'Residential', style: 'Renolit Alkorplan Mosaic', desc: 'A full renovation of a fading Roman-end pool. We installed a striking deep blue mosaic liner, utterly transforming the space.' },
    { img: 'portfolio-2.png', loc: 'Southampton', type: 'Indoor Pool', style: 'Renolit Plain Turquoise', desc: 'A modern indoor pool requirement. The plain turquoise liner reflects the underwater lighting beautifully.' },
    { img: 'portfolio-3.png', loc: 'Romsey', type: 'Freeform', style: 'Renolit Touch Authentic', desc: 'An organic, kidney-shaped garden pool perfectly sealed with our on-site welding process, fitting the compound curves flawlessly.' },
    { img: 'hero.png', loc: 'New Forest', type: 'Residential', style: 'Renolit Alkorplan Adriatic Blue', desc: 'A classic rectangular pool in a stunning rural setting, finished with a timeless Adriatic blue.' },
];

export default function PortfolioPage() {
    const [activeImage, setActiveImage] = useState<string | null>(null);

    return (
        <>
            <Section bg="primary" className="pt-32 pb-20 md:pt-40 md:pb-24  relative overflow-hidden text-white">
                <div className="absolute inset-0 z-0 bg-primary">
                    <Image
                        src="/images/portfolio-1.png"
                        alt="Our portfolio"
                        fill
                        className="object-cover object-center opacity-30 mix-blend-overlay"
                    />
                </div>
                <div className="container relative z-10 max-w-4xl text-center mx-auto">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">Our Work</h1>
                    <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-light mb-10">
                        Browse our portfolio of completed pool liner installations across Hampshire and the South of England.
                    </p>
                </div>
            </Section>

            <Section bg="white" spacing="xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {PORTFOLIO_ITEMS.map((item, i) => (
                        <div key={i} className="flex flex-col">
                            <div
                                className="relative aspect-[3/2] rounded-2xl overflow-hidden mb-6 cursor-pointer group"
                                onClick={() => setActiveImage(`/images/${item.img}`)}
                            >
                                <Image
                                    src={`/images/${item.img}`}
                                    alt={`${item.type} pool in ${item.loc}`}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <span className="bg-white/90 text-dark-text px-4 py-2 rounded-full font-bold text-sm">View Full Screen</span>
                                </div>
                            </div>
                            <div className="flex justify-between items-start mb-3">
                                <h3 className="text-xl font-bold text-dark-text">{item.type} — {item.loc}</h3>
                                <span className="bg-light-bg text-primary px-3 py-1 text-xs font-bold rounded-full">{item.style}</span>
                            </div>
                            <p className="text-body-text">{item.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-16 pt-16 border-t border-gray-100">
                    <h3 className="text-2xl font-bold text-dark-text mb-6">Want to see what we can do for your pool?</h3>
                    <Button size="lg" href="/contact" variant="primary">Book a Free Survey</Button>
                </div>
            </Section>

            {/* Lightbox */}
            {activeImage && (
                <div
                    className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 cursor-zoom-out"
                    onClick={() => setActiveImage(null)}
                >
                    <div className="relative w-full max-w-6xl aspect-[16/9] md:aspect-auto md:h-[85vh]">
                        <Image
                            src={activeImage}
                            alt="Enlarged pool view"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <button
                        className="absolute top-6 right-6 text-white bg-white/10 hover:bg-white/20 p-2 rounded-full backdrop-blur transition-colors"
                        onClick={() => setActiveImage(null)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                    </button>
                </div>
            )}
        </>
    );
}
