// Single source of truth — change here, it changes everywhere
export const SITE = {
  title: 'devopinions',
  tagline: 'Engineering opinions, build notes, and case studies',
  description:
    'Kalpesh Deshmukh — Full Stack Developer. Production engineering on Azure, Angular and ASP.NET. Build notes, study notes, and case studies from real shipped systems.',
  url: 'https://devopinions.com',
  author: {
    name: 'Kalpesh Deshmukh',
    email: 'kalpesh.19@hotmail.com',
    linkedin: 'https://linkedin.com/in/kalpesh-deshmukh1',
    github: 'https://github.com/kalpesh-deshmukh1', // update if different
    twitter: '', // add if you have one
  },
  // Defaults for OG cards when a post doesn't specify its own image
  defaultOgImage: '/og-default.png',
  locale: 'en_GB',
} as const;

export const NAV = [
  { label: 'Journey', href: '/#journey' },
  { label: 'Blog', href: '/blog' },
  { label: 'Notes', href: '/notes' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: 'mailto:kalpesh.19@hotmail.com' },
] as const;
