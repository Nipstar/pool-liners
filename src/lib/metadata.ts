import { Metadata } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://bespoke-pool-liners.co.uk';
const SITE_NAME = 'Bespoke Pool Liners';

interface PageMetadata {
  title: string;
  description: string;
  path: string;
  keywords?: readonly string[];
  ogImage?: string;
}

export function generateMetadata({
  title,
  description,
  path,
  keywords = [],
  ogImage = '/images/og-default.jpg'
}: PageMetadata): Metadata {
  const url = `${SITE_URL}${path}`;
  const fullTitle = path === '/' ? title : `${title} | ${SITE_NAME}`;

  return {
    title: fullTitle,
    description,
    keywords: keywords.join(', '),
    authors: [{ name: SITE_NAME }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: 'website',
      locale: 'en_GB',
      url,
      title: fullTitle,
      description,
      siteName: SITE_NAME,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

// Page-specific metadata
export const PAGE_METADATA = {
  home: {
    title: 'Bespoke Pool Liners | Custom Pool Liner Installation Hampshire',
    description: 'Expert bespoke pool liner installation across Hampshire & the South of England. Reinforced Renolit liners, 10-year watertight guarantee, 100+ installations. Free quote.',
    keywords: ['bespoke pool liner', 'pool liner installation Hampshire', 'swimming pool liner', 'custom pool liner', 'pool liner Hampshire'],
    path: '/',
  },
  poolLinerInstallation: {
    title: 'Pool Liner Installation Hampshire | Bespoke Fit, 10-Year Guarantee',
    description: 'Professional swimming pool liner installation across Hampshire. On-site welded Renolit reinforced liners fitted to any pool shape. 10-year watertight guarantee. Free survey.',
    keywords: ['pool liner installation Hampshire', 'swimming pool liner installation', 'pool liner fitter', 'install pool liner'],
    path: '/pool-liner-installation',
  },
  poolLinerReplacement: {
    title: 'Pool Liner Replacement Hampshire & Surrey | Bespoke Pool Liners',
    description: 'Expert pool liner replacement across Hampshire and Surrey. Replace worn, faded or leaking liners with premium Renolit reinforced liners. 10-year guarantee. Free quote.',
    keywords: ['pool liner replacement Hampshire', 'swimming pool liner replacement', 'replace pool liner', 'pool relining'],
    path: '/pool-liner-replacement',
  },
  poolLinerRepair: {
    title: 'Pool Liner Repair Hampshire | Leak Fixes & Patch Repairs',
    description: 'Swimming pool liner repair services across Hampshire. Professional leak detection, patch repairs and seam re-welding. Fast response, lasting repairs. Call today.',
    keywords: ['pool liner repair Hampshire', 'swimming pool liner repair', 'pool leak repair', 'liner patch repair'],
    path: '/pool-liner-repair',
  },
  reinforcedPoolLiners: {
    title: 'Reinforced Pool Liners UK | Renolit Alkorplan | Bespoke Pool Liners',
    description: 'Premium reinforced pool liners from Renolit Alkorplan. 1.5mm PVC with polyester mesh core for maximum durability. Wide range of colours and patterns. Hampshire installer.',
    keywords: ['reinforced pool liner', 'Renolit Alkorplan pool liner', '1.5mm pool liner', 'Alkorplan liner', 'reinforced PVC pool liner'],
    path: '/reinforced-pool-liners',
  },
  baggedPoolLiners: {
    title: 'Bagged Pool Liners Hampshire | Pre-Fabricated Liner Installation',
    description: 'Pre-fabricated bagged pool liners for standard-shaped pools. Cost-effective liner replacement with professional installation across Hampshire. Free quote.',
    keywords: ['bagged pool liner', 'pre-fabricated pool liner', 'bag liner swimming pool', 'vinyl pool liner'],
    path: '/bagged-pool-liners',
  },
  onSiteWelding: {
    title: 'On-Site Pool Liner Welding Hampshire | Bespoke Fit Any Shape',
    description: 'Expert on-site pool liner welding for any pool shape or size. Precision hot-air welding of reinforced liners in Hampshire, Surrey & Berkshire. Seamless watertight finish.',
    keywords: ['on-site pool liner welding', 'pool liner welding', 'on-site lining', 'welded pool liner', 'bespoke pool liner fit'],
    path: '/on-site-pool-liner-welding',
  },
  poolLinerColours: {
    title: 'Pool Liner Colours UK | Renolit Alkorplan Colour Range',
    description: 'Browse our complete range of Renolit Alkorplan pool liner colours and patterns. See how each colour looks underwater. Free colour consultation available.',
    keywords: ['pool liner colours UK', 'pool liner patterns', 'Alkorplan colours', 'pool liner colour chart'],
    path: '/pool-liner-colours',
  },
  portfolio: {
    title: 'Pool Liner Portfolio | Before & After Transformations | Hampshire',
    description: 'Browse our portfolio of swimming pool liner installations across Hampshire. Before and after photos of residential pool transformations. See our quality.',
    keywords: ['pool liner portfolio', 'pool liner before after', 'swimming pool transformation', 'pool renovation gallery'],
    path: '/portfolio',
  },
  aboutUs: {
    title: 'About Bespoke Pool Liners | Hampshire Pool Liner Specialists',
    description: 'Meet the team behind Bespoke Pool Liners. 15+ years experience, 100+ installations, based in Romsey, Hampshire. Local experts in reinforced pool liners.',
    keywords: ['pool liner specialists Hampshire', 'pool liner company Hampshire', 'about bespoke pool liners'],
    path: '/about-us',
  },
  areas: {
    title: 'Pool Liner Installation Areas | Hampshire, Surrey, Berkshire & More',
    description: 'We install pool liners across Hampshire, Surrey, Berkshire, Dorset and Wiltshire. Based in Romsey with nationwide project capability. See areas we cover.',
    keywords: ['pool liner installation areas', 'pool liner near me', 'pool liner Hampshire Surrey'],
    path: '/areas',
  },
  blog: {
    title: 'Pool Liner Blog | Tips, Guides & Advice | Bespoke Pool Liners',
    description: 'Expert advice on swimming pool liners, maintenance, costs and installation. Guides and tips from Hampshire\'s pool liner specialists.',
    keywords: ['pool liner advice', 'pool liner guide', 'swimming pool liner tips', 'pool maintenance UK'],
    path: '/blog',
  },
  faq: {
    title: 'Pool Liner FAQ | Common Questions Answered | Bespoke Pool Liners',
    description: 'Answers to common questions about swimming pool liners, installation, costs, materials and maintenance. Expert advice from Hampshire\'s pool liner specialists.',
    keywords: ['pool liner FAQ', 'pool liner questions', 'pool liner cost', 'how long pool liner last'],
    path: '/faq',
  },
  contact: {
    title: 'Contact Bespoke Pool Liners | Free Quote | Hampshire',
    description: 'Get a free pool liner quote. Contact Bespoke Pool Liners in Hampshire for expert advice on installation, replacement and repair. Call 07442 986034.',
    keywords: ['pool liner quote Hampshire', 'contact pool liner installer', 'free pool liner survey'],
    path: '/contact',
  },
  testimonials: {
    title: 'Customer Reviews | Pool Liner Testimonials | Bespoke Pool Liners',
    description: 'Read reviews from our pool liner customers across Hampshire. See why homeowners trust Bespoke Pool Liners for installation and replacement.',
    keywords: ['pool liner reviews', 'pool liner testimonials', 'pool liner installer reviews Hampshire'],
    path: '/testimonials',
  },
  privacyPolicy: {
    title: 'Privacy Policy | Bespoke Pool Liners',
    description: 'Privacy policy for Bespoke Pool Liners. How we collect, use, and protect your personal information.',
    keywords: [],
    path: '/privacy-policy',
  },
  termsConditions: {
    title: 'Terms & Conditions | Bespoke Pool Liners',
    description: 'Terms and conditions for services provided by Bespoke Pool Liners.',
    keywords: [],
    path: '/terms-and-conditions',
  },
} as const;
