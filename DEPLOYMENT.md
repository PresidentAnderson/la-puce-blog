# Deployment Information

Your blog website has been successfully deployed!

## GitHub Repository

**Repository**: [https://github.com/PresidentAnderson/la-puce-blog](https://github.com/PresidentAnderson/la-puce-blog)

The repository contains all your source code and is connected to Vercel for automatic deployments.

## Vercel Deployment

**Production URL**: [https://website-d6n7fzp62-axaiinovation.vercel.app](https://website-d6n7fzp62-axaiinovation.vercel.app)

**Project Name**: website
**Organization**: axaiinovation

### Vercel Dashboard

View your deployments, logs, and analytics:
- [Vercel Dashboard](https://vercel.com/axaiinovation/website)

## Automatic Deployments

Every time you push to the `main` branch on GitHub, Vercel will automatically:
1. Pull the latest code
2. Build your Next.js application
3. Deploy to production

## Important Notes

### Database Setup

Your site is currently using SQLite, which works for development but **NOT for production** on Vercel.

**For production, you need to:**

1. **Switch to a cloud database** (choose one):
   - **Vercel Postgres** (recommended, easiest)
   - **Neon** (serverless Postgres)
   - **PlanetScale** (serverless MySQL)
   - **Railway** (Postgres/MySQL)

2. **Update your database configuration**:

   For Vercel Postgres:
   ```bash
   # In Vercel Dashboard:
   # Storage > Create Database > Postgres
   # Copy the DATABASE_URL
   ```

   Then update `prisma/schema.prisma`:
   ```prisma
   datasource db {
     provider = "postgresql"  // Change from "sqlite"
     url      = env("DATABASE_URL")
   }
   ```

3. **Add DATABASE_URL to Vercel Environment Variables**:
   - Go to Vercel Dashboard > Settings > Environment Variables
   - Add `DATABASE_URL` with your database connection string
   - Redeploy

4. **Run migrations**:
   ```bash
   npx prisma migrate deploy
   ```

### Custom Domain (Optional)

To use your own domain:

1. Go to Vercel Dashboard > Settings > Domains
2. Add your custom domain
3. Follow the DNS configuration instructions
4. Update `app/sitemap.ts` and `app/robots.ts` with your domain

### Environment Variables

If you need to add environment variables:

1. Go to Vercel Dashboard > Settings > Environment Variables
2. Add your variables (e.g., SMTP settings for email)
3. Redeploy for changes to take effect

## Next Steps

1. **Set up a production database** (see Database Setup above)
2. **Create your first blog post** via the admin panel
3. **Customize the site** (colors, branding, content)
4. **Add a custom domain** (optional)
5. **Configure email** for the contact form (optional)

## Useful Commands

### Local Development
```bash
npm run dev              # Start dev server
npm run db:studio        # Open database GUI
```

### Deployment
```bash
git push                 # Auto-deploys to Vercel
vercel --prod           # Manual production deploy
vercel logs             # View deployment logs
```

### Database
```bash
npx prisma migrate dev   # Create migration
npx prisma migrate deploy # Deploy migrations (production)
npx prisma studio        # Open database GUI
```

## Monitoring

- **Vercel Analytics**: Automatically enabled for page views
- **Logs**: Available in Vercel Dashboard
- **Build Status**: Check GitHub Actions or Vercel Dashboard

## Support

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **Prisma Docs**: https://www.prisma.io/docs

---

**Congratulations! Your blog is live! 🎉**
