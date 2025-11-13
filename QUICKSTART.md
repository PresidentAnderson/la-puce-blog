# Quick Start Guide

Get your blog up and running in 5 minutes!

## Start the Development Server

```bash
cd "/Volumes/DevOPS 2025/La Puce a L'oreille/website"
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Create Your First Post

1. Go to [http://localhost:3000/admin](http://localhost:3000/admin)
2. Click **"+ Nouvel Article"** (New Post)
3. Fill in the form:
   - **Title**: Your post title
   - **Excerpt**: A short summary (2-3 sentences)
   - **Content**: Your full article (you can use HTML)
   - **Cover Image**: (Optional) Paste an image URL
   - Check **"Publier immédiatement"** to publish right away
   - Check **"Article en vedette"** to show it on the homepage
4. Click **"Créer l'article"**

## View Your Site

- **Homepage**: [http://localhost:3000](http://localhost:3000)
- **All Posts**: [http://localhost:3000/blog](http://localhost:3000/blog)
- **Admin Panel**: [http://localhost:3000/admin](http://localhost:3000/admin)
- **Contact Form**: [http://localhost:3000/contact](http://localhost:3000/contact)

## Managing Your Database

View and edit your database visually:

```bash
npm run db:studio
```

This opens Prisma Studio at [http://localhost:5555](http://localhost:5555)

Here you can:
- Add/edit authors
- Create categories
- Add tags
- View contact messages

## Key Features

### Homepage
- Hero section with call-to-action
- Featured posts (3 cards)
- Recent posts (6 cards)
- Contact CTA section

### Blog Listing
- All published posts
- Category sidebar
- Search functionality (coming soon)
- Responsive cards with images

### Individual Post Pages
- Full post content
- Author information
- Category and tags
- SEO optimized
- Breadcrumb navigation

### Admin Panel
- Dashboard with statistics
- Quick actions
- Recent posts table
- Manage all content

### Contact Form
- User-friendly form
- Messages saved to database
- Ready for email integration

## Sample Post

Here's a sample post you can create to test:

**Title**: Welcome to La Puce à L'oreille

**Excerpt**: Discover our new blog platform featuring modern design, powerful content management, and SEO optimization.

**Content**:
```html
<h2>Welcome to Our Blog</h2>
<p>We're excited to launch this new platform for sharing ideas, insights, and stories.</p>

<h3>What You'll Find Here</h3>
<ul>
  <li>In-depth articles and analysis</li>
  <li>Expert opinions and commentary</li>
  <li>News and updates</li>
  <li>Community discussions</li>
</ul>

<h3>Our Mission</h3>
<p>Our mission is to provide high-quality content that informs, educates, and inspires our readers.</p>

<p>Stay tuned for more exciting content!</p>
```

**Cover Image**: `https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800`

Check **Published** and **Featured**.

## Next Steps

1. **Customize the design**: Edit `app/layout.tsx` and Tailwind classes
2. **Add categories**: Use Prisma Studio to create categories
3. **Create authors**: Add author profiles in Prisma Studio
4. **Write content**: Start creating posts!
5. **Deploy**: See README.md for deployment instructions

## Troubleshooting

**Server won't start?**
```bash
npm install
npm run db:generate
npm run dev
```

**Database errors?**
```bash
npm run db:migrate
```

**Port 3000 in use?**
```bash
npm run dev -- -p 3001
```

## Need Help?

Check the full [README.md](./README.md) for detailed documentation.

---

Happy blogging! 🎉
