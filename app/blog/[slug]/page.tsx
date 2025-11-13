import { prisma } from '@/lib/prisma'
import { notFound } from 'next/navigation'
import Link from 'next/link'

async function getPost(slug: string) {
  const post = await prisma.post.findUnique({
    where: { slug },
    include: { author: true, category: true, tags: true },
  })
  return post
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug)

  if (!post) {
    return {
      title: 'Article non trouvé',
    }
  }

  return {
    title: `${post.title} - La Puce à L'oreille`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.createdAt.toISOString(),
      authors: [post.author.name],
    },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string }
}) {
  const post = await getPost(params.slug)

  if (!post || !post.published) {
    notFound()
  }

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm text-gray-600">
        <Link href="/" className="hover:text-blue-600">
          Accueil
        </Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-blue-600">
          Articles
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">{post.title}</span>
      </nav>

      {/* Category */}
      {post.category && (
        <div className="mb-4">
          <span className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-semibold">
            {post.category.name}
          </span>
        </div>
      )}

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>

      {/* Metadata */}
      <div className="flex items-center gap-4 mb-8 pb-8 border-b">
        <div className="flex items-center">
          {post.author.avatar && (
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-12 h-12 rounded-full mr-3"
            />
          )}
          <div>
            <p className="font-semibold">{post.author.name}</p>
            <p className="text-sm text-gray-600">
              {new Date(post.createdAt).toLocaleDateString('fr-FR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          </div>
        </div>
      </div>

      {/* Cover Image */}
      {post.coverImage && (
        <div className="mb-8">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      )}

      {/* Content */}
      <div className="prose prose-lg max-w-none mb-8">
        <div
          dangerouslySetInnerHTML={{ __html: post.content }}
          className="text-gray-800 leading-relaxed"
        />
      </div>

      {/* Tags */}
      {post.tags.length > 0 && (
        <div className="mt-8 pt-8 border-t">
          <h3 className="font-semibold mb-3">Tags:</h3>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag.id}
                className="bg-gray-100 px-4 py-2 rounded-full text-sm hover:bg-gray-200 transition"
              >
                {tag.name}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Author Bio */}
      {post.author.bio && (
        <div className="mt-12 p-6 bg-gray-50 rounded-lg">
          <h3 className="font-bold text-xl mb-3">À propos de l'auteur</h3>
          <div className="flex items-start gap-4">
            {post.author.avatar && (
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-16 h-16 rounded-full"
              />
            )}
            <div>
              <p className="font-semibold mb-2">{post.author.name}</p>
              <p className="text-gray-700">{post.author.bio}</p>
            </div>
          </div>
        </div>
      )}

      {/* Back to blog */}
      <div className="mt-12 text-center">
        <Link
          href="/blog"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          ← Retour aux articles
        </Link>
      </div>
    </article>
  )
}
