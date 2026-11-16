# IYF Teacher Workspace (web)

A Next.js 16 and Tailwind CSS v4 site that hosts the Imagine Your Future
Teacher Workspace for UP Education Network, grades 6 to 8.

The workspace itself is the compiled React bundle in `public/workspace/app.js`
with its stylesheet in `src/app/workspace.css`. The single page at `/` mounts
it, and the bundle handles its own screens (sessions, slides, handouts, pitch
day, calendar, feedback, the Bain visit) in memory. The same bundle ships as
the standalone HTML file in the main workspace repository.

## Run it locally

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000.

## Build and check

```bash
pnpm lint
pnpm build
pnpm start
```

## Deploy to Vercel

Import this repository in Vercel.
Vercel detects Next.js and needs no other settings, since the site sits at the repository root. From a machine with the
Vercel CLI signed in, `vercel deploy --prod` from this folder does the same.

## Updating the workspace

When a new `IYF_Teacher_Workspace.html` lands, copy its `<script type="module">`
body into `public/workspace/app.js` and its `<style>` body into
`src/app/workspace.css`, then rebuild.
