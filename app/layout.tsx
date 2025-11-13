import type { Metadata } from 'next'
import './globals.css'

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
        <footer className="border-t mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <p className="text-center text-gray-600">
              © {new Date().getFullYear()} La Puce à L'oreille. Tous droits réservés.
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}
