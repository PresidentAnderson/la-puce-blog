import type { Metadata } from 'next'
import './globals.css'
import ChangelogModal from '@/components/ChangelogModal'
import { getLatestVersion } from '@/lib/changelog'

export const metadata: Metadata = {
  title: 'La Puce à L\'oreille - Soutien aux Lanceurs d\'Alerte',
  description: 'Plateforme indépendante de soutien confidentiel pour les lanceurs d\'alerte du secteur privé. Guides, ressources et accompagnement pour révéler la vérité en toute sécurité.',
  keywords: ['lanceur d\'alerte', 'whistleblower', 'secteur privé', 'protection', 'confidentialité', 'droits', 'sécurité', 'témoignage'],
  authors: [{ name: 'La Puce à L\'oreille' }],
  openGraph: {
    title: 'La Puce à L\'oreille - Soutien aux Lanceurs d\'Alerte',
    description: 'Soutien confidentiel pour ceux qui veulent faire entendre la vérité dans le secteur privé',
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
        <nav className="border-b bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <div className="flex-shrink-0">
                <a href="/" className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <svg className="w-6 h-6 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>La Puce à L'oreille</span>
                </a>
              </div>
              <div className="hidden md:flex space-x-1">
                <a href="/" className="px-4 py-2 rounded-md text-slate-700 hover:bg-slate-100 hover:text-teal-600 transition font-medium">
                  Accueil
                </a>
                <a href="/commencer" className="px-4 py-2 rounded-md text-slate-700 hover:bg-slate-100 hover:text-teal-600 transition font-medium">
                  Comment commencer
                </a>
                <a href="/guides" className="px-4 py-2 rounded-md text-slate-700 hover:bg-slate-100 hover:text-teal-600 transition font-medium">
                  Guides & Modèles
                </a>
                <a href="/securite" className="px-4 py-2 rounded-md text-slate-700 hover:bg-slate-100 hover:text-teal-600 transition font-medium">
                  Sécurité & Droits
                </a>
                <a href="/blog" className="px-4 py-2 rounded-md text-slate-700 hover:bg-slate-100 hover:text-teal-600 transition font-medium">
                  Analyses
                </a>
                <a href="/contact" className="px-4 py-2 rounded-md bg-teal-600 text-white hover:bg-teal-700 transition font-medium">
                  Contact Anonyme
                </a>
              </div>
              <div className="md:hidden">
                <button className="p-2 rounded-md text-slate-700 hover:bg-slate-100">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="bg-teal-50 border-t border-teal-100 py-1">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <p className="text-xs text-center text-teal-800 flex items-center justify-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">Plateforme indépendante — Aucune donnée personnelle collectée</span>
              </p>
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
