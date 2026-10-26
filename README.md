# Obsidian redirect

A Cloudflare Worker that redirects to Obsidian's new-note URL with the append flag.

**Use:** https://obsidian-redirect.alexander-bad.workers.dev/?file=Inbox

Responds with HTTP 302 to `obsidian://new?file=Inbox&append`.
URL-encode filenames (e.g. `?file=Daily%2FMy%20Note`).
Missing or blank `file` returns HTTP 400.

Obsidian must be installed; browsers may prompt before opening external apps.

## Deployment

Cloudflare Workers Builds automatically tests and deploys every push to `main`.
Edit files on GitHub or push a commit; no local project or GitHub deployment secrets are needed.

## Local development (optional)

```sh
npm ci
npm test
npm run dev
```
