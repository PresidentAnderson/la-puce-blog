# La Puce à L'oreille - Blog Platform

A modern, full-featured blog and content management platform built with Next.js 14+, TypeScript, Prisma, and Tailwind CSS.

## Features

- **Modern Blog Platform**: Beautiful, responsive blog with featured posts and category organization
- **Admin Panel**: Full content management system with dashboard and analytics
- **Database Backend**: Prisma ORM with SQLite (easily switchable to PostgreSQL/MySQL)
- **Contact Form**: Built-in contact form with message storage
- **SEO Optimized**: Automatic sitemap generation, meta tags, and robots.txt
- **TypeScript**: Full type safety across the application
- **Tailwind CSS**: Modern, responsive design system

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Database**: Prisma ORM + SQLite
- **Styling**: Tailwind CSS
- **Deployment**: Vercel-ready

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone or navigate to the project directory**

```bash
cd /Volumes/DevOPS\ 2025/La\ Puce\ a\ L\'oreille/website
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

```bash
cp .env.example .env
```

The default SQLite configuration should work out of the box. For production, you may want to switch to PostgreSQL.

4. **Initialize the database**

```bash
npm run db:migrate
```

This will create the SQLite database and run all migrations.

5. **Generate Prisma Client**

```bash
npm run db:generate
```

6. **Start the development server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
website/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   │   ├── posts/        # Blog post endpoints
│   │   └── contact/      # Contact form endpoint
│   ├── blog/             # Blog pages
│   │   └── [slug]/       # Individual post page
│   ├── admin/            # Admin panel
│   │   └── posts/new/    # Create new post
│   ├── contact/          # Contact page
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Homepage
│   ├── globals.css       # Global styles
│   ├── sitemap.ts        # SEO sitemap
│   └── robots.ts         # SEO robots.txt
├── components/            # React components
├── lib/                  # Utilities
│   └── prisma.ts         # Prisma client
├── prisma/               # Database
│   ├── schema.prisma     # Database schema
│   └── dev.db           # SQLite database (generated)
├── public/               # Static files
├── next.config.js        # Next.js configuration
├── tailwind.config.ts    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Dependencies

```

## Available Scripts

- `npm run dev` - Start development server (http://localhost:3000)
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run db:generate` - Generate Prisma Client
- `npm run db:migrate` - Run database migrations
- `npm run db:studio` - Open Prisma Studio (database GUI)

## Database Schema

The application uses Prisma with the following models:

- **Post**: Blog posts with title, content, slug, published status, etc.
- **Author**: Authors with name, email, bio, and avatar
- **Category**: Post categories
- **Tag**: Post tags (many-to-many with Posts)
- **ContactMessage**: Contact form submissions

## Usage Guide

### Creating Your First Post

1. Navigate to [http://localhost:3000/admin](http://localhost:3000/admin)
2. Click "Nouvel Article" (New Post)
3. Fill in the form:
   - Title (required)
   - Excerpt (required) - Short summary
   - Content (required) - Main content (HTML allowed)
   - Cover Image - Optional image URL
   - Published - Check to make it live immediately
   - Featured - Check to show on homepage
4. Click "Créer l'article" (Create Post)

### Managing Content

- **Admin Dashboard**: View statistics and recent posts at `/admin`
- **View Posts**: Browse all posts at `/blog`
- **Contact Messages**: View messages at `/admin/messages`
- **Database GUI**: Run `npm run db:studio` for visual database management

### Adding Authors

Currently, a default author is created automatically. To add more authors, use Prisma Studio:

```bash
npm run db:studio
```

Then navigate to the `Author` model and add new entries.

### Adding Categories

Use Prisma Studio to add categories:

```bash
npm run db:studio
```

Navigate to the `Category` model and create categories with:
- Name (e.g., "Technology")
- Slug (e.g., "technology")
- Description (optional)

## Customization

### Changing the Site Name

Edit `app/layout.tsx` to change "La Puce à L'oreille" to your site name.

### Updating Colors

The site uses Tailwind CSS. Primary color is blue-600. To change:

1. Update classes in components (e.g., `bg-blue-600` to `bg-purple-600`)
2. Or customize in `tailwind.config.ts` for theme-wide changes

### Switching to PostgreSQL

1. Update `prisma/schema.prisma`:

```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

2. Update `.env`:

```
DATABASE_URL="postgresql://user:password@localhost:5432/dbname"
```

3. Run migrations:

```bash
npm run db:migrate
```

## SEO Features

- **Meta Tags**: Automatic Open Graph and Twitter Card meta tags
- **Sitemap**: Auto-generated at `/sitemap.xml`
- **Robots.txt**: Auto-generated at `/robots.txt`
- **Dynamic Metadata**: Each post has unique meta tags

Update the base URL in `app/sitemap.ts` and `app/robots.ts` when deploying.

## Email Integration (Optional)

The contact form currently saves messages to the database. To send emails:

1. Install an email service package (e.g., Nodemailer, Resend, SendGrid)
2. Configure SMTP settings in `.env`
3. Update `app/api/contact/route.ts` to send emails

Example with Nodemailer:

```bash
npm install nodemailer
```

Then add email sending logic in the API route.

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import project to Vercel
3. Set environment variables in Vercel dashboard
4. For production, switch to PostgreSQL (Vercel Postgres recommended)
5. Deploy!

### Deploy to Other Platforms

The app works on any platform supporting Node.js:
- Netlify
- Railway
- Render
- DigitalOcean App Platform

Ensure you:
1. Set `DATABASE_URL` environment variable
2. Run build command: `npm run build`
3. Start command: `npm start`

## Troubleshooting

### Database Issues

If you encounter database errors:

```bash
# Reset database
rm -rf prisma/dev.db prisma/migrations
npm run db:migrate
```

### Port Already in Use

If port 3000 is busy:

```bash
npm run dev -- -p 3001
```

### TypeScript Errors

Ensure Prisma client is generated:

```bash
npm run db:generate
```

## Contributing

This is a custom blog platform. Feel free to customize and extend it for your needs!

## License

MIT License - feel free to use this for personal or commercial projects.

## Support

For issues or questions:
- Check the documentation above
- Review Next.js docs: https://nextjs.org/docs
- Review Prisma docs: https://www.prisma.io/docs

---

**Built with ❤️ using Next.js, TypeScript, Prisma, and Tailwind CSS**
