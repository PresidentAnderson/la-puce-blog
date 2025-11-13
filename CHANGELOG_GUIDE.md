# Changelog Guide

This guide explains how to maintain and update the changelog for La Puce à L'oreille blog platform.

## Overview

The changelog is displayed in a modal at the bottom-left of every page. Users can click on "Changelog" in the footer to view recent updates and improvements.

## Location of Files

- **Changelog Data**: `lib/changelog.ts`
- **Modal Component**: `components/ChangelogModal.tsx`
- **Display**: Footer in `app/layout.tsx`

## How to Add a New Version

When releasing a new version, update `lib/changelog.ts` by adding a new entry at the **top** of the array:

```typescript
export const changelog: ChangelogEntry[] = [
  {
    version: '0.0.11',  // New version
    date: '2025-11-14',  // Release date (YYYY-MM-DD)
    type: 'patch',  // 'major', 'minor', or 'patch'
    changes: [
      {
        category: 'feature',  // See categories below
        items: [
          'Description of new feature 1',
          'Description of new feature 2',
        ],
      },
      {
        category: 'bugfix',
        items: [
          'Fixed issue with XYZ',
        ],
      },
    ],
  },
  // ... existing versions below
]
```

## Version Types

- **major** (red badge): Breaking changes, major new features
- **minor** (blue badge): New features, backwards compatible
- **patch** (green badge): Bug fixes, small improvements

## Change Categories

Each category has an icon and label:

| Category | Icon | Label | Use For |
|----------|------|-------|---------|
| `feature` | ✨ | New Features | New functionality, major additions |
| `improvement` | 🔧 | Improvements | Enhancements to existing features |
| `bugfix` | 🐛 | Bug Fixes | Bug fixes and error corrections |
| `design` | 🎨 | Design Updates | UI/UX improvements, styling changes |
| `security` | 🔒 | Security | Security patches and updates |

## Example Entry

```typescript
{
  version: '0.1.0',
  date: '2025-12-01',
  type: 'minor',
  changes: [
    {
      category: 'feature',
      items: [
        'Added search functionality for blog posts',
        'Implemented user authentication for admin panel',
        'Added markdown editor for creating posts',
      ],
    },
    {
      category: 'improvement',
      items: [
        'Improved page load performance',
        'Enhanced mobile responsiveness',
      ],
    },
    {
      category: 'design',
      items: [
        'Redesigned admin dashboard',
        'Updated color scheme',
      ],
    },
    {
      category: 'bugfix',
      items: [
        'Fixed pagination on blog listing page',
        'Resolved image upload issue in admin',
      ],
    },
    {
      category: 'security',
      items: [
        'Updated authentication tokens',
        'Added CSRF protection',
      ],
    },
  ],
},
```

## Workflow

### When Making Changes

1. **During Development**: Keep notes of changes in each category
2. **Before Release**: Compile all changes into the changelog format
3. **Update File**: Add new entry to `lib/changelog.ts`
4. **Update Version**: Update version in `package.json`
5. **Commit**: Commit changes with message like "Update changelog for v0.0.11"

### Example Workflow

```bash
# 1. Update changelog
nano lib/changelog.ts

# 2. Update package.json version
npm version patch  # or minor, or major

# 3. Commit changes
git add lib/changelog.ts package.json
git commit -m "Release v0.0.11: Add changelog and version bump"

# 4. Create tag
git tag -a v0.0.11 -m "Release v0.0.11"

# 5. Push
git push origin main --tags
```

## Best Practices

### Writing Change Descriptions

✅ **Good Examples**:
- "Added search functionality for blog posts"
- "Fixed image upload issue in admin panel"
- "Improved mobile menu responsiveness"
- "Updated authentication to use JWT tokens"

❌ **Bad Examples**:
- "Fixed stuff" (too vague)
- "Updated code in multiple files" (not user-focused)
- "Refactored component logic" (technical, not user benefit)

### Tips

1. **User-Focused**: Write from the user's perspective
2. **Clear**: Be specific about what changed
3. **Concise**: Keep descriptions short and clear
4. **Organized**: Group related changes in the same category
5. **Consistent**: Use similar phrasing across entries

## Displaying the Changelog

The changelog is automatically displayed:

- **Footer**: Shows "Changelog" link with version number
- **Modal**: Opens when user clicks the link
- **Responsive**: Works on mobile and desktop
- **Styled**: Professional appearance with color-coded badges

## Testing Changes

After updating the changelog:

1. **Start Dev Server**: `npm run dev`
2. **Visit Site**: Open http://localhost:3000
3. **Check Footer**: Verify version number and link appear
4. **Click Link**: Test that modal opens correctly
5. **Review Content**: Ensure all changes display properly
6. **Test Close**: Verify modal closes correctly

## Maintaining History

- **Keep Old Versions**: Don't delete previous entries
- **Latest First**: New versions should be at the top
- **Complete History**: Include all versions for reference
- **Accurate Dates**: Use correct release dates

## Integration with Releases

The changelog should match your GitHub releases:

1. Update `lib/changelog.ts`
2. Create GitHub release with same information
3. Keep both in sync for consistency

## Example: Complete Update Process

```bash
# 1. Make your changes during development
# 2. Before releasing, update changelog

# Edit lib/changelog.ts
code lib/changelog.ts

# 3. Update version
npm version patch

# 4. Commit
git add -A
git commit -m "Release v0.0.11: Bug fixes and improvements"

# 5. Tag and push
git tag -a v0.0.11 -m "Release v0.0.11"
git push origin main --tags

# 6. Create GitHub release
gh release create v0.0.11 --generate-notes
```

## Questions?

If you need help or have questions about maintaining the changelog:
- Check existing entries for examples
- Follow the patterns established in v0.0.10
- Keep it simple and user-friendly

---

**Remember**: The changelog is for users, not developers. Focus on what changed from their perspective!
