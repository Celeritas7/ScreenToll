# ScreenToll — setup

Keys live in **`config.js`**, committed to your GitHub repo. Sign-in is **Google**, and access is controlled by rows in your existing `authentication_mode_user_roles` table — no one else can get in, even with a Google account.

## Files to deploy

Put these four in the same folder (repo root, or `/docs` for GitHub Pages):

```
index.html
config.js      ← the only file you edit
styles.css
_ds_bundle.js
```

## 1. Fill in config.js

Edit it in GitHub (pencil icon → commit) or locally:

```js
window.SCREENTOLL_CONFIG = {
  SUPABASE_URL:      'https://xxxxxxxx.supabase.co',
  SUPABASE_ANON_KEY: 'eyJ…',
  YOUTUBE_API_KEY:   'AIza…',
  ROLES_TABLE: 'authentication_mode_user_roles',
  STATE_TABLE: 'screen_toll_state'
};
```

Supabase URL + anon key: **Project Settings → API**. Both are public-safe — row-level security and the operator list are what protect the data.

YouTube key: Google Cloud Console → APIs & Services → enable **YouTube Data API v3** → Credentials → API key. Then **restrict it**: Application restrictions → *Websites* → add your Pages URL and `http://localhost:*`. That stops anyone reusing it.

## 2. Create the sync table

Supabase → **SQL Editor** → run:

```sql
create table if not exists public.screen_toll_state (
  user_id    uuid primary key references auth.users on delete cascade,
  data       jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.screen_toll_state enable row level security;

create policy "own row - read"   on public.screen_toll_state for select using (auth.uid() = user_id);
create policy "own row - insert" on public.screen_toll_state for insert with check (auth.uid() = user_id);
create policy "own row - update" on public.screen_toll_state for update using (auth.uid() = user_id) with check (auth.uid() = user_id);
```

## 3. Let signed-in users read their own operator row

The app checks `authentication_mode_user_roles` for the signed-in email. It needs permission to read that one row:

```sql
alter table public.authentication_mode_user_roles enable row level security;

create policy "read my own operator row"
  on public.authentication_mode_user_roles
  for select to authenticated
  using (lower(email) = lower(auth.jwt() ->> 'email'));
```

If a policy like this already exists, skip it. Without it the app shows **DENIED** for everyone, because the lookup returns nothing.

## 4. Turn on Google sign-in

1. **Google Cloud Console** → APIs & Services → **OAuth consent screen** (External, add yourself as a test user or publish) → **Credentials → Create OAuth client ID → Web application**.
2. Authorised redirect URI: `https://<your-project-ref>.supabase.co/auth/v1/callback` — Supabase shows this exact string on the Google provider page.
3. Copy the **Client ID** and **Client secret** into Supabase → **Authentication → Sign In / Providers → Google** → enable → save.
4. Supabase → **Authentication → URL Configuration** → set **Site URL** to your GitHub Pages URL and add it (plus `http://localhost:5190`) under **Redirect URLs**.

Google sign-in needs a real http(s) origin — it will not work on a `file://` copy. Use `localhost` or Pages.

## 5. Add the people who are allowed in

Insert a row per person in `authentication_mode_user_roles` — email, role, name. Anyone signing in with a Google account not in that table gets the **Turn around → DENIED** screen and nothing else. To revoke someone, delete their row.

Also set **Authentication → Sign In / Providers → Email → Allow new users to sign up: OFF** so nobody can self-register a password account.

## What syncs

Queue, VIP Lane, channels and folder icons, playlists, watch history, budget usage and theme — one JSON row per user, pushed ~1 second after every change. Settings shows a live `SYNCED / SAVING… / SYNC FAILED` indicator, the signed-in email and role, and a **Sign out** button (which also wipes the local copy).

You already have `ScreenToll_queue`, `ScreenToll_settings` and `ScreenToll_watch_sessions` tables in this project. The app doesn't use them — tell me their columns if you'd rather sync into those than the single JSON row.
