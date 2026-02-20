import { Metadata } from 'next';
import Image from 'next/image';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Award, CheckCircle2, ShieldCheck, MapPin } from 'lucide-react';

export const metadata: Metadata = {
    title: 'About Bespoke Pool Liners | Hampshire Pool Liner Specialists',
    description: 'Meet the team behind Bespoke Pool Liners. 15+ years experience, 100+ installations, based in Romsey, Hampshire. Local experts in reinforced pool liners.',
};

export default function AboutUsPage() {
    return (
        <>
            <Section bg="primary" className="pt-32 pb-20 md:pt-40 md:pb-32  relative overflow-hidden text-white">
                <div className="absolute inset-0 z-0 bg-primary">
                    <Image
                        src="/images/hero.png"
                        alt="Bespoke Pool Liners Team"
                        fill
                        className="object-cover object-center opacity-20"
                    />
                </div>
                <div className="container relative z-10 max-w-4xl text-center mx-auto">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">About Bespoke Pool Liners</h1>
                    <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-light mb-10">
                        Based in Romsey, Hampshire, we provide swimming pool liner installations backed by genuine expertise and a guarantee you can trust.
                    </p>
                </div>
            </Section>

            <Section bg="white" spacing="xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="relative rounded-2xl overflow-hidden aspect-[3/4] md:aspect-[4/3] max-w-md mx-auto lg:max-w-full shadow-2xl">
                        <Image src="/images/about-portrait.png" alt="Antony Lange - Owner of Bespoke Pool Liners" fill className="object-cover" />
                    </div>
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-dark-text mb-6">Our Story</h2>
                        <div className="space-y-6 text-lg text-body-text mb-10">
                            <p>
                                Bespoke Pool Liners was founded by Antony Lange with a simple mission — to provide homeowners across Hampshire with the highest quality pool liner installations, without the premium prices of large national agencies.
                            </p>
                            <p>
                                After years in the swimming pool industry, Antony recognised that the quality of a pool liner installation depends entirely on the skill of the fitter, particularly when it comes to on-site hot air welding. A poor weld means leaks and a reduced lifespan.
                            </p>
                            <p>
                                By keeping the business local and independent, we ensure that every single pool is surveyed, specced, and installed by experienced professionals who take personal pride in the finish line.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-6 p-6 rounded-2xl bg-[#0C3B5E] text-white">
                            <div>
                                <div className="text-3xl font-black text-accent mb-1">15+</div>
                                <div className="text-sm font-semibold opacity-90">Years Experience</div>
                            </div>
                            <div>
                                <div className="text-3xl font-black text-accent mb-1">100+</div>
                                <div className="text-sm font-semibold opacity-90">Pools Completed</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            <Section bg="light" spacing="xl">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-dark-text mb-6">The Bespoke Approach</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                        <Award className="w-12 h-12 text-accent mb-6" />
                        <h3 className="text-xl font-bold text-dark-text mb-4">Quality over Quantity</h3>
                        <p className="text-body-text">We don't rush. We take the time needed to properly prepare your pool shell and carefully weld every seam. Every pool is treated as bespoke.</p>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                        <CheckCircle2 className="w-12 h-12 text-accent mb-6" />
                        <h3 className="text-xl font-bold text-dark-text mb-4">Renolit Alkorplan Standards</h3>
                        <p className="text-body-text">We exclusively use premium 1.5mm Renolit Alkorplan reinforced materials because they are quite simply the best on the market.</p>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                        <ShieldCheck className="w-12 h-12 text-accent mb-6" />
                        <h3 className="text-xl font-bold text-dark-text mb-4">10-Year Guarantee</h3>
                        <p className="text-body-text">We stand behind our work. Every installation is backed by a comprehensive 10-year watertight guarantee covering materials and workmanship.</p>
                    </div>
                </div>
            </Section>

            <Section bg="primary" spacing="lg" className="text-center text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Based in Romsey, Serving Hampshire</h2>
                <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">We are a completely local team. No call centres, no subcontractors.</p>
                <div className="flex flex-wrap justify-center gap-4">
                    <Button size="lg" variant="accent" href="/contact">Get in Touch Today</Button>
                    <Button size="lg" variant="secondary" href="/areas" className="border-white text-white hover:bg-white hover:text-primary">View Areas We Cover</Button>
                </div>
            </Section>
        </>
    );
}
