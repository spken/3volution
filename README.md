# 3volution

Two landing pages for 3volution, Boulevard Lilienthal 39, Glattpark. One npm workspace, two independent Next.js 16 apps.

| App | Folder | Dev port | Planned domain |
|---|---|---|---|
| 3volution Coffee | [`apps/coffee`](./apps/coffee) | 3000 | `coffee.<domain>` |
| Coiffeur 3volution | [`apps/coiffeur`](./apps/coiffeur) | 3001 | `coiffeur.<domain>` |

Brand facts, palette and client decisions for both: [BRAND-INFO.md](./BRAND-INFO.md).

## Develop

```bash
npm install            # once, at the repo root
npm run dev:coffee     # http://localhost:3000
npm run dev:coiffeur   # http://localhost:3001
npm run build          # builds both
```

## Deploy (one project per app)

Each app deploys on its own, e.g. two Vercel projects from this repo:

- Root directory `apps/coffee` → domain `coffee.<domain>`
- Root directory `apps/coiffeur` → domain `coiffeur.<domain>`

DNS: a CNAME per subdomain pointing at the host. Per-app environment variables (see each app's `.env.example`):

| Variable | coffee | coiffeur |
|---|---|---|
| `SITE_URL` | `https://coffee.<domain>` | `https://coiffeur.<domain>` |
| `NEXT_PUBLIC_COIFFEUR_URL` | `https://coiffeur.<domain>` | – |
| `NEXT_PUBLIC_COFFEE_URL` | – | `https://coffee.<domain>` |

The apps share no code yet: components were copied and are expected to diverge. If shared pieces grow (brand SVGs, tokens, legal shell), extract them into `packages/`.
