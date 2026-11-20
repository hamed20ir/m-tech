import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const quoteEnquiries = pgTable("quote_enquiries", {
  id: serial("id").primaryKey(),
  referenceCode: text("reference_code").notNull(),
  fullName: text("full_name").notNull(),
  contactMethod: text("contact_method").notNull(), // phone or email provided
  phone: text("phone"),
  email: text("email"),
  postcode: text("postcode").notNull(),
  serviceCategory: text("service_category").notNull(),
  projectDescription: text("project_description").notNull(),
  preferredTiming: text("preferred_timing").notNull(),
  photoFileName: text("photo_file_name"),
  customerType: text("customer_type").default("Homeowner"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export type QuoteEnquiry = typeof quoteEnquiries.$inferSelect;
export type NewQuoteEnquiry = typeof quoteEnquiries.$inferInsert;
