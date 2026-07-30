# MAARK

Personal portfolio of Mark Pivovarov — AI developer, DevOps, and product
engineer.

Production: [maark.ru](https://maark.ru)

## Local development

Requires Node.js 22.13 or newer.

```bash
npm ci
npm run dev
```

## Verification

```bash
npm run build
npm run lint
node --test tests/rendered-html.test.mjs
```

The site is built with React, TypeScript, vinext, and Vite. It supports Russian
and English in one responsive interface.

## Production deployment

The production host keeps the repository in `/opt/me` and runs the site through
Docker Compose on `127.0.0.1:3010`, behind Nginx.

```bash
docker compose up -d --build
```
