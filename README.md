# Kevin Wyss — personal site

Static personal blog and portfolio prepared from a Claude Design export.

## Local preview

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The public routes are `/`, `/writing/turning-ai-into-a-service`, and
`/writing/how-to-find-value-in-enterprise-software`.

## Site structure

- `public/*.html` contains the homepage and article content.
- `public/sources/css/site.css` contains design tokens, shared page and article components, responsive behavior, and scoped article-illustration styles.
- `public/sources/js/` contains the browser runtime and interactive tooltip behavior.

New articles should reuse the semantic article classes in `site.css`. Keep visual
instructions out of the HTML so typography, spacing, colors, and layout remain
consistent across the site.
