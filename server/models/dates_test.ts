import { date, pgTable, serial, timestamp } from 'drizzle-orm/pg-core'

export const dateTestModel = pgTable('date_test', {
  id: serial('id').primaryKey().notNull(),
  timestampTest: timestamp('timestamp_test', { mode: 'string' }),
  dateTest: date('date_test', { mode: 'string' }),
})
