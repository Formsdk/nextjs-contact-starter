# Next.js x FormsDK Starter

A minimal contact form starter using Next.js and FormsDK with PostgreSQL.

## Supported Providers

FormsDK works with any PostgreSQL database. Tested providers:

- [NeonDB](https://neon.tech)
- [Supabase](https://supabase.com)
- [Render](https://render.com)
- [Fly.io](https://fly.io)
- [Zerops](https://zerops.io)

## Setup

### 1. Create a database

Sign up at any of the providers above and create a PostgreSQL database.

### 2. Get your database URL

Copy the connection string from your provider's dashboard.

### 3. Configure environment variables

Create a `.env` file in the root of the project:

```
DATABASE_URL=postgres://user:password@host/database?sslmode=require
```

### 4. Push the schema

```bash
bun db:push
```

### 5. Run the dev server

```bash
bun i
bun dev
```

Open [http://localhost:3000](http://localhost:3000).

## Features

- Contact form with name, email, and message fields
- Form validation via @formsdk/sdk
- PostgreSQL integration for data persistence
- Works with any PostgreSQL provider
