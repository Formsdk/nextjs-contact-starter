# Next.js x FormsDK Starter

A minimal contact form starter using Next.js and FormsDK with NeonDB.

## Setup

### 1. Create a NeonDB account

Go to [neon.tech](https://neon.tech) and sign up. Create a new project.

### 2. Get your database URL

From your Neon dashboard, copy the connection string.

### 3. Configure environment variables

Create a `.env.local` file in the root of the project:

```
DATABASE_URL=postgres://user:password@ep-xxx.region.aws.neon.tech/neondb?sslmode=require
```

### 4. Create the submissions table

Run this in the Neon SQL editor:

```sql
CREATE TABLE form_submissions (
  id SERIAL PRIMARY KEY,
  name TEXT,
  email TEXT,
  message TEXT
);
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
- NeonDB integration for data persistence
- Serverless Postgres via Neon