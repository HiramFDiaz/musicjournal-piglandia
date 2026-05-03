// Themes and SVG mascots for the music journal — five musical voices.

export type ThemeKey = "cuban" | "jazz" | "rock" | "hiphop" | "lounge";

export type ThemeMood = { glyph: string; label: string };
export type ThemeQuote = { text: string; author: string };

export type ThemeDef = {
  palette: {
    bg: string; bgDeep: string; ink: string; inkSoft: string;
    inkFaint: string; accent: string; accentSoft: string; accentDeep: string;
    card: string; glowA: string; glowB: string;
  };
  mark: string; markLarge: string; divMark: string; divMarkEnd: string;
  eyebrow: string; title: string; titleSub: string;
  moodHeading: string;
  gratitudeHeading: string; gratitudePrompt: string; gratitudePlaceholder: string;
  intentionHeading: string; intentionPrompt: string; intentionPlaceholder: string;
  breathTitle: string; breathLabel: string;
  reflectHeading: string; reflectPlaceholder: string;
  eveningHeading: string; eveningPrompt: string; eveningPlaceholder: string;
  buttonText: string; colophon: string;
  breathWave1: string; breathWave2: string;
  moods: ThemeMood[];
  quotes: ThemeQuote[];
  reflections: string[];
};

export type SvgSet = { header: string; corner: string; breath: string };

export const THEMES: Record<ThemeKey, ThemeDef> = {
  cuban: {
    palette: {
      bg: '#f5e6d3', bgDeep: '#e8cfa9', ink: '#2a1410', inkSoft: '#5e2f1f',
      inkFaint: '#b8967a', accent: '#c4302b', accentSoft: '#e8a8a0',
      accentDeep: '#8b1f1a', card: '#fdf3e6',
      glowA: 'rgba(196, 48, 43, 0.20)', glowB: 'rgba(228, 168, 78, 0.22)'
    },
    mark: '🎺',
    markLarge: '🎺',
    divMark: '♫',
    divMarkEnd: '♫ 🎺 ♫',
    eyebrow: 'Vol. I · a journal for the patio at sundown',
    title: 'El son es lo más sublime',
    titleSub: 'para el alma divertir',
    moodHeading: 'how the son of you feels today',
    gratitudeHeading: 'three small sweetnesses',
    gratitudePrompt: 'Little things worth tipping a glass to today—',
    gratitudePlaceholder: 'strong coffee, a clean breeze, a song on the radio...',
    intentionHeading: "today's bolero intention",
    intentionPrompt: "The line I want to play through today—",
    intentionPlaceholder: 'one word, one wish, one slow turn...',
    breathTitle: '~ a pause on the patio ~',
    breathLabel: 'breathe in ~ exhale on the clave',
    reflectHeading: 'sit with it and reflect',
    reflectPlaceholder: 'write freely, the way a bolero unfolds — slow, then sweet...',
    eveningHeading: 'closing the night',
    eveningPrompt: "One thing I'm setting on the windowsill before sleep—",
    eveningPlaceholder: 'a worry, a small grumble, a half-finished thought...',
    buttonText: 'pluck another verse of wisdom',
    colophon: 'written in rust ink on paper warmed by the sun<br><em>be like the son — patient, syncopated, full of feeling</em>',
    breathWave1: '♫ ♫',
    breathWave2: 'tum~',
    moods: [
      {glyph:'☀️', label:'patio-sunlit'}, {glyph:'🎺', label:'horn-bright'},
      {glyph:'🌿', label:'mojito-mind'}, {glyph:'💃', label:'rumba-ready'},
      {glyph:'🌅', label:'malecón-still'}, {glyph:'🪘', label:'on the clave'}
    ],
    quotes: [
      { text: "El son es lo más sublime para el alma divertir.", author: "Ignacio Piñeiro" },
      { text: "Yo soy un hombre sincero, de donde crece la palma.", author: "José Martí" },
      { text: "La música es el lenguaje del alma.", author: "Pablo Neruda" },
      { text: "A donde el corazón se inclina, el pie camina.", author: "Cuban refrán" },
      { text: "El que quiere celeste, que le cueste.", author: "Cuban refrán" },
      { text: "Lo cortés no quita lo valiente.", author: "Cuban refrán" },
      { text: "Without music, life would be a mistake.", author: "Friedrich Nietzsche" },
      { text: "Music is the silence between the notes.", author: "Claude Debussy" },
      { text: "Music expresses that which cannot be said and on which it is impossible to be silent.", author: "Victor Hugo" },
      { text: "Cultivate your hunger before you idealize it.", author: "Ernest Hemingway" },
      { text: "There is no greater agony than bearing an untold story inside you.", author: "Maya Angelou" },
      { text: "The present moment is the only moment available to us.", author: "Thich Nhat Hanh" },
      { text: "Wherever you are, be there totally.", author: "Eckhart Tolle" },
      { text: "Forever is composed of nows.", author: "Emily Dickinson" },
      { text: "What you seek is seeking you.", author: "Rumi" },
      { text: "The quieter you become, the more you can hear.", author: "Ram Dass" },
      { text: "You are the sky. Everything else is just the weather.", author: "Pema Chödrön" },
      { text: "Smile, breathe, and go slowly.", author: "Thich Nhat Hanh" },
      { text: "Joy is the simplest form of gratitude.", author: "Karl Barth" },
      { text: "Gratitude turns what we have into enough.", author: "Aesop" },
      { text: "Be here now.", author: "Ram Dass" },
      { text: "Feelings come and go like clouds in a windy sky.", author: "Thich Nhat Hanh" }
    ],
    reflections: [
      "What rhythm have you been resisting that wants to carry you instead?",
      "If today were a bolero, what slow turn would the music ask you to make?",
      "Where in your day are you rushing past the patio when you could sit?",
      "What sweetness have you been declining out of habit, not preference?",
      "A son musician knows when to lay back. Where can you lay back today?",
      "What note did yesterday play that you didn't quite finish hearing?",
      "What's the verse you keep almost writing? Try one line of it now."
    ]
  },

  jazz: {
    palette: {
      bg: '#f0e9dc', bgDeep: '#d8d0bc', ink: '#0e1a2a', inkSoft: '#2c3e54',
      inkFaint: '#8a8c8e', accent: '#1f4068', accentSoft: '#5a7da8',
      accentDeep: '#0a1f3a', card: '#fbf6ea',
      glowA: 'rgba(31, 64, 104, 0.18)', glowB: 'rgba(212, 160, 23, 0.18)'
    },
    mark: '🎷',
    markLarge: '🎷',
    divMark: '♭',
    divMarkEnd: '♭ 🎷 ♭',
    eyebrow: 'Vol. I · a journal for the smoky club at midnight',
    title: 'Slow Blues,',
    titleSub: 'Long Improvisation',
    moodHeading: 'how the jazz of you feels today',
    gratitudeHeading: 'three small grace notes',
    gratitudePrompt: 'Little things worth letting linger today—',
    gratitudePlaceholder: 'a record on the turntable, ice in a glass, late light...',
    intentionHeading: "today's improvising intention",
    intentionPrompt: "The changes I want to play through today—",
    intentionPlaceholder: 'one word, one wish, one held note...',
    breathTitle: '~ a pause between sets ~',
    breathLabel: 'breathe in ~ exhale on the blue note',
    reflectHeading: 'sit with it and reflect',
    reflectPlaceholder: 'write freely, the way a tenor sax works through a ballad...',
    eveningHeading: 'last call',
    eveningPrompt: "One thing I'm leaving in the empty club before sleep—",
    eveningPlaceholder: 'a worry, a half-resolved chord, a thought that wants to stretch...',
    buttonText: 'spin the record once more',
    colophon: 'written in indigo on smoke-warmed paper<br><em>be like the jazz — listening, responsive, unafraid of the silence</em>',
    breathWave1: '♪ ♭',
    breathWave2: 'mmm~',
    moods: [
      {glyph:'🎷', label:'horn-soft'}, {glyph:'🌃', label:'after-hours'},
      {glyph:'🥃', label:'glass-in-hand'}, {glyph:'🎹', label:'quiet-keys'},
      {glyph:'🎙️', label:'low-mic'}, {glyph:'♭', label:'in the blue note'}
    ],
    quotes: [
      { text: "There are no wrong notes in jazz: only notes in the wrong places.", author: "Miles Davis" },
      { text: "Don't play what's there, play what's not there.", author: "Miles Davis" },
      { text: "If you have to ask what jazz is, you'll never know.", author: "Louis Armstrong" },
      { text: "Jazz is freedom. You think about that.", author: "Thelonious Monk" },
      { text: "Sometimes you have to play a long time to be able to play like yourself.", author: "Miles Davis" },
      { text: "I'm always making a comeback, but nobody ever tells me where I've been.", author: "Billie Holiday" },
      { text: "Music produces a kind of pleasure which human nature cannot do without.", author: "Confucius" },
      { text: "Jazz isn't dead. It just smells funny.", author: "Frank Zappa" },
      { text: "Without music, life would be a mistake.", author: "Friedrich Nietzsche" },
      { text: "Music expresses that which cannot be said and on which it is impossible to be silent.", author: "Victor Hugo" },
      { text: "Music is the silence between the notes.", author: "Claude Debussy" },
      { text: "Every moment is a fresh beginning.", author: "T.S. Eliot" },
      { text: "The present moment is the only moment available to us.", author: "Thich Nhat Hanh" },
      { text: "Wherever you are, be there totally.", author: "Eckhart Tolle" },
      { text: "Be here now.", author: "Ram Dass" },
      { text: "The quieter you become, the more you can hear.", author: "Ram Dass" },
      { text: "Forever is composed of nows.", author: "Emily Dickinson" },
      { text: "Joy is the simplest form of gratitude.", author: "Karl Barth" },
      { text: "Gratitude turns what we have into enough.", author: "Aesop" },
      { text: "You are the sky. Everything else is just the weather.", author: "Pema Chödrön" }
    ],
    reflections: [
      "What chord change has been hanging unresolved in your week?",
      "Jazz lives in what's not played. What silence have you been filling that wants to stay empty?",
      "Where could you let a phrase trail off instead of finishing it?",
      "If your day were a solo, would you be listening to the rhythm section, or playing over them?",
      "What blue note in your life keeps surfacing? What does it want?",
      "When did you last let something improvise, instead of arranging it?",
      "What's the standard you've been afraid to play your own way?"
    ]
  },

  rock: {
    palette: {
      bg: '#e8e4de', bgDeep: '#cfc8be', ink: '#1a1212', inkSoft: '#3a2c2c',
      inkFaint: '#6a6a6a', accent: '#d63342', accentSoft: '#f08c93',
      accentDeep: '#7a1820', card: '#f5f1eb',
      glowA: 'rgba(214, 51, 66, 0.18)', glowB: 'rgba(40, 40, 40, 0.16)'
    },
    mark: '🎸',
    markLarge: '🎸',
    divMark: '⚡',
    divMarkEnd: '⚡ 🎸 ⚡',
    eyebrow: 'Vol. I · a journal for the back of the amp',
    title: 'Loud Heart,',
    titleSub: 'Steady Stomp',
    moodHeading: 'how the rock of you feels today',
    gratitudeHeading: 'three things worth turning up for',
    gratitudePrompt: 'Little things worth cranking the volume on today—',
    gratitudePlaceholder: 'a riff in your head, a clean t-shirt, a road that opens up...',
    intentionHeading: "today's amp-up intention",
    intentionPrompt: "The chord I want to keep ringing today—",
    intentionPlaceholder: 'one word, one wish, one stomp...',
    breathTitle: '~ a pause between songs ~',
    breathLabel: 'breathe in ~ exhale on the down-stroke',
    reflectHeading: 'plug in and reflect',
    reflectPlaceholder: 'write freely, full distortion, let it bleed...',
    eveningHeading: 'after the encore',
    eveningPrompt: "One thing I'm leaving on the stage before sleep—",
    eveningPlaceholder: 'a worry, a grudge, a half-finished riff of the day...',
    buttonText: 'rip another verse of wisdom',
    colophon: 'written in red ink on beer-mat paper<br><em>be like the rock — earnest, loud when it matters, true to the chord</em>',
    breathWave1: '⚡ ⚡',
    breathWave2: 'rrrr~',
    moods: [
      {glyph:'🎸', label:'cranked'}, {glyph:'🤘', label:'lit-up'},
      {glyph:'🛣️', label:'open-road'}, {glyph:'⚡', label:'electric'},
      {glyph:'🌧️', label:'rain-soaked'}, {glyph:'🥁', label:'on the downbeat'}
    ],
    quotes: [
      { text: "Rock and roll is the hamburger that ate the world.", author: "Peter York" },
      { text: "I'd rather be hated for who I am, than loved for who I am not.", author: "Kurt Cobain" },
      { text: "Music can change the world because it can change people.", author: "Bono" },
      { text: "Without music, life would be a mistake.", author: "Friedrich Nietzsche" },
      { text: "It's better to burn out than to fade away.", author: "Neil Young" },
      { text: "I always feel that great romantic music is unrequited.", author: "Tom Waits" },
      { text: "I think music in itself is healing.", author: "Billy Joel" },
      { text: "We've got to get ourselves back to the garden.", author: "Joni Mitchell" },
      { text: "Music is the strongest form of magic.", author: "Marilyn Manson" },
      { text: "Rock and roll is a nuclear blast of reality.", author: "Bruce Springsteen" },
      { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
      { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
      { text: "What hurts you, blesses you. Darkness is your candle.", author: "Rumi" },
      { text: "The present moment is the only moment available to us.", author: "Thich Nhat Hanh" },
      { text: "Wherever you are, be there totally.", author: "Eckhart Tolle" },
      { text: "Every moment is a fresh beginning.", author: "T.S. Eliot" },
      { text: "Forever is composed of nows.", author: "Emily Dickinson" },
      { text: "You are the sky. Everything else is just the weather.", author: "Pema Chödrön" },
      { text: "Joy is the simplest form of gratitude.", author: "Karl Barth" },
      { text: "Be here now.", author: "Ram Dass" }
    ],
    reflections: [
      "What riff is stuck in your head, and what is it actually trying to tell you?",
      "Where in your life are you playing too quiet — not in volume, but in honesty?",
      "What chord have you been afraid to strike because it sounds too much like you?",
      "A great rock song earns its silence. What pause would land harder than another verse?",
      "Who are you still trying to play to that you should be playing past?",
      "What's the encore you keep refusing to give yourself?",
      "If the amp went quiet for a day, what would you actually hear?"
    ]
  },

  hiphop: {
    palette: {
      bg: '#f4f1e6', bgDeep: '#dcd6bf', ink: '#0f0f0f', inkSoft: '#3a3a3a',
      inkFaint: '#6a6a6a', accent: '#d4a017', accentSoft: '#f0c860',
      accentDeep: '#8a6710', card: '#fbf7e8',
      glowA: 'rgba(212, 160, 23, 0.20)', glowB: 'rgba(20, 20, 20, 0.16)'
    },
    mark: '🎤',
    markLarge: '🎤',
    divMark: '✦',
    divMarkEnd: '✦ 🎤 ✦',
    eyebrow: 'Vol. I · a journal for the cipher and the city block',
    title: 'Lay it Down,',
    titleSub: 'Hold the Beat',
    moodHeading: 'how the hiphop of you feels today',
    gratitudeHeading: 'three shouts to the universe',
    gratitudePrompt: 'Little things worth a verse today—',
    gratitudePlaceholder: 'a phone call, a clean fit, a beat that knocked...',
    intentionHeading: "today's verse intention",
    intentionPrompt: "The bar I want to write today—",
    intentionPlaceholder: 'one word, one wish, one line that lands...',
    breathTitle: '~ a pause between verses ~',
    breathLabel: 'breathe in ~ exhale on the boom-bap',
    reflectHeading: 'lay it down and reflect',
    reflectPlaceholder: 'write freely, free-verse, no edits, ride the beat...',
    eveningHeading: 'fade out',
    eveningPrompt: "One thing I'm leaving in the booth before sleep—",
    eveningPlaceholder: 'a worry, a grudge, a half-written hook of the day...',
    buttonText: 'drop another bar of wisdom',
    colophon: 'written in gold on cream paper<br><em>be like the verse — honest, rhythmic, with a hook the world needs</em>',
    breathWave1: '✦ ✦',
    breathWave2: 'boom~',
    moods: [
      {glyph:'🎤', label:'mic-on'}, {glyph:'🎧', label:'in-the-pocket'},
      {glyph:'🥇', label:'unstoppable'}, {glyph:'🌃', label:'late-block'},
      {glyph:'🎶', label:'cipher-mind'}, {glyph:'✊', label:'full-chest'}
    ],
    quotes: [
      { text: "Reality is wrong. Dreams are for real.", author: "Tupac Shakur" },
      { text: "I'd rather die enormous than live dormant.", author: "Jay-Z" },
      { text: "It's not where you're from, it's where you're at.", author: "Eric B. & Rakim" },
      { text: "If you don't stand for something, you'll fall for anything.", author: "Common (and others)" },
      { text: "Hip hop is supposed to uplift and create, to educate people on a larger level.", author: "KRS-One" },
      { text: "Real eyes realize real lies.", author: "Tupac Shakur" },
      { text: "The thing that hurt me the most was that my father didn't try.", author: "Tupac Shakur" },
      { text: "Don't let the bad days run your life.", author: "Lauryn Hill" },
      { text: "How you gon' win when you ain't right within?", author: "Lauryn Hill" },
      { text: "We were given two ears and one mouth, so listen.", author: "Common" },
      { text: "Without music, life would be a mistake.", author: "Friedrich Nietzsche" },
      { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
      { text: "The present moment is the only moment available to us.", author: "Thich Nhat Hanh" },
      { text: "Wherever you are, be there totally.", author: "Eckhart Tolle" },
      { text: "Every moment is a fresh beginning.", author: "T.S. Eliot" },
      { text: "Forever is composed of nows.", author: "Emily Dickinson" },
      { text: "You are the sky. Everything else is just the weather.", author: "Pema Chödrön" },
      { text: "Be here now.", author: "Ram Dass" },
      { text: "The quieter you become, the more you can hear.", author: "Ram Dass" },
      { text: "Joy is the simplest form of gratitude.", author: "Karl Barth" }
    ],
    reflections: [
      "What hook have you been writing in your head but not putting on paper?",
      "Where are you biting someone else's flow when your own is what's needed?",
      "What's the bar that made you stop today — yours or someone else's? Why?",
      "Who have you been performing for, and would you still do it if no one was listening?",
      "What truth would your verse tell if you didn't edit it first?",
      "Where have you been holding back on a beat that wants you to ride it?",
      "What sample from your past keeps looping? What does it want you to hear differently?"
    ]
  },

  lounge: {
    palette: {
      bg: '#f7ebe5', bgDeep: '#ead4c8', ink: '#2a1820', inkSoft: '#5a3a48',
      inkFaint: '#a8868c', accent: '#d8859a', accentSoft: '#f0bfcd',
      accentDeep: '#95506a', card: '#fdf3ee',
      glowA: 'rgba(216, 133, 154, 0.22)', glowB: 'rgba(186, 154, 132, 0.20)'
    },
    mark: '🎹',
    markLarge: '🍸',
    divMark: '☽',
    divMarkEnd: '☽ 🎹 ☽',
    eyebrow: 'Vol. I · a journal for the hour after midnight',
    title: 'Soft Lights,',
    titleSub: 'Slow Waltz',
    moodHeading: 'how the lounge of you feels today',
    gratitudeHeading: 'three small refinements',
    gratitudePrompt: 'Little things worth a slow sip today—',
    gratitudePlaceholder: 'a low lamp, a cocktail glass, a string arrangement just below speaking volume...',
    intentionHeading: "today's velvet intention",
    intentionPrompt: "The mood I want to set for myself today—",
    intentionPlaceholder: 'one word, one wish, one held tone...',
    breathTitle: '~ a pause between songs ~',
    breathLabel: 'breathe in ~ exhale on the strings',
    reflectHeading: 'settle in and reflect',
    reflectPlaceholder: 'write freely, the way a bossa nova circles its theme — gently, repeatedly...',
    eveningHeading: 'last song of the night',
    eveningPrompt: "One thing I'm letting the piano resolve before sleep—",
    eveningPlaceholder: 'a worry, a small tension, a chord that wants to land...',
    buttonText: 'cue another bit of wisdom',
    colophon: 'written in rose ink on champagne paper<br><em>be like the lounge — unhurried, considered, kind to the listener</em>',
    breathWave1: '☽ ☽',
    breathWave2: 'mmm~',
    moods: [
      {glyph:'🍸', label:'velvet-glass'}, {glyph:'🎹', label:'slow-piano'},
      {glyph:'☽', label:'midnight-soft'}, {glyph:'🪞', label:'mirror-quiet'},
      {glyph:'🎶', label:'background-string'}, {glyph:'💫', label:'after-hours'}
    ],
    quotes: [
      { text: "The night is the hardest time to be alive and 4am knows all my secrets.", author: "Poppy Z. Brite" },
      { text: "Music is the divine way to tell beautiful, poetic things to the heart.", author: "Pablo Casals" },
      { text: "I have measured out my life with coffee spoons.", author: "T.S. Eliot" },
      { text: "Even after all this time, the sun never says to the earth, 'You owe me.'", author: "Hafiz" },
      { text: "Silence is sometimes the best answer.", author: "Dalai Lama" },
      { text: "What you seek is seeking you.", author: "Rumi" },
      { text: "Without music, life would be a mistake.", author: "Friedrich Nietzsche" },
      { text: "Music expresses that which cannot be said and on which it is impossible to be silent.", author: "Victor Hugo" },
      { text: "Music is the silence between the notes.", author: "Claude Debussy" },
      { text: "The best way out is always through.", author: "Robert Frost" },
      { text: "The present moment is the only moment available to us.", author: "Thich Nhat Hanh" },
      { text: "Wherever you are, be there totally.", author: "Eckhart Tolle" },
      { text: "Smile, breathe, and go slowly.", author: "Thich Nhat Hanh" },
      { text: "The quieter you become, the more you can hear.", author: "Ram Dass" },
      { text: "Be here now.", author: "Ram Dass" },
      { text: "Forever is composed of nows.", author: "Emily Dickinson" },
      { text: "You are the sky. Everything else is just the weather.", author: "Pema Chödrön" },
      { text: "Joy is the simplest form of gratitude.", author: "Karl Barth" },
      { text: "Gratitude turns what we have into enough.", author: "Aesop" },
      { text: "Feelings come and go like clouds in a windy sky.", author: "Thich Nhat Hanh" }
    ],
    reflections: [
      "What in your day has been demanding fortissimo when it would land better at piano?",
      "Where could you slow the tempo by half and still arrive on time?",
      "What detail in your room — light, sound, scent — would lift the hour if you tended to it?",
      "If today were a bossa nova, what gentle refrain would it loop around?",
      "What conversation have you been having loud that wants to be whispered?",
      "Where has elegance been waiting for permission to enter?",
      "What's the piece you'd play if no one else were listening — would they like it more, or would you?"
    ]
  }
};

export const SVGS: Record<ThemeKey, SvgSet> = {
  cuban: {
    header: `<svg viewBox="0 0 80 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="60" cy="30" rx="13" ry="9" fill="var(--accent)"/>
      <ellipse cx="60" cy="30" rx="8" ry="5" fill="var(--bg)" opacity="0.4"/>
      <rect x="10" y="27" width="42" height="6" fill="var(--accent)" rx="2"/>
      <rect x="22" y="22" width="3" height="4" fill="var(--accent-deep)" rx="1"/>
      <rect x="30" y="22" width="3" height="4" fill="var(--accent-deep)" rx="1"/>
      <rect x="38" y="22" width="3" height="4" fill="var(--accent-deep)" rx="1"/>
    </svg>`,
    corner: `<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="68" cy="44" rx="22" ry="14" fill="var(--accent)"/>
      <ellipse cx="68" cy="44" rx="6" ry="4" fill="var(--bg)" opacity="0.4"/>
      <rect x="8" y="40" width="58" height="8" fill="var(--accent)" rx="2"/>
      <rect x="20" y="34" width="3" height="6" fill="var(--accent-deep)" rx="1"/>
      <rect x="30" y="34" width="3" height="6" fill="var(--accent-deep)" rx="1"/>
      <rect x="40" y="34" width="3" height="6" fill="var(--accent-deep)" rx="1"/>
      <rect x="50" y="34" width="3" height="6" fill="var(--accent-deep)" rx="1"/>
      <text x="10" y="22" font-family="Caveat, cursive" font-size="14" fill="var(--ink-faint)" opacity="0.7">tum~</text>
    </svg>`,
    breath: `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
      <g class="body">
        <!-- Cuban tres: round body on right, neck on left -->
        <ellipse cx="148" cy="60" rx="36" ry="26" fill="var(--accent)"/>
        <ellipse cx="148" cy="60" rx="10" ry="7" fill="var(--accent-deep)" opacity="0.55"/>
        <ellipse cx="148" cy="60" rx="6" ry="4" fill="var(--bg)" opacity="0.45"/>
        <rect x="22" y="54" width="100" height="12" fill="var(--accent)" rx="3"/>
        <!-- bridge / saddle -->
        <rect x="135" y="58" width="14" height="3" fill="var(--accent-deep)" rx="0.5"/>
        <!-- frets -->
        <line x1="40" y1="54" x2="40" y2="66" stroke="var(--bg-deep)" stroke-width="0.6"/>
        <line x1="55" y1="54" x2="55" y2="66" stroke="var(--bg-deep)" stroke-width="0.6"/>
        <line x1="70" y1="54" x2="70" y2="66" stroke="var(--bg-deep)" stroke-width="0.6"/>
        <line x1="85" y1="54" x2="85" y2="66" stroke="var(--bg-deep)" stroke-width="0.6"/>
        <line x1="100" y1="54" x2="100" y2="66" stroke="var(--bg-deep)" stroke-width="0.6"/>
        <line x1="115" y1="54" x2="115" y2="66" stroke="var(--bg-deep)" stroke-width="0.6"/>
        <!-- tuning peg holes (4 visible: tres has 6 strings in 3 courses, often 4 visible at headstock) -->
        <ellipse cx="30" cy="50" rx="2.5" ry="2.5" fill="var(--accent-deep)"/>
        <ellipse cx="42" cy="50" rx="2.5" ry="2.5" fill="var(--accent-deep)"/>
        <ellipse cx="54" cy="50" rx="2.5" ry="2.5" fill="var(--accent-deep)"/>
        <ellipse cx="66" cy="50" rx="2.5" ry="2.5" fill="var(--accent-deep)"/>
        <!-- strings: 3 courses across the body + neck -->
        <line x1="22" y1="58" x2="135" y2="59" stroke="var(--bg)" stroke-width="0.5" opacity="0.7"/>
        <line x1="22" y1="60" x2="135" y2="60" stroke="var(--bg)" stroke-width="0.5" opacity="0.7"/>
        <line x1="22" y1="62" x2="135" y2="61" stroke="var(--bg)" stroke-width="0.5" opacity="0.7"/>
        <!-- music notes around the body -->
        <text x="170" y="38" font-family="Caveat, cursive" font-size="22" fill="var(--accent-soft)" opacity="0.85">♫</text>
        <text x="184" y="68" font-family="Caveat, cursive" font-size="18" fill="var(--accent-soft)" opacity="0.65">♪</text>
        <text x="174" y="92" font-family="Caveat, cursive" font-size="18" fill="var(--accent-soft)" opacity="0.55">♪</text>
      </g>
    </svg>`
  },

  jazz: {
    header: `<svg viewBox="0 0 80 60" xmlns="http://www.w3.org/2000/svg">
      <path d="M 30 12 Q 20 14 22 30 Q 24 46 36 50 L 50 50 Q 60 50 62 38 L 64 28" stroke="var(--accent)" stroke-width="6" fill="none" stroke-linecap="round"/>
      <ellipse cx="64" cy="32" rx="6" ry="9" fill="var(--accent)"/>
      <ellipse cx="64" cy="32" rx="3" ry="5" fill="var(--accent-deep)" opacity="0.6"/>
      <circle cx="34" cy="36" r="1" fill="var(--bg)"/>
      <circle cx="34" cy="42" r="1" fill="var(--bg)"/>
      <circle cx="40" cy="46" r="1" fill="var(--bg)"/>
    </svg>`,
    corner: `<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
      <path d="M 30 14 Q 16 16 18 38 Q 20 60 38 64 L 56 64 Q 72 64 74 48 L 76 32" stroke="var(--accent)" stroke-width="8" fill="none" stroke-linecap="round"/>
      <ellipse cx="78" cy="32" rx="9" ry="13" fill="var(--accent)"/>
      <ellipse cx="78" cy="32" rx="5" ry="7" fill="var(--accent-deep)" opacity="0.6"/>
      <circle cx="32" cy="44" r="1.4" fill="var(--bg)"/>
      <circle cx="32" cy="50" r="1.4" fill="var(--bg)"/>
      <circle cx="36" cy="56" r="1.4" fill="var(--bg)"/>
      <circle cx="44" cy="60" r="1.4" fill="var(--bg)"/>
      <text x="10" y="22" font-family="Caveat, cursive" font-size="14" fill="var(--ink-faint)" opacity="0.7">♪~</text>
    </svg>`,
    breath: `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
      <g class="body">
        <path d="M 60 18 Q 38 22 38 56 Q 40 92 70 96 L 110 96 Q 140 96 142 72 L 144 48" stroke="var(--accent)" stroke-width="14" fill="none" stroke-linecap="round"/>
        <ellipse cx="148" cy="48" rx="14" ry="20" fill="var(--accent)"/>
        <ellipse cx="148" cy="48" rx="9" ry="13" fill="var(--accent-deep)" opacity="0.55"/>
        <circle cx="55" cy="58" r="2" fill="var(--bg)"/>
        <circle cx="55" cy="68" r="2" fill="var(--bg)"/>
        <circle cx="60" cy="78" r="2" fill="var(--bg)"/>
        <circle cx="68" cy="86" r="2" fill="var(--bg)"/>
        <circle cx="80" cy="92" r="2" fill="var(--bg)"/>
        <circle cx="95" cy="92" r="2" fill="var(--bg)"/>
        <text x="160" y="38" font-family="Caveat, cursive" font-size="22" fill="var(--accent-soft)" opacity="0.75">♭</text>
        <text x="172" y="68" font-family="Caveat, cursive" font-size="18" fill="var(--accent-soft)" opacity="0.55">♪</text>
      </g>
    </svg>`
  },

  rock: {
    header: `<svg viewBox="0 0 80 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="56" cy="38" rx="14" ry="10" fill="var(--accent)" transform="rotate(-15, 56, 38)"/>
      <rect x="14" y="22" width="32" height="6" fill="var(--ink)" rx="1" transform="rotate(-15, 30, 25)"/>
      <rect x="6" y="14" width="14" height="14" fill="var(--ink)" rx="2"/>
      <line x1="14" y1="24" x2="50" y2="34" stroke="var(--bg)" stroke-width="0.4"/>
      <line x1="13" y1="26" x2="49" y2="36" stroke="var(--bg)" stroke-width="0.4"/>
      <line x1="12" y1="28" x2="48" y2="38" stroke="var(--bg)" stroke-width="0.4"/>
    </svg>`,
    corner: `<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="68" cy="50" rx="20" ry="14" fill="var(--accent)" transform="rotate(-20, 68, 50)"/>
      <rect x="14" y="28" width="48" height="8" fill="var(--ink)" rx="1.5" transform="rotate(-20, 38, 32)"/>
      <rect x="4" y="14" width="18" height="20" fill="var(--ink)" rx="2"/>
      <line x1="14" y1="32" x2="60" y2="48" stroke="var(--bg-deep)" stroke-width="0.5"/>
      <line x1="13" y1="34" x2="59" y2="50" stroke="var(--bg-deep)" stroke-width="0.5"/>
      <line x1="12" y1="36" x2="58" y2="52" stroke="var(--bg-deep)" stroke-width="0.5"/>
      <line x1="11" y1="38" x2="57" y2="54" stroke="var(--bg-deep)" stroke-width="0.5"/>
      <circle cx="62" cy="46" r="2" fill="var(--accent-deep)"/>
      <circle cx="74" cy="50" r="2" fill="var(--accent-deep)"/>
      <text x="6" y="68" font-family="Caveat, cursive" font-size="14" fill="var(--ink-faint)" opacity="0.7">⚡</text>
    </svg>`,
    breath: `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
      <g class="body">
        <ellipse cx="142" cy="62" rx="36" ry="24" fill="var(--accent)" transform="rotate(-15, 142, 62)"/>
        <rect x="22" y="46" width="98" height="14" fill="var(--ink)" rx="2" transform="rotate(-15, 70, 53)"/>
        <rect x="6" y="22" width="28" height="32" fill="var(--ink)" rx="3"/>
        <rect x="9" y="26" width="22" height="3" fill="var(--accent-deep)" rx="1"/>
        <rect x="9" y="32" width="22" height="3" fill="var(--accent-deep)" rx="1"/>
        <rect x="9" y="38" width="22" height="3" fill="var(--accent-deep)" rx="1"/>
        <line x1="22" y1="56" x2="118" y2="80" stroke="var(--bg-deep)" stroke-width="0.5" opacity="0.7"/>
        <line x1="20" y1="58" x2="116" y2="82" stroke="var(--bg-deep)" stroke-width="0.5" opacity="0.7"/>
        <line x1="18" y1="60" x2="114" y2="84" stroke="var(--bg-deep)" stroke-width="0.5" opacity="0.7"/>
        <line x1="16" y1="62" x2="112" y2="86" stroke="var(--bg-deep)" stroke-width="0.5" opacity="0.7"/>
        <line x1="14" y1="64" x2="110" y2="88" stroke="var(--bg-deep)" stroke-width="0.5" opacity="0.7"/>
        <line x1="12" y1="66" x2="108" y2="90" stroke="var(--bg-deep)" stroke-width="0.5" opacity="0.7"/>
        <circle cx="120" cy="62" r="3.5" fill="var(--accent-deep)"/>
        <circle cx="138" cy="68" r="3.5" fill="var(--accent-deep)"/>
        <circle cx="156" cy="74" r="3.5" fill="var(--accent-deep)"/>
        <text x="170" y="36" font-family="Caveat, cursive" font-size="22" fill="var(--accent-soft)" opacity="0.8">⚡</text>
      </g>
    </svg>`
  },

  hiphop: {
    header: `<svg viewBox="0 0 80 60" xmlns="http://www.w3.org/2000/svg">
      <circle cx="40" cy="20" r="11" fill="var(--accent)"/>
      <circle cx="40" cy="20" r="7" fill="var(--accent-deep)" opacity="0.7"/>
      <line x1="38" y1="16" x2="38" y2="24" stroke="var(--bg)" stroke-width="0.6"/>
      <line x1="42" y1="16" x2="42" y2="24" stroke="var(--bg)" stroke-width="0.6"/>
      <rect x="37" y="30" width="6" height="13" fill="var(--ink)" rx="1.5"/>
      <ellipse cx="40" cy="48" rx="12" ry="3" fill="var(--ink)"/>
      <text x="58" y="20" font-family="Caveat, cursive" font-size="14" fill="var(--accent-soft)" opacity="0.7">✦</text>
    </svg>`,
    corner: `<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="22" r="14" fill="var(--accent)"/>
      <circle cx="50" cy="22" r="9" fill="var(--accent-deep)" opacity="0.7"/>
      <line x1="47" y1="16" x2="47" y2="28" stroke="var(--bg)" stroke-width="0.7"/>
      <line x1="50" y1="14" x2="50" y2="30" stroke="var(--bg)" stroke-width="0.7"/>
      <line x1="53" y1="16" x2="53" y2="28" stroke="var(--bg)" stroke-width="0.7"/>
      <rect x="46" y="36" width="8" height="20" fill="var(--ink)" rx="2"/>
      <ellipse cx="50" cy="62" rx="20" ry="4.5" fill="var(--ink)"/>
      <text x="78" y="22" font-family="Caveat, cursive" font-size="14" fill="var(--accent)" opacity="0.7">✦</text>
      <text x="10" y="22" font-family="Caveat, cursive" font-size="14" fill="var(--ink-faint)" opacity="0.7">boom~</text>
    </svg>`,
    breath: `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
      <g class="body">
        <circle cx="100" cy="38" r="26" fill="var(--accent)"/>
        <circle cx="100" cy="38" r="18" fill="var(--accent-deep)" opacity="0.7"/>
        <line x1="93" y1="26" x2="93" y2="50" stroke="var(--bg)" stroke-width="1"/>
        <line x1="100" y1="22" x2="100" y2="54" stroke="var(--bg)" stroke-width="1"/>
        <line x1="107" y1="26" x2="107" y2="50" stroke="var(--bg)" stroke-width="1"/>
        <rect x="94" y="64" width="12" height="32" fill="var(--ink)" rx="3"/>
        <ellipse cx="100" cy="104" rx="34" ry="6" fill="var(--ink)"/>
        <text x="150" y="34" font-family="Caveat, cursive" font-size="26" fill="var(--accent)" opacity="0.85">✦</text>
        <text x="38" y="84" font-family="Caveat, cursive" font-size="22" fill="var(--accent-soft)" opacity="0.7">✦</text>
        <text x="170" y="84" font-family="Caveat, cursive" font-size="20" fill="var(--accent-soft)" opacity="0.6">✦</text>
      </g>
    </svg>`
  },

  lounge: {
    header: `<svg viewBox="0 0 80 60" xmlns="http://www.w3.org/2000/svg">
      <path d="M 22 14 L 58 14 L 40 36 Z" fill="var(--accent)" stroke="var(--accent-deep)" stroke-width="1"/>
      <line x1="40" y1="36" x2="40" y2="50" stroke="var(--accent-deep)" stroke-width="2"/>
      <ellipse cx="40" cy="52" rx="12" ry="2" fill="var(--accent-deep)"/>
      <circle cx="50" cy="20" r="2" fill="var(--accent-deep)"/>
      <ellipse cx="46" cy="22" rx="0.6" ry="3" fill="var(--accent-soft)" transform="rotate(20, 46, 22)"/>
    </svg>`,
    corner: `<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
      <path d="M 25 14 L 75 14 L 50 44 Z" fill="var(--accent)" stroke="var(--accent-deep)" stroke-width="1.5"/>
      <line x1="50" y1="44" x2="50" y2="64" stroke="var(--accent-deep)" stroke-width="2.5"/>
      <ellipse cx="50" cy="66" rx="16" ry="3" fill="var(--accent-deep)"/>
      <circle cx="60" cy="22" r="2.5" fill="var(--accent-deep)"/>
      <ellipse cx="55" cy="24" rx="0.7" ry="4" fill="var(--accent-soft)" transform="rotate(20, 55, 24)"/>
      <text x="10" y="22" font-family="Caveat, cursive" font-size="14" fill="var(--ink-faint)" opacity="0.7">☽</text>
    </svg>`,
    breath: `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
      <g class="body">
        <path d="M 60 18 L 140 18 L 100 70 Z" fill="var(--accent)" stroke="var(--accent-deep)" stroke-width="2"/>
        <line x1="100" y1="70" x2="100" y2="100" stroke="var(--accent-deep)" stroke-width="3"/>
        <ellipse cx="100" cy="104" rx="26" ry="4.5" fill="var(--accent-deep)"/>
        <circle cx="118" cy="32" r="4" fill="var(--accent-deep)"/>
        <ellipse cx="110" cy="36" rx="1.2" ry="6" fill="var(--accent-soft)" transform="rotate(20, 110, 36)"/>
        <text x="40" y="40" font-family="Caveat, cursive" font-size="22" fill="var(--accent-soft)" opacity="0.75">☽</text>
        <text x="160" y="68" font-family="Caveat, cursive" font-size="20" fill="var(--accent-soft)" opacity="0.6">♪</text>
        <text x="34" y="84" font-family="Caveat, cursive" font-size="18" fill="var(--accent-soft)" opacity="0.5">♫</text>
      </g>
    </svg>`
  }
};
