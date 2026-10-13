import { config } from "dotenv"
import { defineConfig } from "drizzle-kit"

config({ path: ".env.local" })

// Migrations need a direct (non-pooled) connection: PgBouncer's transaction
// mode drops session state that drizzle-kit relies on.
const url = process.env.DATABASE_URL_UNPOOLED

if (!url) {
  throw new Error(
    "DATABASE_URL_UNPOOLED is not set. Run `neon env pull` to fetch it."
  )
}

export default defineConfig({
  dialect: "postgresql",
  schema: "./db/schema.ts",
  out: "./db/migrations",
  dbCredentials: { url },
  strict: true,
  verbose: true,
})
