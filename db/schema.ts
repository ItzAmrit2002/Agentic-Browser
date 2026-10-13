import { index, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core"

export const workflows = pgTable(
  "workflows",
  {
    id: uuid().primaryKey().defaultRandom(),
    // Clerk organization that owns the workflow.
    organizationId: text("organization_id").notNull(),
    name: text().notNull(),
    createdAt: timestamp("created_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .notNull()
      .defaultNow()
      .$onUpdate(() => new Date()),
  },
  (table) => [index("workflows_organization_id_idx").on(table.organizationId)]
)

export type Workflow = typeof workflows.$inferSelect
export type NewWorkflow = typeof workflows.$inferInsert
