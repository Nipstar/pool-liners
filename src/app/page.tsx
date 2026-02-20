import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Section } from '@/components/ui/Section';
import { Wrench, RefreshCw, ShieldCheck, Layers, Package, Zap, CheckCircle2, MapPin, Award, Star } from 'lucide-react';
import { generateMetadata as genMeta, PAGE_METADATA } from '@/lib/metadata';
import { LocalBusinessSchema, BreadcrumbSchema } from '@/components/seo/SchemaOrg';

export const metadata = genMeta(PAGE_METADATA.home);

export default function Home() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[{ name: 'Home', url: '/' }]} />
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0 bg-primary">
          <Image
            src="/images/hero.png"
            alt="Beautiful swimming pool in Hampshire"
            fill
            priority
            className="object-cover object-center opacity-60"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0C3B5E] via-[#0C3B5E]/80 to-transparent mix-blend-multiply" />
        </div>

        <div className="container relative z-10 mx-auto px-4 max-w-7xl pt-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
              Custom Pool Liner Specialists in Hampshire
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 md:mb-10 max-w-2xl leading-relaxed">
              Expert installation, replacement & repair of reinforced swimming pool liners.
              Renolit Alkorplan certified. 10-year watertight guarantee.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Button size="lg" href="/contact">Get Your Free Quote</Button>
              <Button variant="secondary" size="lg" href="/portfolio" className="border-white text-white hover:bg-white hover:text-primary">
                View Our Work
              </Button>
            </div>
          </div>
        </div>

        {/* Trust Bar overlapping bottom */}
        <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-md border-t border-white/20">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex flex-col md:flex-row justify-between items-center py-6 gap-6 text-white text-sm md:text-base font-semibold">
              <div className="flex items-center gap-3">
                <Award className="w-6 h-6 text-accent" />
                <span>15+ Years Experience</span>
              </div>
              <div className="hidden md:block w-px h-6 bg-white/20" />
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-accent" />
                <span>100+ Pools Completed</span>
              </div>
              <div className="hidden md:block w-px h-6 bg-white/20" />
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-accent" />
                <span>10-Year Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <Section bg="white" spacing="lg">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-text mb-4">Our Pool Liner Services</h2>
          <p className="text-lg text-body-text">
            From bespoke installations to emergency repairs, we deliver precision-fitted pool liners across Hampshire and the South of England.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { tag: Wrench, title: "Pool Liner Installation", desc: "New pool liner installations tailored to any pool shape or size. On-site welded for a perfect, seamless fit.", link: "/pool-liner-installation" },
            { tag: RefreshCw, title: "Pool Liner Replacement", desc: "Replace worn, faded or damaged liners with modern reinforced alternatives. Transform your pool in days.", link: "/pool-liner-replacement" },
            { tag: ShieldCheck, title: "Pool Liner Repair", desc: "Professional leak detection and repair services. Patch or re-weld damaged sections to extend liner life.", link: "/pool-liner-repair" },
            { tag: Layers, title: "Reinforced Pool Liners", desc: "Premium Renolit Alkorplan reinforced PVC liners — 1.5mm thickness for maximum durability and longevity.", link: "/reinforced-pool-liners" },
            { tag: Package, title: "Bagged Pool Liners", desc: "Pre-fabricated liners for standard pool shapes. A cost-effective solution with quick installation times.", link: "/bagged-pool-liners" },
            { tag: Zap, title: "On-Site Welding", desc: "Precision on-site liner welding for irregularly shaped pools. Bespoke fit guaranteed, any shape or size.", link: "/on-site-pool-liner-welding" },
          ].map((service, i) => (
            <Card key={i} withHover className="p-8 flex flex-col items-start border-gray-100 bg-white group">
              <div className="w-14 h-14 rounded-2xl bg-light-bg flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <service.tag className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-dark-text mb-3">{service.title}</h3>
              <p className="text-body-text mb-8 leading-relaxed flex-1">{service.desc}</p>
              <Button href={service.link} variant="ghost" withArrow className="mt-auto pl-0">Learn more</Button>
            </Card>
          ))}
        </div>
      </Section>

      {/* WHY CHOOSE US */}
      <Section bg="light" spacing="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
            <Image
              src="/images/welding.png"
              alt="Professional on-site pool liner welding"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-dark-text mb-10">Why Hampshire Homeowners Trust Us</h2>

            <div className="space-y-8">
              {[
                { title: "Reinforced Renolit Liners as Standard", desc: "We use premium Renolit Alkorplan reinforced pool liners on every project. At 1.5mm thick with a polyester mesh core, these liners are built to withstand decades of use, UV exposure, and chemical treatment." },
                { title: "10-Year Watertight Guarantee", desc: "Every installation comes with our 10-year watertight guarantee. We stand behind our workmanship because we know the quality of our welds and fittings is second to none." },
                { title: "Bespoke Fit for Any Pool", desc: "Freeform, rectangular, kidney-shaped, or completely custom — we weld every liner on-site to ensure a precision fit with no wrinkles, no gaps, and no compromise." },
                { title: "Local Hampshire Team", desc: "Based in Romsey, we're your local pool liner specialists. No call centres, no subcontractors — just experienced fitters who take pride in every installation." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-dark-text mb-2">{item.title}</h3>
                    <p className="text-body-text leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* PROCESS */}
      <Section bg="white" spacing="lg">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-text mb-4">How It Works</h2>
          <p className="text-lg text-body-text">
            From initial survey to finished pool — our straightforward 4-step process.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          <div className="hidden lg:block absolute top-[2.5rem] left-[10%] right-[10%] h-[2px] bg-gray-100 z-0" />

          {[
            { num: "01", title: "Free Survey & Quote", desc: "We visit your property, measure your pool, assess the condition, and provide a detailed, no-obligation quote." },
            { num: "02", title: "Design & Selection", desc: "Choose from our wide range of Renolit colours and patterns. We'll help you select the perfect liner for your pool." },
            { num: "03", title: "Professional Fit", desc: "Our experienced team drains, prepares, and installs your new liner with precision on-site welding for a flawless fit." },
            { num: "04", title: "Fill & Guarantee", desc: "We refill your pool, check every seam, and hand over your 10-year watertight guarantee. Aftercare included." }
          ].map((step, i) => (
            <div key={i} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-white border-[6px] border-light-bg flex items-center justify-center text-2xl font-black text-primary mb-6 shadow-sm">
                {step.num}
              </div>
              <h3 className="text-xl font-bold text-dark-text mb-3">{step.title}</h3>
              <p className="text-body-text">{step.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* PORTFOLIO PREVIEW */}
      <Section bg="light" spacing="xl">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-text mb-4">Recent Transformations</h2>
            <p className="text-lg text-body-text">See the difference a new pool liner makes to your property.</p>
          </div>
          <Button href="/portfolio" variant="secondary" withArrow>View Full Portfolio</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { img: "portfolio-1.png", alt: "Mosaic pattern pool transformation", tag: "Roman End & Mosaic" },
            { img: "portfolio-2.png", alt: "Indoor pool transformation", tag: "Indoor Turquoise" },
            { img: "portfolio-3.png", alt: "Kidney shaped pool liner", tag: "Freeform Dark Blue" },
          ].map((item, i) => (
            <Link key={i} href="/portfolio" className="group block relative rounded-2xl overflow-hidden aspect-[4/3] bg-gray-200">
              <Image
                src={`/images/${item.img}`}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A2332]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="bg-accent text-white px-3 py-1 rounded-full text-xs font-semibold mb-2 inline-block">Transformation</span>
                <p className="text-white font-medium">{item.tag}</p>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <Section bg="white" spacing="xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-text mb-4">What Our Customers Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "James W.", loc: "Winchester", quote: "Antony and his team did an incredible job replacing our 20-year-old pool liner. The new Renolit liner looks absolutely stunning and the installation was completed in just three days. Highly recommend." },
            { name: "Sarah T.", loc: "Southampton", quote: "We had an unusual L-shaped pool that other companies said would be difficult. Bespoke Pool Liners welded a perfect liner on-site — not a single wrinkle. Exceptional craftsmanship." },
            { name: "David & Clare M.", loc: "Romsey", quote: "Professional from start to finish. The free survey was thorough, the quote was fair, and the installation quality was outstanding. Our pool looks brand new." },
          ].map((test, i) => (
            <Card key={i} className="p-8 border border-gray-100 shadow-sm flex flex-col h-full bg-[#F5F9FC]/30">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
              </div>
              <p className="text-body-text italic flex-1 mb-8 leading-relaxed">"{test.quote}"</p>
              <div className="mt-auto border-t border-gray-100 pt-6">
                <p className="font-bold text-dark-text">{test.name}</p>
                <p className="text-sm text-body-text">{test.loc}</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* AREAS WE COVER */}
      <Section bg="light" spacing="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-dark-text mb-6">Serving Hampshire & the South of England</h2>
            <p className="text-lg text-body-text mb-8">
              Based in Romsey, we provide pool liner services across Hampshire and neighbouring counties.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-10">
              <ul className="space-y-3">
                <li className="flex items-center gap-2 font-semibold text-primary"><MapPin className="w-5 h-5 text-accent" /> Hampshire</li>
                <li className="flex items-center gap-2 font-medium text-body-text ml-7">Surrey</li>
                <li className="flex items-center gap-2 font-medium text-body-text ml-7">Berkshire</li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 font-medium text-body-text ml-7">Dorset</li>
                <li className="flex items-center gap-2 font-medium text-body-text ml-7">Wiltshire</li>
                <li className="flex items-center gap-2 font-medium text-body-text ml-7">West Sussex</li>
              </ul>
            </div>

            <Button href="/areas" variant="primary" withArrow>View All Areas</Button>
          </div>
          <div className="relative h-[400px] bg-gray-100 rounded-2xl shadow-xl overflow-hidden border border-gray-100 group">
            <iframe
              src="https://maps.google.com/maps?width=100%25&amp;height=100%25&amp;hl=en&amp;q=Romsey,%20Hampshire,%20UK+(Bespoke%20Pool%20Liners)&amp;t=&amp;z=10&amp;ie=UTF8&amp;iwloc=near&amp;output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full"
              title="Map showing Romsey, Hampshire"
            />
          </div>
        </div>
      </Section>

      {/* CTA BANNER */}
      <section className="bg-[#0C3B5E] py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay" />
        <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Transform Your Pool?</h2>
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Get a free, no-obligation survey and quote. Most installations completed within one week.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button size="lg" href="/contact">Get Your Free Quote</Button>
            <span className="text-white/60">or call us <a href="tel:07442986034" className="text-white hover:text-accent font-bold text-lg inline-block ml-1 transition-colors">07442 986034</a></span>
          </div>
        </div>
      </section>
    </>
  );
}
