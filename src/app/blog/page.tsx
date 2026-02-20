import { Metadata } from 'next';
import Image from 'next/image';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Pool Liner Blog & Guides | Bespoke Pool Liners',
    description: 'Expert advice, maintenance guides, and recent installation case studies from Hampshire\'s leading pool liner specialists.',
};

const POSTS = [
    {
        title: 'How to Care for a New Reinforced Pool Liner',
        excerpt: 'Just had a new liner installed? Here is our comprehensive guide on chemical balancing, brushing, and winterizing to ensure it lasts for decades.',
        date: 'March 15, 2024',
        category: 'Maintenance',
        img: 'portfolio-1.png'
    },
    {
        title: 'Bagged vs Reinforced Pool Liners: Honest Comparison',
        excerpt: 'Struggling to decide which option is best for your pool replacement? We break down the costs, benefits, and lifespan of both options.',
        date: 'February 28, 2024',
        category: 'Guides',
        img: 'hero.png'
    },
    {
        title: 'Top 5 Signs Your Pool Liner Needs Replacing',
        excerpt: 'From hidden leaks to brittle edges. Learn the warning signs that indicate your pool liner is reaching the end of its life before structural damage occurs.',
        date: 'January 10, 2024',
        category: 'Advice',
        img: 'portfolio-3.png'
    }
];

export default function BlogIndexPage() {
    return (
        <>
            <Section bg="primary" className="pt-32 pb-20 md:pt-40 md:pb-24  relative overflow-hidden text-white">
                <div className="absolute inset-0 z-0 bg-primary">
                    <Image
                        src="/images/portfolio-3.png"
                        alt="Pool care blog"
                        fill
                        className="object-cover object-center opacity-30 mix-blend-overlay"
                    />
                </div>
                <div className="container relative z-10 max-w-4xl text-center mx-auto">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">Pool Care & Guides</h1>
                    <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-light mb-10">
                        Expert advice, maintenance tips, and case studies from Hampshire's swimming pool specialists.
                    </p>
                </div>
            </Section>

            <Section bg="white" spacing="xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {POSTS.map((post, i) => (
                        <Card key={i} withHover className="flex flex-col h-full overflow-hidden border border-gray-100 group">
                            <Link href="#" className="relative aspect-[16/9] w-full block overflow-hidden">
                                <Image
                                    src={`/images/${post.img}`}
                                    alt={post.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute top-4 left-4 bg-accent text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                                    {post.category}
                                </div>
                            </Link>
                            <div className="p-8 flex flex-col flex-1">
                                <time className="text-sm font-semibold text-primary/60 mb-3 block">{post.date}</time>
                                <Link href="#">
                                    <h2 className="text-2xl font-bold text-dark-text mb-4 transition-colors group-hover:text-accent line-clamp-2">
                                        {post.title}
                                    </h2>
                                </Link>
                                <p className="text-body-text mb-6 line-clamp-3">
                                    {post.excerpt}
                                </p>
                                <div className="mt-auto">
                                    <Link href="#" className="text-primary font-bold hover:text-accent transition-colors flex items-center gap-2">
                                        Read Article <span aria-hidden="true">&rarr;</span>
                                    </Link>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Button variant="secondary" size="lg" href="#">Load More Articles</Button>
                </div>
            </Section>
        </>
    );
}
