# Hardware Solutions

Brochure site for Hardware Solutions — IoT specialist covering security systems, monitoring systems, and networking systems.

Full project docs live in [`docs/`](./docs):
- [`docs/spec.md`](./docs/spec.md) — product specification (pages, content, navigation behavior)
- [`docs/architecture.md`](./docs/architecture.md) — stack, source structure, data flow
- [`docs/design.md`](./docs/design.md) — design tokens, component specs, page layouts
- [`docs/implementation.md`](./docs/implementation.md) — phased build plan

## Development

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
pnpm build && pnpm start   # production build check
pnpm lint                  # ESLint
pnpm exec tsc --noEmit     # typecheck
```
