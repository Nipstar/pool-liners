import { Metadata } from 'next';
import { Section } from '@/components/ui/Section';

export const metadata: Metadata = {
    title: 'Terms & Conditions | Bespoke Pool Liners',
    robots: 'noindex, follow'
};

export default function TermsPage() {
    return (
        <>
            <Section bg="light" className="pt-32 pb-12 md:pt-40 md:pb-16">
                <div className="container max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-dark-text mb-6">Terms & Conditions</h1>
                    <p className="text-lg text-body-text">Last updated: {new Date().toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })}</p>
                </div>
            </Section>

            <Section bg="white" spacing="xl">
                <div className="prose prose-lg max-w-4xl mx-auto text-body-text prose-headings:text-dark-text prose-a:text-accent border border-gray-100 p-8 md:p-12 rounded-2xl shadow-sm">
                    <h2>1. Agreement to Terms</h2>
                    <p>These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Bespoke Pool Liners ("we,""us" or"our"), concerning your access to and use of our website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the"Site").</p>

                    <h2>2. Standard Guarantee</h2>
                    <p>Our 10-year watertight guarantee applies to the material integrity and our welded seams of Renolit Alkorplan liners installed by our team. This guarantee does not cover physical damage caused by improper pool use, neglected chemical balancing, extreme freezing, or failure of the underlying pool structure.</p>

                    <h2>3. Quotations & Pricing</h2>
                    <p>All quotations are valid for 30 days from the date of issue. Prices may vary if the scope of work changes significantly once the pool has been drained and the underlying structure is exposed (e.g., severe structural degradation requiring rebuilding before lining).</p>

                    <h2>4. Intellectual Property</h2>
                    <p>Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the"Content") and the trademarks, service marks, and logos contained therein (the"Marks") are owned or controlled by us.</p>

                    <h2>5. Contact</h2>
                    <p>In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:</p>
                    <p><strong>Bespoke Pool Liners</strong><br />Phone: 07442 986034<br />Email: info@bespoke-pool-liners.co.uk</p>
                </div>
            </Section>
        </>
    );
}
