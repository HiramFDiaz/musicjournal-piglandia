import { redirect } from "next/navigation";
import { auth, signOut } from "@/auth";
import { getEntryForDate, listEntryDates } from "./actions";
import JournalClient from "./journal-client";
import type { ThemeKey } from "./journal-data";

const VALID_THEMES = new Set(["cuban", "jazz", "rock", "hiphop", "lounge"]);
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

function todayDateString(): string {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

export default async function HomePage(props: {
  searchParams: Promise<{ date?: string }>;
}) {
  const session = await auth();
  if (!session?.user?.id) {
    redirect("/sign-in");
  }

  const sp = await props.searchParams;
  const today = todayDateString();
  const date = sp.date && DATE_RE.test(sp.date) ? sp.date : today;

  const [entry, pastDates] = await Promise.all([
    getEntryForDate(date),
    listEntryDates(),
  ]);

  const initial = entry
    ? {
        theme: (VALID_THEMES.has(entry.theme) ? entry.theme : "cuban") as ThemeKey,
        mood: entry.mood ?? "",
        gratitude: entry.gratitude ?? "",
        intention: entry.intention ?? "",
        reflection: entry.reflection ?? "",
        evening: entry.evening ?? "",
      }
    : null;

  async function signOutAction() {
    "use server";
    await signOut({ redirectTo: "/sign-in" });
  }

  return (
    <JournalClient
      key={date}
      initial={initial}
      date={date}
      isToday={date === today}
      pastDates={pastDates}
      userEmail={session.user.email ?? null}
      signOutAction={signOutAction}
    />
  );
}
