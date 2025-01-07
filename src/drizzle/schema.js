import { pgTable, serial, text, timestamp, uuid } from 'drizzle-orm/pg-core';

export const reports = pgTable('reports', {
  id: serial('id').primaryKey(),
  fullName: text('full_name').notNull(),
  dateOfBirth: timestamp('date_of_birth').notNull(),
  reportData: text('report_data').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
  userId: uuid('user_id').notNull(),
});