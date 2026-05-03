"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { THEMES, type ThemeKey } from "./journal-data";
import { journalCSS } from "./journal-styles";
import { saveEntry } from "./actions";

type EntryShape = {
  theme: ThemeKey;
  mood: string;
  gratitude: string;
  intention: string;
  reflection: string;
  evening: string;
};

const DEFAULT: EntryShape = {
  theme: "cuban",
  mood: "",
  gratitude: "",
  intention: "",
  reflection: "",
  evening: "",
};

function formatDateLabel(iso: string): string {
  const [y, m, d] = iso.split("-").map((s) => parseInt(s, 10));
  const dt = new Date(y, m - 1, d);
  const months = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December",
  ];
  const day = dt.getDate();
  const suffix =
    day % 10 === 1 && day !== 11 ? "st" :
    day % 10 === 2 && day !== 12 ? "nd" :
    day % 10 === 3 && day !== 13 ? "rd" : "th";
  return `the ${day}${suffix} of ${months[dt.getMonth()]}, ${dt.getFullYear()}`;
}

function formatDateShort(iso: string): string {
  const [y, m, d] = iso.split("-").map((s) => parseInt(s, 10));
  const dt = new Date(y, m - 1, d);
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  return `${months[dt.getMonth()]} ${dt.getDate()}, ${dt.getFullYear()}`;
}

function dailyIndex(arr: unknown[], iso: string): number {
  const [y, m, d] = iso.split("-").map((s) => parseInt(s, 10));
  const dt = new Date(y, m - 1, d);
  const dayOfYear = Math.floor(
    (dt.getTime() - new Date(dt.getFullYear(), 0, 0).getTime()) / 86400000,
  );
  return (dayOfYear * 7) % arr.length;
}

function isThemeKey(k: string | null | undefined): k is ThemeKey {
  return k === "cuban" || k === "flamenco" || k === "idayvuelta" || k === "jazz" || k === "rock" || k === "hiphop" || k === "lounge";
}

export default function JournalClient(props: {
  initial?: Partial<EntryShape> | null;
  date: string;
  isToday: boolean;
  pastDates: string[];
  userEmail?: string | null;
  signOutAction: () => Promise<void>;
}) {
  const initialTheme: ThemeKey = isThemeKey(props.initial?.theme)
    ? (props.initial!.theme as ThemeKey)
    : "cuban";

  const [entry, setEntry] = useState<EntryShape>({
    ...DEFAULT,
    ...(props.initial ?? {}),
    theme: initialTheme,
  });
  const [quoteOffset, setQuoteOffset] = useState(0);
  const [saveState, setSaveState] = useState<"idle" | "saving" | "saved" | "error">("idle");
  const [historyOpen, setHistoryOpen] = useState(false);
  const [audioOpen, setAudioOpen] = useState(false);
  const saveTimer = useRef<number | null>(null);

  // Stop audio whenever the theme changes (the iframe key forces a re-mount on
  // theme change, but closing the popover is a clearer signal)
  useEffect(() => { setAudioOpen(false); }, [entry.theme]);

  const t = THEMES[entry.theme];
  const dateText = useMemo(() => formatDateLabel(props.date), [props.date]);
  const quote = useMemo(() => {
    const idx = quoteOffset % t.quotes.length;
    return t.quotes[idx];
  }, [t.quotes, quoteOffset]);
  const reflectionPrompt = useMemo(() => {
    const idx = dailyIndex(t.reflections, props.date);
    return t.reflections[idx];
  }, [t.reflections, props.date]);

  useEffect(() => {
    const r = document.documentElement.style;
    const p = t.palette;
    r.setProperty("--bg", p.bg);
    r.setProperty("--bg-deep", p.bgDeep);
    r.setProperty("--ink", p.ink);
    r.setProperty("--ink-soft", p.inkSoft);
    r.setProperty("--ink-faint", p.inkFaint);
    r.setProperty("--accent", p.accent);
    r.setProperty("--accent-soft", p.accentSoft);
    r.setProperty("--accent-deep", p.accentDeep);
    r.setProperty("--card", p.card);
    r.setProperty("--glow-a", p.glowA);
    r.setProperty("--glow-b", p.glowB);
  }, [t]);

  function scheduleSave(next: EntryShape) {
    if (saveTimer.current) window.clearTimeout(saveTimer.current);
    saveTimer.current = window.setTimeout(async () => {
      setSaveState("saving");
      const res = await saveEntry({
        date: props.date,
        theme: next.theme,
        mood: next.mood || null,
        gratitude: next.gratitude || null,
        intention: next.intention || null,
        reflection: next.reflection || null,
        evening: next.evening || null,
      });
      setSaveState(res.ok ? "saved" : "error");
      if (res.ok) window.setTimeout(() => setSaveState("idle"), 1200);
    }, 800);
  }

  function patch<K extends keyof EntryShape>(key: K, value: EntryShape[K]) {
    setEntry((cur) => {
      const next = { ...cur, [key]: value };
      scheduleSave(next);
      return next;
    });
  }

  const todayIso = useMemo(() => {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  }, []);

  const entryDateSet = useMemo(() => {
    const s = new Set(props.pastDates);
    s.add(props.date);
    return s;
  }, [props.date, props.pastDates]);

  // Calendar view-month, expressed as "YYYY-MM"
  const [viewMonth, setViewMonth] = useState<string>(() => props.date.slice(0, 7));

  function shiftMonth(delta: number) {
    const [yStr, mStr] = viewMonth.split("-");
    const y = parseInt(yStr, 10);
    const m = parseInt(mStr, 10) - 1; // 0-indexed
    const next = new Date(y, m + delta, 1);
    const ny = next.getFullYear();
    const nm = String(next.getMonth() + 1).padStart(2, "0");
    setViewMonth(`${ny}-${nm}`);
  }

  type Cell = { iso: string | null; day: number; otherMonth: boolean };
  const calendarGrid = useMemo<Cell[]>(() => {
    const [yStr, mStr] = viewMonth.split("-");
    const year = parseInt(yStr, 10);
    const month = parseInt(mStr, 10) - 1;
    const firstWeekday = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const prevMonthLastDay = new Date(year, month, 0).getDate();
    const cells: Cell[] = [];
    // Previous month tail (greyed)
    for (let i = firstWeekday - 1; i >= 0; i--) {
      cells.push({ iso: null, day: prevMonthLastDay - i, otherMonth: true });
    }
    // Current month
    for (let d = 1; d <= daysInMonth; d++) {
      const iso = `${yStr}-${mStr}-${String(d).padStart(2, "0")}`;
      cells.push({ iso, day: d, otherMonth: false });
    }
    // Pad to 42 cells (6 weeks)
    let next = 1;
    while (cells.length < 42) {
      cells.push({ iso: null, day: next++, otherMonth: true });
    }
    return cells;
  }, [viewMonth]);

  const monthLabel = useMemo(() => {
    const [yStr, mStr] = viewMonth.split("-");
    const months = [
      "January","February","March","April","May","June",
      "July","August","September","October","November","December",
    ];
    return `${months[parseInt(mStr, 10) - 1]} ${yStr}`;
  }, [viewMonth]);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: journalCSS }} />
      <div className={`theme-${entry.theme}`} style={{ minHeight: "100vh" }}>
        {/* Theme switcher */}
        <div className="theme-switcher">
          <label htmlFor="theme-select">a journal for:</label>
          <select
            id="theme-select"
            value={entry.theme}
            onChange={(e) => patch("theme", e.target.value as ThemeKey)}
          >
            <option value="cuban">🎺 cuban</option>
            <option value="flamenco">🌹 flamenco</option>
            <option value="idayvuelta">🌊 ida y vuelta</option>
            <option value="jazz">🎷 jazz</option>
            <option value="rock">🎸 rock</option>
            <option value="hiphop">🎤 hiphop</option>
            <option value="lounge">🎹 lounge</option>
          </select>
        </div>

        {/* History toggle */}
        <button
          type="button"
          aria-label="open history"
          onClick={() => setHistoryOpen((v) => !v)}
          style={{
            position: "fixed", top: 20, left: 200, zIndex: 10,
            background: "var(--card)", border: "1.5px solid var(--bg-deep)",
            borderRadius: 30, padding: "0.5rem 0.9rem",
            boxShadow: "0 4px 14px rgba(42,31,26,.08)",
            fontFamily: "Caveat, cursive", fontSize: "1.05rem",
            color: "var(--accent)", cursor: "pointer",
          }}
        >
          ☰ history
        </button>


        {/* Account / sign-out */}
        <div
          style={{
            position: "fixed", top: 20, right: 110, zIndex: 10,
            display: "flex", alignItems: "center", gap: "0.6rem",
            background: "var(--card)", border: "1.5px solid var(--bg-deep)",
            borderRadius: 30, padding: "0.5rem 0.8rem",
            boxShadow: "0 4px 14px rgba(42,31,26,.08)",
            fontFamily: "Caveat, cursive", fontSize: "1rem",
            color: "var(--ink-soft)",
          }}
        >
          {props.userEmail ? <span>{props.userEmail}</span> : null}
          <form action={props.signOutAction}>
            <button
              type="submit"
              style={{
                background: "transparent", border: "none", cursor: "pointer",
                color: "var(--accent)", fontFamily: "Caveat, cursive",
                fontSize: "1rem", padding: 0,
              }}
            >
              sign out
            </button>
          </form>
        </div>

        {/* Save indicator */}
        <div
          aria-live="polite"
          style={{
            position: "fixed", bottom: 20, right: 20, zIndex: 10,
            fontFamily: "Caveat, cursive", fontSize: "1rem",
            color: saveState === "error" ? "#b22" : "var(--ink-faint)",
            opacity: saveState === "idle" ? 0 : 0.85,
            transition: "opacity 0.3s ease",
          }}
        >
          {saveState === "saving" && "saving…"}
          {saveState === "saved" && "saved ✓"}
          {saveState === "error" && "save failed — retry"}
        </div>

        {/* History drawer */}
        {historyOpen && (
          <>
            <div
              onClick={() => setHistoryOpen(false)}
              style={{
                position: "fixed", inset: 0, background: "rgba(42,31,26,0.25)",
                zIndex: 20, animation: "fadeUp 0.3s ease",
              }}
            />
            <aside
              style={{
                position: "fixed", top: 0, left: 0, bottom: 0, width: 320,
                background: "var(--card)",
                borderRight: "1.5px solid var(--bg-deep)",
                boxShadow: "4px 0 20px rgba(42,31,26,.15)",
                zIndex: 21, padding: "2rem 1.5rem",
                fontFamily: "Fraunces, serif", color: "var(--ink)",
                overflowY: "auto",
              }}
            >
              <div
                style={{
                  display: "flex", justifyContent: "space-between",
                  alignItems: "baseline", marginBottom: "1.5rem",
                }}
              >
                <h2
                  style={{
                    fontFamily: "Caveat, cursive", fontSize: "1.6rem",
                    color: "var(--accent)", fontWeight: 600,
                  }}
                >
                  past entries
                </h2>
                <button
                  type="button"
                  onClick={() => setHistoryOpen(false)}
                  style={{
                    background: "transparent", border: "none",
                    color: "var(--ink-faint)", fontSize: "1.5rem",
                    cursor: "pointer", padding: 0, lineHeight: 1,
                  }}
                  aria-label="close history"
                >
                  ×
                </button>
              </div>

              {/* Month nav */}
              <div
                style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  marginBottom: "0.75rem", gap: "0.5rem",
                }}
              >
                <button
                  type="button"
                  onClick={() => shiftMonth(-1)}
                  style={{
                    background: "transparent", border: "none", cursor: "pointer",
                    color: "var(--ink-soft)", fontSize: "1.4rem", padding: "0.2rem 0.5rem",
                    lineHeight: 1,
                  }}
                  aria-label="previous month"
                >
                  ‹
                </button>
                <div
                  style={{
                    fontFamily: "Caveat, cursive", fontSize: "1.25rem",
                    color: "var(--ink)", fontWeight: 500,
                  }}
                >
                  {monthLabel}
                </div>
                <button
                  type="button"
                  onClick={() => shiftMonth(1)}
                  style={{
                    background: "transparent", border: "none", cursor: "pointer",
                    color: "var(--ink-soft)", fontSize: "1.4rem", padding: "0.2rem 0.5rem",
                    lineHeight: 1,
                  }}
                  aria-label="next month"
                >
                  ›
                </button>
              </div>

              {/* Weekday header */}
              <div
                style={{
                  display: "grid", gridTemplateColumns: "repeat(7, 1fr)",
                  gap: "0.25rem", marginBottom: "0.4rem",
                }}
              >
                {["S","M","T","W","T","F","S"].map((d, i) => (
                  <div
                    key={i}
                    style={{
                      textAlign: "center", fontFamily: "Caveat, cursive",
                      fontSize: "0.9rem", color: "var(--ink-faint)",
                    }}
                  >
                    {d}
                  </div>
                ))}
              </div>

              {/* Calendar grid */}
              <div
                style={{
                  display: "grid", gridTemplateColumns: "repeat(7, 1fr)",
                  gap: "0.25rem",
                }}
              >
                {calendarGrid.map((cell, i) => {
                  const isToday = cell.iso === todayIso;
                  const isActive = cell.iso === props.date;
                  const hasEntry = cell.iso != null && entryDateSet.has(cell.iso);
                  const isFuture = cell.iso != null && cell.iso > todayIso;

                  const baseStyle: React.CSSProperties = {
                    aspectRatio: "1 / 1",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 8,
                    fontFamily: "Fraunces, serif",
                    fontSize: "0.95rem",
                    textDecoration: "none",
                    position: "relative",
                  };

                  if (cell.otherMonth || cell.iso == null) {
                    return (
                      <div
                        key={i}
                        style={{
                          ...baseStyle,
                          color: "var(--ink-faint)",
                          opacity: 0.35,
                          cursor: "default",
                        }}
                      >
                        {cell.day}
                      </div>
                    );
                  }

                  if (isFuture) {
                    return (
                      <div
                        key={i}
                        style={{
                          ...baseStyle,
                          color: "var(--ink-faint)",
                          opacity: 0.5,
                          cursor: "not-allowed",
                        }}
                        title="future date"
                      >
                        {cell.day}
                      </div>
                    );
                  }

                  return (
                    <a
                      key={i}
                      href={`/?date=${cell.iso}`}
                      style={{
                        ...baseStyle,
                        background: isActive ? "var(--accent)" : "transparent",
                        color: isActive
                          ? "var(--card)"
                          : (hasEntry ? "var(--ink)" : "var(--ink-soft)"),
                        fontWeight: isActive || hasEntry ? 500 : 300,
                        border: isToday && !isActive
                          ? "1.5px solid var(--accent)"
                          : "1.5px solid transparent",
                      }}
                    >
                      <span>{cell.day}</span>
                      {hasEntry && !isActive && (
                        <span
                          style={{
                            width: 4, height: 4, borderRadius: "50%",
                            background: "var(--accent)",
                            position: "absolute", bottom: 4,
                          }}
                        />
                      )}
                    </a>
                  );
                })}
              </div>

              {/* Today shortcut */}
              <a
                href="/"
                style={{
                  display: "block",
                  marginTop: "1.25rem",
                  padding: "0.55rem 1rem",
                  borderRadius: 8,
                  textAlign: "center",
                  background: props.isToday ? "var(--accent)" : "transparent",
                  color: props.isToday ? "var(--card)" : "var(--accent)",
                  textDecoration: "none",
                  fontFamily: "Caveat, cursive",
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  border: "1.5px solid var(--accent)",
                }}
              >
                today's entry
              </a>

              {entryDateSet.size === 1 && props.pastDates.length === 0 && (
                <p
                  style={{
                    color: "var(--ink-faint)", fontStyle: "italic",
                    fontSize: "0.9rem", marginTop: "1rem", textAlign: "center",
                  }}
                >
                  Save your first entry to see it light up the calendar.
                </p>
              )}
            </aside>
          </>
        )}

        <div className="container">
          <header className="masthead">
            <div className="eyebrow">{t.eyebrow}</div>
            <h1>
              {t.title} <span className="mark">{t.mark}</span>
              <br />
              <span>{t.titleSub}</span>
            </h1>
            <div className="date-line">
              {dateText}
              {!props.isToday && (
                <span style={{ marginLeft: "0.6rem", opacity: 0.7 }}>
                  · <a href="/" style={{ color: "var(--accent)" }}>back to today</a>
                </span>
              )}
            </div>

            {/* Inline audio (theme track) — sits in the negative space between date and quote */}
            <div style={{ marginTop: "1.6rem", textAlign: "center" }}>
              <button
                type="button"
                aria-label={audioOpen ? "stop track" : "play track"}
                onClick={() => setAudioOpen((v) => !v)}
                style={{
                  background: audioOpen ? "var(--accent)" : "var(--card)",
                  color: audioOpen ? "var(--card)" : "var(--accent)",
                  border: "1.5px solid var(--bg-deep)",
                  borderRadius: 30,
                  padding: "0.55rem 1.2rem",
                  boxShadow: "0 4px 14px rgba(42,31,26,.10)",
                  fontFamily: "Caveat, cursive",
                  fontSize: "1.15rem",
                  cursor: "pointer",
                }}
              >
                {audioOpen ? "■ stop track" : `♪ play ${t.audio.title}`}
              </button>
              {audioOpen && (
                <div
                  style={{
                    marginTop: "1rem",
                    background: "var(--card)",
                    border: "1.5px solid var(--bg-deep)",
                    borderRadius: 12,
                    padding: "0.75rem",
                    boxShadow: "0 8px 22px rgba(42,31,26,.15)",
                    width: 320,
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  <iframe
                    key={`yt-${entry.theme}`}
                    width="296"
                    height="167"
                    src={`https://www.youtube-nocookie.com/embed/${t.audio.videoId}?autoplay=1&rel=0&modestbranding=1`}
                    title={`${t.audio.title} — ${t.audio.artist}`}
                    style={{ border: "none", borderRadius: 8, display: "block", margin: "0 auto" }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                  <div
                    style={{
                      marginTop: "0.5rem",
                      fontFamily: "Caveat, cursive",
                      fontSize: "0.95rem",
                      color: "var(--ink-soft)",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <span>
                      <strong style={{ color: "var(--ink)" }}>{t.audio.title}</strong>
                      {" — "}
                      {t.audio.artist}
                    </span>
                    <a
                      href={`https://www.youtube.com/watch?v=${t.audio.videoId}`}
                      target="_blank"
                      rel="noopener"
                      style={{ color: "var(--accent)", textDecoration: "none" }}
                    >
                      open ↗
                    </a>
                  </div>
                </div>
              )}
            </div>
          </header>

          <section className="quote-section">
            <div className="quote-card" data-mark={t.mark}>
              <blockquote>{quote.text}</blockquote>
              {quote.author && <div className="attribution">{quote.author}</div>}
            </div>
            <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
              <button
                type="button"
                className="new-quote-btn"
                onClick={() => setQuoteOffset((q) => q + 1)}
              >
                {t.buttonText}
              </button>
            </div>
          </section>

          <section className="section">
            <div className="section-label">
              <span className="mark-num">{t.mark}</span>
              <span>{t.moodHeading}</span>
            </div>
            <div className="mood-grid">
              {t.moods.map((m) => (
                <div
                  key={m.label}
                  role="button"
                  tabIndex={0}
                  className={`mood-option${entry.mood === m.label ? " selected" : ""}`}
                  onClick={() => patch("mood", entry.mood === m.label ? "" : m.label)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      patch("mood", entry.mood === m.label ? "" : m.label);
                    }
                  }}
                >
                  <span className="mood-glyph">{m.glyph}</span>
                  <span className="mood-label">{m.label}</span>
                </div>
              ))}
            </div>
          </section>

          <div className="divider">
            <div className="line" />
            <span className="ornament">{t.divMark}</span>
            <div className="line" />
          </div>

          <section className="section">
            <div className="section-label">
              <span className="mark-num">{t.mark}</span>
              <span>{t.gratitudeHeading}</span>
            </div>
            <div className="prompt-text">{t.gratitudePrompt}</div>
            <textarea
              rows={3}
              placeholder={t.gratitudePlaceholder}
              value={entry.gratitude}
              onChange={(e) => patch("gratitude", e.target.value)}
            />
          </section>

          <section className="section">
            <div className="section-label">
              <span className="mark-num">{t.mark}</span>
              <span>{t.intentionHeading}</span>
            </div>
            <div className="prompt-text">{t.intentionPrompt}</div>
            <textarea
              rows={2}
              placeholder={t.intentionPlaceholder}
              value={entry.intention}
              onChange={(e) => patch("intention", e.target.value)}
            />
          </section>

          <section className="breath-section">
            <div className="breath-title">{t.breathTitle}</div>
            <div className="breath-mascot">
              <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
                <g className="body">
                  <circle cx="100" cy="70" r="48" fill="var(--accent)" opacity="0.12"/>
                  <circle cx="100" cy="70" r="34" fill="var(--accent)" opacity="0.35"/>
                  <circle cx="100" cy="70" r="22" fill="var(--accent)"/>
                </g>
              </svg>
            </div>
            <div className="breath-label">{t.breathLabel}</div>
          </section>

          <section className="section">
            <div className="section-label">
              <span className="mark-num">{t.mark}</span>
              <span>{t.reflectHeading}</span>
            </div>
            <div className="prompt-text">{reflectionPrompt}</div>
            <textarea
              className="freewrite"
              rows={8}
              placeholder={t.reflectPlaceholder}
              value={entry.reflection}
              onChange={(e) => patch("reflection", e.target.value)}
            />
          </section>

          <section className="section">
            <div className="section-label">
              <span className="mark-num">{t.mark}</span>
              <span>{t.eveningHeading}</span>
            </div>
            <div className="prompt-text">{t.eveningPrompt}</div>
            <textarea
              rows={2}
              placeholder={t.eveningPlaceholder}
              value={entry.evening}
              onChange={(e) => patch("evening", e.target.value)}
            />
          </section>

          <div className="close">
            <div className="divider">
              <div className="line" />
              <span className="ornament">{t.divMarkEnd}</span>
              <div className="line" />
            </div>
            <div
              className="colophon"
              dangerouslySetInnerHTML={{ __html: t.colophon }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
