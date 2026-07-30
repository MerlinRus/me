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
