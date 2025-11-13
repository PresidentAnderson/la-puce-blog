import { prisma } from '@/lib/prisma'
import { NextRequest, NextResponse } from 'next/server'

// Create a slug from title
function createSlug(title: string): string {
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { title, excerpt, content, coverImage, published, featured, authorId, categoryId } = body

    // Validate required fields
    if (!title || !excerpt || !content) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Get or create a default author if none specified
    let finalAuthorId = authorId
    if (!finalAuthorId) {
      let author = await prisma.author.findFirst()
      if (!author) {
        author = await prisma.author.create({
          data: {
            name: 'Administrateur',
            email: 'admin@lapuce.com',
            bio: 'Auteur principal du blog',
          },
        })
      }
      finalAuthorId = author.id
    }

    // Create unique slug
    const baseSlug = createSlug(title)
    let slug = baseSlug
    let counter = 1
    while (await prisma.post.findUnique({ where: { slug } })) {
      slug = `${baseSlug}-${counter}`
      counter++
    }

    // Create post
    const post = await prisma.post.create({
      data: {
        title,
        slug,
        excerpt,
        content,
        coverImage: coverImage || null,
        published: published || false,
        featured: featured || false,
        authorId: finalAuthorId,
        categoryId: categoryId || null,
      },
      include: {
        author: true,
        category: true,
      },
    })

    return NextResponse.json(post, { status: 201 })
  } catch (error) {
    console.error('Error creating post:', error)
    return NextResponse.json(
      { error: 'Failed to create post' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const posts = await prisma.post.findMany({
      include: { author: true, category: true, tags: true },
      orderBy: { createdAt: 'desc' },
    })
    return NextResponse.json(posts)
  } catch (error) {
    console.error('Error fetching posts:', error)
    return NextResponse.json(
      { error: 'Failed to fetch posts' },
      { status: 500 }
    )
  }
}
