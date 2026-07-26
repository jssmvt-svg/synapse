# Synapse

A full-stack document and flashcard app built with React (Vite) + Express + PostgreSQL (Supabase) + Claude AI.

## Project structure

```
client/       React frontend (Vite, TypeScript)
server/       Express API (TypeScript, tsx)
package.json  Root npm workspace — runs both
```

## Dev setup

- Frontend: Vite dev server on **port 5000** (Replit preview port)
- Backend: Express on **port 3001** (proxied via Vite `/api`)
- Run both with `npm run dev` from the root

## Required secrets

Set these in **Replit Secrets** (Tools → Secrets):

| Key | Description |
|-----|-------------|
| `DATABASE_URL` | Supabase Postgres connection string (Transaction pooler, port 6543) |
| `JWT_SECRET` | Long random string for signing JWTs |
| `ANTHROPIC_API_KEY` | Claude API key (`sk-ant-...`) |

`DATABASE_URL` must be configured via the Supabase integration or added manually in the Secrets tab.

## User preferences

- French comments/error messages in server code
