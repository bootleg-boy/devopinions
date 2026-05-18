# devopinions.com

Astro-powered personal site — portfolio, blog, study notes, project case studies.
Deployed via GitHub Actions to GitHub Pages on the custom domain `devopinions.com`.

## Stack

- **[Astro 5](https://astro.build)** — static site generator
- **Content Collections** — typed Markdown frontmatter (build fails on bad metadata)
- **`@astrojs/sitemap`** — auto-generated `sitemap-index.xml`
- **`@astrojs/rss`** — RSS feed at `/blog/rss.xml`
- **Shiki** — code syntax highlighting (`github-dark-dimmed`)

## Project structure

```
src/
├── components/        ← SEO, Header, Footer
├── layouts/           ← BaseLayout, ArticleLayout
├── pages/
│   ├── index.astro    ← homepage (paste existing hero here)
│   ├── blog/          ← blog listing + dynamic post route + RSS
│   ├── notes/         ← study notes listing + dynamic note route
│   └── projects/      ← case studies listing + dynamic project route
├── content/
│   ├── blog/          ← .md files become blog posts
│   ├── notes/         ← .md files become notes
│   └── projects/      ← .md files become project case studies
├── styles/
│   └── global.css     ← all site styles (tokens, prose, listings)
├── config.ts          ← site metadata, nav, author info
└── content.config.ts  ← frontmatter schemas (the type contracts)
```

## Local development

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # produces ./dist
npm run preview    # preview the built site
```

## Writing a blog post

1. Create `src/content/blog/my-slug.md`
2. Add frontmatter (see existing posts for the pattern):
   ```yaml
   ---
   title: "Your post title (under 70 chars)"
   description: "Meta description, 50–160 chars — shows in Google results."
   date: 2026-05-16
   tags: ["topic", "topic"]
   draft: false
   ---
   ```
3. Write the post body in Markdown
4. Push to `main` — GitHub Actions builds and deploys

The build will **fail** if frontmatter is wrong (description too short, title too long, etc.) — this is intentional. Bad meta means bad SEO.

## Writing a note

Same pattern as a blog post but in `src/content/notes/`. Notes use a different frontmatter schema (lighter — no `draft` field, optional `topic` field). They're framed as rough working notes, not polished articles.

## Writing a project case study

Same pattern but in `src/content/projects/`. Schema includes `stack` (array of technologies), `impact` (short metric like "97% load time reduction"), optional `repo` and `live` URLs, and a `featured` flag.

## Deployment

Push to `main`. The GitHub Action in `.github/workflows/deploy.yml`:
1. Installs deps
2. Runs `npm run build`
3. Uploads `dist/` as a Pages artifact
4. Deploys to `devopinions.com`

## One-time GitHub setup

After pushing this repo to GitHub:

1. **Repo settings → Pages → Source**: select "GitHub Actions"
2. **Repo settings → Pages → Custom domain**: enter `devopinions.com`
3. Make sure your DNS has these records pointing at GitHub Pages:
   - `A` records for `devopinions.com` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME` for `www.devopinions.com` → `your-github-username.github.io`
4. Tick "Enforce HTTPS" once the cert provisions (usually within minutes)

## SEO checklist (do these once)

- [ ] **Google Search Console** — add `https://devopinions.com` as a property, verify via DNS TXT record, submit `https://devopinions.com/sitemap-index.xml`
- [ ] **Bing Webmaster Tools** — same drill, free traffic from a non-Google source
- [ ] **OG image** — create a 1200×630 PNG at `public/og-default.png` (gold/cream brand on dark background works). Test with [opengraph.xyz](https://opengraph.xyz)
- [ ] **Test structured data** — paste a published post URL into [Google's Rich Results Test](https://search.google.com/test/rich-results) to confirm BlogPosting JSON-LD is valid
- [ ] **PageSpeed** — run [PageSpeed Insights](https://pagespeed.web.dev) on `/` and one blog post. Aim for 95+ on mobile.
- [ ] **Internal linking** — every blog post should link to at least one related note or project (Google rewards site depth)

## Why each SEO piece exists

| Piece | Purpose |
|---|---|
| `<link rel="canonical">` | Prevents duplicate-content penalties |
| Open Graph tags | Pretty preview cards on LinkedIn / Slack |
| Twitter cards | Pretty preview cards on X |
| JSON-LD (`BlogPosting`) | Google rich results — author, date, breadcrumbs |
| `sitemap-index.xml` | Tells Google what pages exist |
| `robots.txt` | Tells Google where the sitemap is |
| RSS feed | Subscribers + some SEO signals |
| `noindex` for drafts | Drafts won't accidentally rank |
| Strict frontmatter schema | Bad metadata fails the build, not silently in production |
