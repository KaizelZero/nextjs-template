export type SiteConfig = typeof siteConfig

export const siteConfig = {
  title: 'Website',
  description:
    'A website template for Next.js with Tailwind CSS and TypeScript.',
  mainNav: [
    {
      title: 'Home',
      href: '/',
    },
  ],
  links: {
    twitter: 'https://twitter.com/shadcn',
    github: 'https://github.com/shadcn/ui',
    docs: 'https://ui.shadcn.com',
  },
}
