"use client"
import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { Phone, Mail, MapPin, Clock, Calendar } from 'lucide-react';
import { submitContactForm } from '@/app/actions/contact';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        postcode: '',
        service: '',
        poolType: '',
        message: '',
    });

    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            const payload = {
                ...formData,
                source: 'website',
                page: window.location.href
            };

            const result = await submitContactForm(payload);

            if (!result.success) throw new Error(result.error);

            setStatus('success');
            setFormData({ name: '', email: '', phone: '', postcode: '', service: '', poolType: '', message: '' });
        } catch (error) {
            // Error handling state is triggered without throwing to the Next.js dev overlay
            setStatus('error');
        }
    };

    return (
        <>
            <Section bg="primary" spacing="md" className="pt-32 md:pt-40">
                <div className="max-w-4xl">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Get Your Free Quote</h1>
                    <p className="text-xl text-white/90 leading-relaxed max-w-2xl">
                        Ready to transform your pool? Fill in the form and we'll be in touch within 24 hours with a free, no-obligation quote.
                    </p>
                </div>
            </Section>

            <Section bg="white" spacing="xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Form Side */}
                    <div className="bg-white rounded-2xl border border-gray-100 shadow-xl p-8 md:p-12">
                        <h2 className="text-2xl font-bold text-dark-text mb-8">Send an Enquiry</h2>

                        {status === 'success' ? (
                            <div className="bg-accent/10 border border-accent/20 text-accent p-6 rounded-xl text-center">
                                <h3 className="font-bold text-lg mb-2">Thank you!</h3>
                                <p>We've received your enquiry and will be in touch within 24 hours.</p>
                                <Button variant="secondary" onClick={() => setStatus('idle')} className="mt-6">Send Another Message</Button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {status === 'error' && (
                                    <div className="bg-red-50 text-red-600 p-4 rounded-lg text-sm font-medium border border-red-100">
                                        Something went wrong. Please call us on 07442 986034 instead.
                                    </div>
                                )}

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-semibold text-dark-text">Full Name <span className="text-red-500">*</span></label>
                                        <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors" placeholder="John Doe" />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-semibold text-dark-text">Email Address <span className="text-red-500">*</span></label>
                                        <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors" placeholder="john@example.com" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="text-sm font-semibold text-dark-text">Phone Number <span className="text-red-500">*</span></label>
                                        <input type="tel" id="phone" name="phone" required value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors" placeholder="07123 456789" />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="postcode" className="text-sm font-semibold text-dark-text">Postcode <span className="text-red-500">*</span></label>
                                        <input type="text" id="postcode" name="postcode" required value={formData.postcode} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors" placeholder="SO51 8AL" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="service" className="text-sm font-semibold text-dark-text">Service Required <span className="text-red-500">*</span></label>
                                        <select id="service" name="service" required value={formData.service} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors bg-white">
                                            <option value="" disabled>Select a service</option>
                                            <option value="Pool Liner Installation">Pool Liner Installation</option>
                                            <option value="Pool Liner Replacement">Pool Liner Replacement</option>
                                            <option value="Pool Liner Repair">Pool Liner Repair</option>
                                            <option value="Not sure - need advice">Not sure — need advice</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="poolType" className="text-sm font-semibold text-dark-text">Pool Type (Optional)</label>
                                        <select id="poolType" name="poolType" value={formData.poolType} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors bg-white">
                                            <option value="">Select pool type</option>
                                            <option value="Rectangular">Rectangular</option>
                                            <option value="Freeform / Irregular">Freeform / Irregular</option>
                                            <option value="L-Shaped">L-Shaped</option>
                                            <option value="Kidney">Kidney</option>
                                            <option value="Roman End">Roman End</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-semibold text-dark-text">Message / Project Details (Optional)</label>
                                    <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors resize-none" placeholder="Tell us a bit about your pool..." />
                                </div>

                                <Button type="submit" className="w-full" size="lg" disabled={status === 'submitting'}>
                                    {status === 'submitting' ? 'Sending...' : 'Send Enquiry'}
                                </Button>
                            </form>
                        )}
                    </div>

                    {/* Info Side */}
                    <div className="flex flex-col gap-10">
                        <div>
                            <h2 className="text-3xl font-bold text-dark-text mb-6">Alternatively, contact us directly</h2>
                            <p className="text-body-text text-lg leading-relaxed mb-8">
                                We're always happy to discuss your pool project over the phone. Call us directly for immediate advice or to arrange a survey.
                            </p>
                        </div>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-light-bg flex items-center justify-center text-accent shrink-0">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-dark-text">Call Us</h3>
                                    <a href="tel:07442986034" className="text-lg text-body-text hover:text-accent font-medium mt-1 block transition-colors">07442 986034</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-light-bg flex items-center justify-center text-accent shrink-0">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-dark-text">Email Us</h3>
                                    <a href="mailto:info@bespoke-pool-liners.co.uk" className="text-lg text-body-text hover:text-accent font-medium mt-1 block transition-colors break-all">info@bespoke-pool-liners.co.uk</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-light-bg flex items-center justify-center text-accent shrink-0">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-dark-text">Based in</h3>
                                    <p className="text-lg text-body-text mt-1">Romsey, Hampshire</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-light-bg rounded-2xl p-8 mt-4 border border-blue-50">
                            <h3 className="font-bold text-lg text-dark-text mb-4">What happens next?</h3>
                            <ul className="space-y-4">
                                <li className="flex gap-3">
                                    <Clock className="w-6 h-6 text-primary shrink-0 opacity-70" />
                                    <span className="text-body-text">We aim to respond to all enquiries within <strong className="text-primary font-semibold">24 hours</strong>.</span>
                                </li>
                                <li className="flex gap-3">
                                    <Calendar className="w-6 h-6 text-primary shrink-0 opacity-70" />
                                    <span className="text-body-text">We'll arrange a <strong className="text-primary font-semibold">free site survey</strong> at a time that suits you.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    );
}
