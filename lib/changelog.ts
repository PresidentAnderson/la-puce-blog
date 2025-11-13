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
