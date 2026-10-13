import "server-only"

import { attachDatabasePool } from "@vercel/functions"
import { drizzle } from "drizzle-orm/node-postgres"
import { Pool } from "pg"

import * as schema from "@/db/schema"

const connectionString = process.env.DATABASE_URL

if (!connectionString) {
  throw new Error("DATABASE_URL is not set. Run `neon env pull` to fetch it.")
}

// Reuse one pool across hot reloads in dev so connections don't pile up.
const globalForDb = globalThis as unknown as { pgPool?: Pool }

export const pool = globalForDb.pgPool ?? new Pool({ connectionString })

if (process.env.NODE_ENV !== "production") globalForDb.pgPool = pool

// Lets Vercel Fluid compute close idle clients before a function suspends.
attachDatabasePool(pool)

export const db = drizzle({ client: pool, schema })
