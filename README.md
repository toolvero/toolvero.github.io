# Toolvero v2.1 — Expansion Release

## New tools (6)
- DNS Propagation Checker (multi-resolver comparison; no false global-propagation claim)
- MAC Address Formatter & Validator
- IPv4 Range Calculator
- HTTP Status Codes Reference
- JSON ↔ CSV Converter
- Docker Compose Validator (lightweight pre-check; explicitly not full spec validation)

## New guides (3)
- DNS Records Explained
- HTTP Security Headers Explained
- Kubernetes CPU & Memory Requests and Limits Explained

Toolvero now contains 32 tools and 6 technical guides.
The sitemap contains 43 public URLs.

## Important design decisions
- Browser-only/static GitHub Pages architecture retained.
- DNS propagation uses public DNS-over-HTTPS and clearly states its limits.
- Compose Validator does not pretend to replace `docker compose config`.
- Existing GA4, SEO metadata, About, Privacy, Contact and contextual links remain.

Suggested commit:
`Release Toolvero v2.1 - New tools and technical guides`

## Spot tests
1. Homepage: verify 32 tools and Technical Guides.
2. DNS Propagation Checker: example.com / A.
3. MAC formatter: 00:1A:2B:3C:4D:5E → Cisco should be 001A.2B3C.4D5E.
4. IPv4 range: 192.168.1.10 to 192.168.1.50 → 41 addresses; covering CIDR 192.168.1.0/26.
5. HTTP status: search 404.
6. JSON ↔ CSV: use the included sample.
7. Compose Validator: use the included sample; then remove `services:` and re-test.
8. Open guides.html and one new guide.
9. Open sitemap.xml.
