# Jake's Blog

A minimal, fast, and SEO-friendly personal blog built with [Astro](https://astro.build/) and [Tailwind CSS](https://tailwindcss.com/).

## Features

- Static site generation for GitHub Pages
- Blog with markdown/MDX support
- Tags for organizing posts
- Dark/light mode toggle
- RSS feed
- 100/100 Lighthouse scores

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Adding Blog Posts

Create a new markdown file in `src/content/blog/`:

```markdown
---
title: "Your Post Title"
description: "Brief description"
date: "2026-01-01"
tags: ["tag1", "tag2"]
---

Your content here...
```

## Deployment

This site auto-deploys to GitHub Pages when you push to `main`.

### Setup

1. Push to GitHub: `git push -u origin main`
2. Go to repo Settings > Pages
3. Set Source to "GitHub Actions"

## Configuration

Edit these files to customize your site:

- `src/consts.ts` - Site name, email, social links
- `src/pages/index.astro` - Homepage content
- `astro.config.mjs` - Site URL (update before deploying)

## License

MIT
