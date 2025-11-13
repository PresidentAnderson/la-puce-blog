import { prisma } from '@/lib/prisma'
import Link from 'next/link'

async function getFeaturedPosts() {
  const posts = await prisma.post.findMany({
    where: { published: true, featured: true },
    include: { author: true, category: true },
    orderBy: { createdAt: 'desc' },
    take: 3,
  })
  return posts
}

async function getRecentPosts() {
  const posts = await prisma.post.findMany({
    where: { published: true },
    include: { author: true, category: true },
    orderBy: { createdAt: 'desc' },
    take: 6,
  })
  return posts
}

export default async function HomePage() {
  const featuredPosts = await getFeaturedPosts()
  const recentPosts = await getRecentPosts()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">
            Bienvenue sur La Puce à L'oreille
          </h1>
          <p className="text-xl mb-8 opacity-90">
            Découvrez nos articles, analyses et réflexions
          </p>
          <Link
            href="/blog"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition inline-block"
          >
            Explorer les articles
          </Link>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">Articles en vedette</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {featuredPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
                >
                  {post.coverImage && (
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                  )}
                  <div className="p-6">
                    {post.category && (
                      <span className="text-sm text-blue-600 font-semibold">
                        {post.category.name}
                      </span>
                    )}
                    <h3 className="text-xl font-bold mt-2 mb-2">{post.title}</h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <span>{post.author.name}</span>
                      <span className="mx-2">•</span>
                      <span>
                        {new Date(post.createdAt).toLocaleDateString('fr-FR')}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Recent Posts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Articles récents</h2>
          {recentPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="bg-white border rounded-lg overflow-hidden hover:shadow-lg transition"
                >
                  {post.coverImage && (
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                  )}
                  <div className="p-6">
                    {post.category && (
                      <span className="text-sm text-blue-600 font-semibold">
                        {post.category.name}
                      </span>
                    )}
                    <h3 className="text-xl font-bold mt-2 mb-2">{post.title}</h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <span>{post.author.name}</span>
                      <span className="mx-2">•</span>
                      <span>
                        {new Date(post.createdAt).toLocaleDateString('fr-FR')}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 mb-4">
                Aucun article disponible pour le moment.
              </p>
              <Link
                href="/admin"
                className="text-blue-600 hover:underline font-semibold"
              >
                Créer votre premier article →
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Restez informé</h2>
          <p className="text-xl mb-8 opacity-90">
            Contactez-nous pour toute question ou suggestion
          </p>
          <Link
            href="/contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition inline-block"
          >
            Nous contacter
          </Link>
        </div>
      </section>
    </div>
  )
}
