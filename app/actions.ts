"use server";

import { auth } from "@/auth";
import { db } from "@/db";
import { journalEntries, type JournalEntry } from "@/db/schema";
import { and, desc, eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

function todayDateString(): string {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function normalizeDate(input?: string | null): string {
  if (input && DATE_RE.test(input)) return input;
  return todayDateString();
}

export async function getEntryForDate(date?: string): Promise<JournalEntry | null> {
  const session = await auth();
  if (!session?.user?.id) return null;
  const target = normalizeDate(date);
  const rows = await db
    .select()
    .from(journalEntries)
    .where(
      and(
        eq(journalEntries.userId, session.user.id),
        eq(journalEntries.entryDate, target),
      ),
    )
    .limit(1);
  return rows[0] ?? null;
}

export async function listEntryDates(): Promise<string[]> {
  const session = await auth();
  if (!session?.user?.id) return [];
  const rows = await db
    .select({ entryDate: journalEntries.entryDate })
    .from(journalEntries)
    .where(eq(journalEntries.userId, session.user.id))
    .orderBy(desc(journalEntries.entryDate));
  return rows.map((r) => r.entryDate);
}

export type SaveEntryInput = {
  date?: string;
  theme?: string;
  mood?: string | null;
  gratitude?: string | null;
  intention?: string | null;
  reflection?: string | null;
  evening?: string | null;
};

export async function saveEntry(
  input: SaveEntryInput,
): Promise<{ ok: boolean; error?: string }> {
  const session = await auth();
  if (!session?.user?.id) return { ok: false, error: "not_authenticated" };
  const target = normalizeDate(input.date);

  await db
    .insert(journalEntries)
    .values({
      userId: session.user.id,
      entryDate: target,
      theme: input.theme ?? "cat",
      mood: input.mood ?? null,
      gratitude: input.gratitude ?? null,
      intention: input.intention ?? null,
      reflection: input.reflection ?? null,
      evening: input.evening ?? null,
    })
    .onConflictDoUpdate({
      target: [journalEntries.userId, journalEntries.entryDate],
      set: {
        theme: input.theme ?? "cat",
        mood: input.mood ?? null,
        gratitude: input.gratitude ?? null,
        intention: input.intention ?? null,
        reflection: input.reflection ?? null,
        evening: input.evening ?? null,
        updatedAt: new Date(),
      },
    });

  revalidatePath("/");
  return { ok: true };
}
