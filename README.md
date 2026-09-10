# Toolvero v2.3 — DevOps Configuration Generators

Built on stable v2.2.1.

## New tools
1. Nginx Reverse Proxy Generator
2. Docker Compose Generator
3. DNS Record Generator
4. systemd Service Generator
5. SSH Config Generator

Tool count: 37

## Integration
- Homepage updated to 37 tools.
- Search index includes all five new tools.
- Networking category now includes DNS Record Generator.
- Developer & DevOps category now includes Nginx Reverse Proxy Generator and Docker Compose Generator.
- Linux & Automation category now includes systemd Service Generator and SSH Config Generator.
- Related internal links added from nearby existing tools.
- Sitemap updated to 52 public URLs.

## Suggested commit
`Release Toolvero v2.3 - DevOps configuration generators`

## Post-deploy tests
- Search `nginx`
- Search `compose generator`
- Search `dns record`
- Search `systemd`
- Search `ssh config`
- DNS Record Generator: A / www / 3600 / 192.0.2.10
- Nginx Generator: app.example.com -> 127.0.0.1:3000
- Docker Compose Generator: default sample
- systemd Generator: default sample
- SSH Config Generator: default sample
- Confirm homepage shows 37 tools
