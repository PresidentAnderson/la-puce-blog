import type { Metadata } from 'next'
import './globals.css'
import ChangelogModal from '@/components/ChangelogModal'
import { getLatestVersion } from '@/lib/changelog'

export const metadata: Metadata = {
  title: 'La Puce à L\'oreille - Blog',
  description: 'A modern blog and content platform',
  keywords: ['blog', 'articles', 'content', 'news'],
  authors: [{ name: 'La Puce à L\'oreille' }],
  openGraph: {
    title: 'La Puce à L\'oreille - Blog',
    description: 'A modern blog and content platform',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className="antialiased">
        <nav className="border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <div className="flex-shrink-0">
                <a href="/" className="text-2xl font-bold text-blue-600">
                  La Puce à L'oreille
                </a>
              </div>
              <div className="flex space-x-4">
                <a href="/" className="px-3 py-2 rounded-md hover:bg-gray-100">
                  Accueil
                </a>
                <a href="/blog" className="px-3 py-2 rounded-md hover:bg-gray-100">
                  Articles
                </a>
                <a href="/contact" className="px-3 py-2 rounded-md hover:bg-gray-100">
                  Contact
                </a>
                <a href="/admin" className="px-3 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700">
                  Admin
                </a>
              </div>
            </div>
          </div>
        </nav>
        <main>{children}</main>
        <footer className="border-t mt-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Left side - Changelog */}
              <div className="flex items-center gap-4">
                <ChangelogModal />
                <span className="text-xs text-gray-500">
                  v{getLatestVersion()}
                </span>
              </div>

              {/* Center - Copyright */}
              <p className="text-center text-gray-600">
                © {new Date().getFullYear()} La Puce à L'oreille. Tous droits réservés.
              </p>

              {/* Right side - Links */}
              <div className="flex items-center gap-4 text-sm">
                <a
                  href="https://github.com/PresidentAnderson/la-puce-blog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
