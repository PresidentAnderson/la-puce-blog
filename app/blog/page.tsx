import { prisma } from '@/lib/prisma'
import Link from 'next/link'

async function getAllPosts() {
  const posts = await prisma.post.findMany({
    where: { published: true },
    include: { author: true, category: true, tags: true },
    orderBy: { createdAt: 'desc' },
  })
  return posts
}

async function getCategories() {
  const categories = await prisma.category.findMany({
    include: { _count: { select: { posts: true } } },
  })
  return categories
}

export const metadata = {
  title: 'Articles - La Puce à L\'oreille',
  description: 'Découvrez tous nos articles',
}

export default async function BlogPage() {
  const posts = await getAllPosts()
  const categories = await getCategories()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8">Tous les articles</h1>

      <div className="grid lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-3">
          {posts.length > 0 ? (
            <div className="space-y-8">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white border rounded-lg overflow-hidden hover:shadow-lg transition"
                >
                  <div className="md:flex">
                    {post.coverImage && (
                      <div className="md:w-1/3">
                        <img
                          src={post.coverImage}
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div className={post.coverImage ? 'md:w-2/3 p-6' : 'p-6'}>
                      {post.category && (
                        <span className="text-sm text-blue-600 font-semibold">
                          {post.category.name}
                        </span>
                      )}
                      <Link href={`/blog/${post.slug}`}>
                        <h2 className="text-2xl font-bold mt-2 mb-3 hover:text-blue-600 transition">
                          {post.title}
                        </h2>
                      </Link>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-500">
                          <span>{post.author.name}</span>
                          <span className="mx-2">•</span>
                          <span>
                            {new Date(post.createdAt).toLocaleDateString('fr-FR')}
                          </span>
                        </div>
                        <Link
                          href={`/blog/${post.slug}`}
                          className="text-blue-600 hover:underline font-semibold"
                        >
                          Lire la suite →
                        </Link>
                      </div>
                      {post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-4">
                          {post.tags.map((tag) => (
                            <span
                              key={tag.id}
                              className="text-xs bg-gray-100 px-3 py-1 rounded-full"
                            >
                              {tag.name}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
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

        {/* Sidebar */}
        <aside className="lg:col-span-1">
          <div className="bg-white border rounded-lg p-6 sticky top-4">
            <h3 className="font-bold text-xl mb-4">Catégories</h3>
            {categories.length > 0 ? (
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li key={category.id}>
                    <a
                      href={`#${category.slug}`}
                      className="flex justify-between items-center hover:text-blue-600 transition"
                    >
                      <span>{category.name}</span>
                      <span className="text-sm text-gray-500">
                        ({category._count.posts})
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600 text-sm">Aucune catégorie</p>
            )}
          </div>
        </aside>
      </div>
    </div>
  )
}
