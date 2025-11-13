import { prisma } from '@/lib/prisma'
import Link from 'next/link'

async function getStats() {
  const [totalPosts, publishedPosts, totalAuthors, totalMessages] =
    await Promise.all([
      prisma.post.count(),
      prisma.post.count({ where: { published: true } }),
      prisma.author.count(),
      prisma.contactMessage.count({ where: { read: false } }),
    ])

  return { totalPosts, publishedPosts, totalAuthors, totalMessages }
}

async function getRecentPosts() {
  const posts = await prisma.post.findMany({
    include: { author: true, category: true },
    orderBy: { createdAt: 'desc' },
    take: 10,
  })
  return posts
}

export const metadata = {
  title: 'Admin Panel - La Puce à L\'oreille',
  description: 'Gérez votre contenu',
}

export default async function AdminPage() {
  const stats = await getStats()
  const recentPosts = await getRecentPosts()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Panneau d'administration</h1>
        <p className="text-gray-600">Gérez votre contenu et consultez les statistiques</p>
      </div>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <div className="text-blue-600 font-semibold mb-2">Total Articles</div>
          <div className="text-3xl font-bold">{stats.totalPosts}</div>
        </div>
        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <div className="text-green-600 font-semibold mb-2">Publiés</div>
          <div className="text-3xl font-bold">{stats.publishedPosts}</div>
        </div>
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
          <div className="text-purple-600 font-semibold mb-2">Auteurs</div>
          <div className="text-3xl font-bold">{stats.totalAuthors}</div>
        </div>
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
          <div className="text-orange-600 font-semibold mb-2">Messages non lus</div>
          <div className="text-3xl font-bold">{stats.totalMessages}</div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white border rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Actions rapides</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Link
            href="/admin/posts/new"
            className="bg-blue-600 text-white px-6 py-4 rounded-lg hover:bg-blue-700 transition text-center font-semibold"
          >
            + Nouvel Article
          </Link>
          <Link
            href="/admin/authors"
            className="bg-purple-600 text-white px-6 py-4 rounded-lg hover:bg-purple-700 transition text-center font-semibold"
          >
            Gérer les Auteurs
          </Link>
          <Link
            href="/admin/messages"
            className="bg-orange-600 text-white px-6 py-4 rounded-lg hover:bg-orange-700 transition text-center font-semibold"
          >
            Voir les Messages
          </Link>
        </div>
      </div>

      {/* Recent Posts */}
      <div className="bg-white border rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Articles récents</h2>
        {recentPosts.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Titre</th>
                  <th className="text-left py-3 px-4">Auteur</th>
                  <th className="text-left py-3 px-4">Catégorie</th>
                  <th className="text-left py-3 px-4">Statut</th>
                  <th className="text-left py-3 px-4">Date</th>
                  <th className="text-left py-3 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {recentPosts.map((post) => (
                  <tr key={post.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium">{post.title}</td>
                    <td className="py-3 px-4">{post.author.name}</td>
                    <td className="py-3 px-4">{post.category?.name || '-'}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          post.published
                            ? 'bg-green-100 text-green-700'
                            : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {post.published ? 'Publié' : 'Brouillon'}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-600">
                      {new Date(post.createdAt).toLocaleDateString('fr-FR')}
                    </td>
                    <td className="py-3 px-4">
                      <Link
                        href={`/admin/posts/${post.id}`}
                        className="text-blue-600 hover:underline mr-4"
                      >
                        Modifier
                      </Link>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-gray-600 hover:underline"
                      >
                        Voir
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-8 text-gray-600">
            <p className="mb-4">Aucun article créé pour le moment.</p>
            <Link
              href="/admin/posts/new"
              className="text-blue-600 hover:underline font-semibold"
            >
              Créer votre premier article →
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
