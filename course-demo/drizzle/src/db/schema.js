import {
  pgTable,
  serial,
  varchar,
  timestamp,
  text,
  integer,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

export const usersTable = pgTable("users", {
  id: serial().primaryKey(),
  avatar: varchar({ length: 100 }),
  name: varchar({ length: 100 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  createdAt: timestamp("created_at").defaultNow(),
});
export const notesTable = pgTable("notes", {
  id: serial().primaryKey(),
  title: varchar({ length: 100 }).notNull(),
  content: text(),
  userID: integer("user_id").references(() => usersTable.id, {
    onDelete: "cascade",
  }),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const usersRelations = relations(usersTable, ({ many }) => {
  return { notes: many(notesTable) };
});

export const notesRelations = relations(notesTable, ({ one }) => {
  return {
    author: one(usersTable, {
      fields: [notesTable.userID], // 外鍵
      references: [usersTable.id], // 參照的主鍵
    }),
  };
});
