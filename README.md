# Screen Toll — Launch guide

## What's in this folder
- `index.html` — the app as a single self-contained file (works offline, no build step)
- `supabase_schema.sql` — table definitions, all prefixed `ScreenToll_`

## Launch on GitHub Pages
1. Create a repo at https://github.com/new (e.g. `screen-toll`)
2. Upload `index.html` to the repo root
3. Repo Settings → Pages → Source: "Deploy from a branch" → branch `main`, folder `/ (root)` → Save
4. Your app goes live at `https://<your-username>.github.io/screen-toll/`

## Set up Supabase
1. Create a project at https://supabase.com/dashboard
2. Open SQL Editor → paste the contents of `supabase_schema.sql` → Run
3. Six tables are created: ScreenToll_settings, ScreenToll_channels, ScreenToll_queue,
   ScreenToll_watch_sessions, ScreenToll_breaks, ScreenToll_extensions — all with
   row-level security so each signed-in user only sees their own data.

## Note
This build is the design prototype: limits, queue, and breaks run in-memory
(1 real second = 1 minute for testing). Wiring it to Supabase + the real
YouTube API is the development step — hand this folder to a developer or
Claude Code and the schema maps 1:1 to the app's features.
