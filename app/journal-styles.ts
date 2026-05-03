// Journal styles, ported from frances.piglandia.com static page.
// Embedded as a string and injected via <style dangerouslySetInnerHTML> in the page.
export const journalCSS = String.raw`
  :root {
    --bg: #f7ecd9;
    --bg-deep: #ecddc0;
    --ink: #2a1f1a;
    --ink-soft: #5a4a3e;
    --ink-faint: #9a8b78;
    --accent: #c87339;
    --accent-soft: #e8a274;
    --accent-deep: #a55a2a;
    --card: #fdf6e8;
    --glow-a: rgba(232, 162, 116, 0.22);
    --glow-b: rgba(122, 138, 102, 0.18);
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }

  html, body {
    background: var(--bg);
    color: var(--ink);
    font-family: 'Fraunces', serif;
    font-weight: 300;
    line-height: 1.6;
    min-height: 100vh;
    overflow-x: hidden;
    transition: background 0.6s ease, color 0.6s ease;
  }

  body {
    background:
      radial-gradient(ellipse at 15% 10%, var(--glow-a) 0%, transparent 45%),
      radial-gradient(ellipse at 85% 85%, var(--glow-b) 0%, transparent 50%),
      var(--bg);
    background-attachment: fixed;
    padding: 4vh 5vw 8vh;
    position: relative;
    transition: background 0.6s ease;
  }

  /* Theme switcher */
  .theme-switcher {
    position: fixed;
    top: 20px;
    left: 20px;
    z-index: 10;
    background: var(--card);
    border: 1.5px solid var(--bg-deep);
    border-radius: 30px;
    padding: 0.5rem 0.8rem;
    box-shadow: 0 4px 14px rgba(42, 31, 26, 0.08);
    display: flex;
    align-items: center;
    gap: 0.6rem;
  }

  .theme-switcher label {
    font-family: 'Caveat', cursive;
    font-size: 1.05rem;
    color: var(--ink-soft);
  }

  .theme-switcher select {
    font-family: 'Caveat', cursive;
    font-size: 1.1rem;
    color: var(--accent);
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 0.2rem 0.5rem;
    font-weight: 600;
  }

  /* Corner mascot */
  .corner-mascot {
    position: fixed;
    top: 20px;
    right: 20px;
    width: 70px;
    height: 70px;
    z-index: 3;
    opacity: 0.9;
    transition: transform 0.4s ease;
  }
  .corner-mascot:hover { transform: rotate(-5deg) scale(1.1); }

  .container {
    max-width: 780px;
    margin: 0 auto;
    position: relative;
    z-index: 2;
    padding-top: 40px;
  }

  /* Masthead */
  .masthead {
    text-align: center;
    padding: 3vh 0 5vh;
    position: relative;
    animation: fadeUp 1.2s cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  .eyebrow {
    font-family: 'Caveat', cursive;
    font-size: 1.3rem;
    color: var(--accent);
    font-weight: 500;
    margin-bottom: 0.5rem;
    transform: rotate(-1.5deg);
    display: inline-block;
  }

  h1 {
    font-family: 'Fraunces', serif;
    font-weight: 300;
    font-size: clamp(3rem, 8vw, 5rem);
    line-height: 0.95;
    letter-spacing: -0.02em;
    font-style: italic;
    color: var(--ink);
    transition: color 0.6s ease;
  }

  h1 .mark {
    color: var(--accent);
    font-style: normal;
    display: inline-block;
  }

  .date-line {
    font-family: 'Caveat', cursive;
    font-size: 1.4rem;
    margin-top: 1.5rem;
    color: var(--ink-soft);
    font-weight: 400;
    transform: rotate(-0.5deg);
    display: inline-block;
  }

  .header-svg {
    display: block;
    margin: 0 auto 1rem;
    width: 80px;
    height: 60px;
  }

  /* Quote section */
  .quote-section {
    padding: 5vh 0 4vh;
    text-align: center;
    animation: fadeUp 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) 0.2s backwards;
  }

  .quote-card {
    background: var(--card);
    border: 1px solid var(--bg-deep);
    border-radius: 8px;
    padding: 3.5rem 2.5rem 2.5rem;
    position: relative;
    box-shadow: 0 8px 24px rgba(42, 31, 26, 0.06), 0 2px 4px rgba(42, 31, 26, 0.04);
    transition: background 0.6s ease, border-color 0.6s ease;
  }

  .quote-card::before {
    content: attr(data-mark);
    position: absolute;
    top: -18px;
    left: 50%;
    transform: translateX(-50%) rotate(-10deg);
    background: var(--bg);
    padding: 0 0.8rem;
    font-size: 1.5rem;
    transition: background 0.6s ease;
  }

  blockquote {
    font-family: 'Fraunces', serif;
    font-style: italic;
    font-size: clamp(1.4rem, 3vw, 1.9rem);
    line-height: 1.4;
    font-weight: 300;
    color: var(--ink);
    max-width: 560px;
    margin: 0 auto;
    white-space: pre-line;
  }

  .attribution {
    margin-top: 1.8rem;
    font-family: 'Caveat', cursive;
    font-size: 1.2rem;
    color: var(--accent);
    font-weight: 500;
  }

  .attribution::before { content: '— '; }

  /* Divider */
  .divider {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 4vh 0 3vh;
    gap: 1rem;
    animation: fadeUp 1s cubic-bezier(0.2, 0.8, 0.2, 1) 0.4s backwards;
  }

  .divider .line {
    flex: 1;
    max-width: 100px;
    height: 1px;
    background: var(--ink-faint);
    opacity: 0.5;
  }

  .divider .ornament { font-size: 1.3rem; }

  /* Sections */
  .section {
    padding: 2.5vh 0;
    animation: fadeUp 1s cubic-bezier(0.2, 0.8, 0.2, 1) 0.5s backwards;
  }

  .section-label {
    font-family: 'Caveat', cursive;
    font-size: 1.5rem;
    color: var(--ink-soft);
    margin-bottom: 1rem;
    font-weight: 500;
    display: flex;
    align-items: baseline;
    gap: 0.8rem;
  }

  .section-label .mark-num {
    color: var(--accent);
    font-size: 1.2rem;
  }

  /* Mood grid */
  .mood-grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 0.6rem;
    margin-top: 1rem;
  }

  .mood-option {
    background: var(--card);
    border: 1.5px solid var(--bg-deep);
    border-radius: 14px;
    padding: 1.2rem 0.4rem 0.9rem;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
    text-align: center;
  }

  .mood-option:hover {
    border-color: var(--accent);
    transform: translateY(-3px);
    box-shadow: 0 6px 14px rgba(42, 31, 26, 0.12);
  }

  .mood-option.selected {
    background: var(--accent);
    border-color: var(--accent);
    transform: translateY(-3px);
  }

  .mood-option.selected .mood-label { color: var(--card); }

  .mood-glyph { font-size: 1.8rem; display: block; margin-bottom: 0.3rem; }

  .mood-label {
    font-family: 'Caveat', cursive;
    font-size: 0.95rem;
    color: var(--ink-soft);
    font-weight: 500;
  }

  /* Prompt blocks */
  .prompt-text {
    font-family: 'Fraunces', serif;
    font-style: italic;
    font-size: 1.2rem;
    color: var(--ink);
    margin-bottom: 0.8rem;
    line-height: 1.4;
  }

  textarea {
    width: 100%;
    background: var(--card);
    border: 1.5px solid var(--bg-deep);
    border-radius: 10px;
    padding: 1rem 1.2rem;
    font-family: 'Caveat', cursive;
    font-size: 1.3rem;
    color: var(--ink);
    resize: none;
    outline: none;
    transition: all 0.3s ease;
    min-height: 3rem;
    line-height: 1.5;
  }

  textarea:focus {
    border-color: var(--accent);
    box-shadow: 0 0 0 3px var(--glow-a);
  }

  textarea::placeholder {
    color: var(--ink-faint);
    font-style: italic;
    opacity: 0.7;
  }

  .freewrite {
    min-height: 220px;
    font-size: 1.25rem;
    line-height: 1.9;
    background-image:
      repeating-linear-gradient(
        transparent,
        transparent 1.85rem,
        var(--glow-a) 1.85rem,
        var(--glow-a) calc(1.85rem + 1px)
      );
    background-position: 0 2.6rem;
  }

  /* Breathing section */
  .breath-section {
    margin: 5vh 0;
    text-align: center;
    padding: 4vh 2rem;
    background: var(--card);
    border-radius: 20px;
    border: 1.5px solid var(--bg-deep);
    position: relative;
    overflow: hidden;
    animation: fadeUp 1s cubic-bezier(0.2, 0.8, 0.2, 1) 0.6s backwards;
    transition: background 0.6s ease, border-color 0.6s ease;
  }

  .breath-title {
    font-family: 'Caveat', cursive;
    font-size: 1.7rem;
    margin-bottom: 2rem;
    color: var(--ink-soft);
    font-weight: 500;
  }

  .breath-mascot {
    width: 200px;
    height: 140px;
    margin: 0 auto;
    position: relative;
  }

  .breath-mascot svg { width: 100%; height: 100%; }

  .breath-mascot .body {
    transform-origin: center bottom;
    animation: breath 5s ease-in-out infinite;
  }

  @keyframes breath {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.08); }
  }

  .breath-label {
    font-family: 'Caveat', cursive;
    font-size: 1.3rem;
    margin-top: 1rem;
    color: var(--accent);
  }

  .breath-waves {
    position: absolute;
    top: 50%;
    right: 15%;
    font-family: 'Caveat', cursive;
    color: var(--accent-soft);
    font-size: 1.3rem;
    animation: wave-float 2.5s ease-in-out infinite;
    opacity: 0;
  }

  @keyframes wave-float {
    0% { opacity: 0; transform: translateX(0) translateY(0); }
    50% { opacity: 0.7; transform: translateX(15px) translateY(-8px); }
    100% { opacity: 0; transform: translateX(30px) translateY(-16px); }
  }

  /* Close */
  .close {
    text-align: center;
    margin-top: 5vh;
    padding-top: 4vh;
    animation: fadeUp 1s cubic-bezier(0.2, 0.8, 0.2, 1) 0.7s backwards;
  }

  .close .divider { margin-bottom: 2.5rem; }

  .new-quote-btn {
    background: var(--accent);
    border: none;
    padding: 1rem 2.5rem;
    font-family: 'Caveat', cursive;
    font-size: 1.2rem;
    color: var(--card);
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 500;
    border-radius: 30px;
    box-shadow: 0 4px 12px rgba(42, 31, 26, 0.2);
  }

  .new-quote-btn:hover {
    background: var(--ink);
    transform: translateY(-2px);
  }

  .colophon {
    margin-top: 2.5rem;
    font-family: 'Caveat', cursive;
    font-size: 1.1rem;
    color: var(--ink-faint);
    line-height: 1.5;
  }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  /* Fish theme: bubbles rising */
  body.theme-fish::after {
    content: '';
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 1;
    background-image:
      radial-gradient(circle at 10% 90%, rgba(255,255,255,0.4) 2px, transparent 3px),
      radial-gradient(circle at 30% 70%, rgba(255,255,255,0.3) 1.5px, transparent 2.5px),
      radial-gradient(circle at 70% 85%, rgba(255,255,255,0.4) 2.5px, transparent 3.5px),
      radial-gradient(circle at 85% 60%, rgba(255,255,255,0.3) 1.5px, transparent 2.5px);
    animation: bubbles-rise 8s linear infinite;
  }

  @keyframes bubbles-rise {
    from { background-position: 0 0, 0 0, 0 0, 0 0; }
    to { background-position: 0 -200px, 0 -200px, 0 -200px, 0 -200px; }
  }

  @media (max-width: 600px) {
    .mood-grid { grid-template-columns: repeat(3, 1fr); }
    body { padding: 3vh 4vw 6vh; }
    .quote-card { padding: 3rem 1.5rem 2rem; }
    .corner-mascot { width: 50px; height: 50px; top: 10px; right: 10px; }
    .theme-switcher { top: 10px; left: 10px; padding: 0.4rem 0.6rem; }
    .theme-switcher label { font-size: 0.95rem; }
    .theme-switcher select { font-size: 1rem; }
    .container { padding-top: 60px; }
  }
`;
