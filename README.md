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


---

Arjun Aditya is building Gray Cup - a company which is around tea, coffee, and softwares. You can explore more below

• [https://graycup.org](https://graycup.org)

• [https://graycup.com](https://graycup.com)

• [https://arjunaditya.xyz](https://arjunaditya.xyz)

He still writes code, designs interfaces, and somehow keeps moving forward with a cup of tea or coffee in hand [ the ritual that keeps him sane when the burnout starts creeping in ]

Buy coffee or tea:

[https://graycup.in](https://graycup.in)

Bulk coffee or tea:

[https://b2b.graycup.in](https://b2b.graycup.in)

[https://bulkgreencoffee.com](https://bulkgreencoffee.com)

[https://bulkctc.com](https://bulkctc.com)
