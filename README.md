# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte);

## Setup

```bash
# Install node modules
pnpm install
```

Create a .env file in the root of the project containing

```
VITE_SUPABASE_URL=<your-supabase-url>
VITE_SUPABASE_ANON_KEY=<your-supabase-public-key>

SUPABASE_PRIVATE_KEY=<your-supabase-private-key>
SUPABASE_JWT_SECRET=<your-supabase-jwt-secret>
```

Supabase setup

```sql
-- users
create table public.profiles (
  id uuid references auth.users not null,
  first_name text,
  last_name text,

  primary key (id)
);

alter table public.profiles enable row level security;

-- posts
create table public.posts (
  title text,
  post text,
  metadata json,
  user_id uuid not null
);

alter table public.posts enable row level security;

create policy "user update own posts"
  on posts
  for all using (auth.uid() = user_id);
```

<!-- auth.uid() = user_id -->
<!-- Protect data based on user_id -->

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

Before creating a production version of your app, install an [adapter](https://kit.svelte.dev/docs#adapters) for your target environment. Then:

```bash
npm run build
```

> You can preview the built app with `npm run preview`, regardless of whether you installed an adapter. This should _not_ be used to serve your app in production.
