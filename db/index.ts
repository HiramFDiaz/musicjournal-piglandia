import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

// During build, env vars may be unavailable — fall back to a placeholder URL.
// @neondatabase/serverless creates the query function eagerly but only connects
// on first query, so a placeholder is safe at module-load time.
const url =
  process.env.DATABASE_URL ??
  process.env.POSTGRES_URL ??
  "postgresql://placeholder:placeholder@build.invalid/placeholder";

export const db = drizzle(neon(url), { schema });
