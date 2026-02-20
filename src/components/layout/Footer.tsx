import Link from 'next/link';
import { Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-primary text-white pt-16 pb-8">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
                    {/* Column 1: Company Info */}
                    <div className="flex flex-col gap-4">
                        <Link href="/" className="flex items-center gap-2 mb-2">
                            <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center text-white font-bold text-xl">
                                BPL
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold text-lg leading-none text-white">Bespoke</span>
                                <span className="text-sm font-medium leading-none text-white/80">Pool Liners</span>
                            </div>
                        </Link>
                        <p className="text-white/70 text-sm leading-relaxed mb-4">
                            Expert swimming pool liner installation, replacement, and repair. Based in Hampshire, serving the South of England with 15+ years experience.
                        </p>
                        <div className="flex items-center gap-4">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-white transition-colors" aria-label="Facebook">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-white transition-colors" aria-label="Instagram">
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Services */}
                    <div>
                        <h3 className="font-bold text-lg mb-6 text-white">Our Services</h3>
                        <ul className="flex flex-col gap-3 text-sm text-white/80">
                            <li><Link href="/pool-liner-installation" className="hover:text-accent transition-colors">Pool Liner Installation</Link></li>
                            <li><Link href="/pool-liner-replacement" className="hover:text-accent transition-colors">Pool Liner Replacement</Link></li>
                            <li><Link href="/pool-liner-repair" className="hover:text-accent transition-colors">Pool Liner Repair</Link></li>
                            <li><Link href="/reinforced-pool-liners" className="hover:text-accent transition-colors">Reinforced Pool Liners</Link></li>
                            <li><Link href="/bagged-pool-liners" className="hover:text-accent transition-colors">Bagged Pool Liners</Link></li>
                            <li><Link href="/on-site-pool-liner-welding" className="hover:text-accent transition-colors">On-Site Welding</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Areas We Cover */}
                    <div>
                        <h3 className="font-bold text-lg mb-6 text-white">Areas We Cover</h3>
                        <ul className="flex flex-col gap-3 text-sm text-white/80">
                            <li><Link href="/areas/hampshire" className="hover:text-accent transition-colors">Hampshire</Link></li>
                            <li><Link href="/areas/surrey" className="hover:text-accent transition-colors">Surrey</Link></li>
                            <li><Link href="/areas/berkshire" className="hover:text-accent transition-colors">Berkshire</Link></li>
                            <li><Link href="/areas/dorset" className="hover:text-accent transition-colors">Dorset</Link></li>
                            <li><Link href="/areas/wiltshire" className="hover:text-accent transition-colors">Wiltshire</Link></li>
                            <li><Link href="/areas" className="text-accent hover:underline mt-2 inline-block">View all areas &rarr;</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Contact Info */}
                    <div>
                        <h3 className="font-bold text-lg mb-6 text-white">Contact Us</h3>
                        <ul className="flex flex-col gap-4 text-sm text-white/80">
                            <li className="flex items-start gap-3">
                                <Phone className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                <div>
                                    <a href="tel:07442986034" className="hover:text-accent transition-colors font-medium block text-base bg-white/5 px-2 py-1 rounded inline-block mb-1">07442 986034</a>
                                    <p className="text-xs text-white/60">Mon-Fri 8am-6pm, Sat 9am-1pm</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <Mail className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                <a href="mailto:info@bespoke-pool-liners.co.uk" className="hover:text-accent transition-colors break-all">info@bespoke-pool-liners.co.uk</a>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                <span>Romsey, Hampshire, UK</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/60">
                    <p>&copy; {currentYear} Bespoke Pool Liners. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms-and-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
