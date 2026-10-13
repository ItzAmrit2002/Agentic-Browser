import { sql } from "drizzle-orm"

import { db } from "@/lib/db"

export const dynamic = "force-dynamic"

export async function GET() {
  const started = performance.now()
  try {
    const { rows } = await db.execute<{ now: Date }>(sql`select now() as now`)
    return Response.json({
      ok: true,
      databaseTime: rows[0].now,
      latencyMs: Math.round(performance.now() - started),
    })
  } catch (error) {
    console.error("Database health check failed", error)
    return Response.json({ ok: false }, { status: 503 })
  }
}
