type SitemapRow = {
  name: string;
  link: string;
};

type SitemapSection = {
  title: string;
  links: SitemapRow[];
};

const sitemap: SitemapSection[] = [
  {
    title: 'Company',
    links: [
      { name: 'About Peak', link: 'http://example.com' },
      { name: 'Factories', link: 'http://example.com' },
      { name: 'Careers', link: 'http://example.com' },
      { name: 'Environmental Initiatives', link: 'http://example.com' },
    ],
  },
  {
    title: 'Account',
    links: [
      { name: 'Manage Account', link: 'http://example.com' },
      { name: 'Saved Items', link: 'http://example.com' },
      { name: 'My Cart', link: 'http://example.com' },
      { name: 'Wishlist', link: 'http://example.com' },
      { name: 'Orders & Returns', link: 'http://example.com' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { name: 'Investor Relations', link: 'http://example.com' },
      { name: 'Data Privacy', link: 'http://example.com' },
      { name: 'Terms of Service', link: 'http://example.com' },
      { name: 'Legal Information', link: 'http://example.com' },
    ],
  },
];

export default sitemap;
