# Toolvero v2.0

Guides & Content release built on v1.9.

## New
- Technical Guides landing page (`guides.html`)
- CIDR Explained guide
- Linux chmod Explained guide
- SSL/TLS Certificates Explained guide
- Compact Technical Guides section on the homepage
- Guides link in global footer
- Article/CollectionPage structured data on guide pages
- Canonical URLs, descriptions and Open Graph metadata on guide pages
- Sitemap updated to 34 public URLs

## Cleanup
- Removes legacy generic `More Toolvero tools` blocks where the old markup can be identified.
- Keeps the contextual `Related Toolvero tools` links introduced in v1.9.
- Existing 26 tools, GA4, About, Privacy and Contact remain intact.

Suggested commit:
`Release Toolvero v2.0 - Technical guides and content discovery`

## Post-deploy tests
1. Open `/guides.html`.
2. Open each of the 3 guides.
3. Test every tool button inside the guides.
4. Open `/subnet.html` and verify its contextual related links remain.
5. Confirm the homepage Technical Guides section looks compact.
6. Open `/sitemap.xml` and confirm guide URLs are present.
7. Check GA4 Realtime while navigating guides and tools.
