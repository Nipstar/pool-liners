import { Metadata } from 'next';
import { Section } from '@/components/ui/Section';

export const metadata: Metadata = {
    title: 'Privacy Policy | Bespoke Pool Liners',
    robots: 'noindex, follow'
};

export default function PrivacyPolicyPage() {
    return (
        <>
            <Section bg="light" className="pt-32 pb-12 md:pt-40 md:pb-16">
                <div className="container max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-dark-text mb-6">Privacy Policy</h1>
                    <p className="text-lg text-body-text">Last updated: {new Date().toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })}</p>
                </div>
            </Section>

            <Section bg="white" spacing="xl">
                <div className="prose prose-lg max-w-4xl mx-auto text-body-text prose-headings:text-dark-text prose-a:text-accent border border-gray-100 p-8 md:p-12 rounded-2xl shadow-sm">
                    <h2>1. Introduction</h2>
                    <p>Welcome to Bespoke Pool Liners ("we,""our," or"us"). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us at info@bespoke-pool-liners.co.uk.</p>

                    <h2>2. Information We Collect</h2>
                    <p>We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, when you participate in activities on the Website or otherwise when you contact us.</p>
                    <p>The personal information that we collect depends on the context of your interactions with us and the Website, the choices you make and the products and features you use. The personal information we collect may include the following:</p>
                    <ul>
                        <li>Names</li>
                        <li>Phone Numbers</li>
                        <li>Email Addresses</li>
                        <li>Mailing Addresses</li>
                        <li>Project Details</li>
                    </ul>

                    <h2>3. How We Use Your Information</h2>
                    <p>We use personal information collected via our Website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.</p>
                    <ul>
                        <li>To fulfill and manage your orders and installation schedules.</li>
                        <li>To deliver and facilitate delivery of services to the user.</li>
                        <li>To respond to user inquiries/offer support to users.</li>
                        <li>To send administrative information to you.</li>
                    </ul>

                    <h2>4. Will Your Information Be Shared With Anyone?</h2>
                    <p>We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. We DO NOT sell your personal information to third parties for marketing purposes.</p>

                    <h2>5. Contact Us</h2>
                    <p>If you have questions or comments about this policy, you may email us at info@bespoke-pool-liners.co.uk or by post to:</p>
                    <p>
                        Bespoke Pool Liners<br />
                        Romsey, Hampshire<br />
                        United Kingdom
                    </p>
                </div>
            </Section>
        </>
    );
}
