export interface ChangelogEntry {
  version: string
  date: string
  type: 'major' | 'minor' | 'patch'
  changes: {
    category: 'feature' | 'improvement' | 'bugfix' | 'design' | 'security'
    items: string[]
  }[]
}

export const changelog: ChangelogEntry[] = [
  {
    version: '0.0.11',
    date: '2025-11-13',
    type: 'minor',
    changes: [
      {
        category: 'feature',
        items: [
          'Created /commencer page with complete 5-step getting started guide',
          'Created /guides page with templates, checklists, and security guides',
          'Created /securite page with comprehensive legal rights and digital security information',
          'Added navigation structure for whistleblower support journey',
        ],
      },
      {
        category: 'improvement',
        items: [
          'Completed core navigation pages (Comment commencer, Guides & Modèles, Sécurité & Droits)',
          'Added detailed legal framework (Loi Sapin II, Directive Européenne)',
          'Implemented 3-channel reporting system explanation (internal, external, public)',
          'Created downloadable templates for testimony, timeline, evidence log, and communications',
          '6 practical checklists for whistleblower journey',
          'Digital security guides for communications, storage, anonymity, and retaliation detection',
        ],
      },
      {
        category: 'design',
        items: [
          'Consistent teal/slate color scheme across all new pages',
          'Mission-focused hero sections with trust signals',
          'Anchor links for easy navigation within long pages',
          'Trust-building visual elements (shields, locks, checkmarks)',
        ],
      },
    ],
  },
  {
    version: '0.0.10',
    date: '2025-11-13',
    type: 'minor',
    changes: [
      {
        category: 'feature',
        items: [
          'Initial release of La Puce à L\'oreille blog platform',
          'Next.js 14+ with TypeScript and Tailwind CSS',
          'Full admin panel for content management',
          'Blog with featured posts and categories',
          'Contact form with message storage',
          'Author profiles and tag system',
        ],
      },
      {
        category: 'design',
        items: [
          'Modern, responsive design',
          'Hero section on homepage',
          'Category sidebar on blog listing',
          'SEO-optimized pages',
        ],
      },
      {
        category: 'improvement',
        items: [
          'Prisma ORM integration',
          'SQLite database for development',
          'Automatic sitemap generation',
          'Vercel deployment ready',
        ],
      },
    ],
  },
]

export function getLatestVersion(): string {
  return changelog[0]?.version || '0.0.0'
}

export function getChangelogByVersion(version: string): ChangelogEntry | undefined {
  return changelog.find((entry) => entry.version === version)
}

export function getAllChangelog(): ChangelogEntry[] {
  return changelog
}
