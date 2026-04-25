import { createForm, registerDBAdapter, createDrizzleAdapter } from "@formsdk/sdk";
import { drizzle } from "drizzle-orm/postgres-js";
import { formSubmissions } from "./db/schema";

function database_url(): string {
  return process.env.DATABASE_URL!;
}

const db = drizzle(database_url());

registerDBAdapter("drizzle", createDrizzleAdapter({ db, table: formSubmissions }));

export const contactForm = createForm({
  fields: {
    name: (v) => typeof v === "string" && v.length >= 2,
    email: (v) => typeof v === "string" && v.includes("@"),
    message: (v) => typeof v === "string" && v.length >= 10,
  },
  db: "drizzle",
  onSubmit: async (data) => {
    console.log("Contact form submitted:", data);
  },
});