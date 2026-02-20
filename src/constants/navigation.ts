export interface DropdownLink {
  name: string;
  href: string;
}

export interface NavLink {
  name: string;
  href: string;
  dropdown?: DropdownLink[];
}

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', href: '/' },
  {
    name: 'Services',
    href: '#',
    dropdown: [
      { name: 'Pool Liner Installation', href: '/pool-liner-installation' },
      { name: 'Pool Liner Replacement', href: '/pool-liner-replacement' },
      { name: 'Pool Liner Repair', href: '/pool-liner-repair' },
      { name: 'Reinforced Pool Liners', href: '/reinforced-pool-liners' },
      { name: 'Bagged Pool Liners', href: '/bagged-pool-liners' },
      { name: 'On-Site Welding', href: '/on-site-pool-liner-welding' },
    ]
  },
  { name: 'Colours', href: '/pool-liner-colours' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'About', href: '/about-us' },
  { name: 'Areas We Cover', href: '/areas' },
  { name: 'Blog', href: '/blog' },
  { name: 'FAQ', href: '/faq' },
];
