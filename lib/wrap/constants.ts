// Work Wrap Constants

export const WRAP_YEAR = new Date().getFullYear();
export const WRAP_TITLE = `Work Wrap ${WRAP_YEAR}`;
export const WRAP_TAGLINE = "Your Year in Corporate, Quantified";
export const WRAP_URL = "workwrap.lol"; // For share cards

// Slide timing
export const DEFAULT_SLIDE_DURATION = 4000; // 4 seconds
export const STAT_REVEAL_DURATION = 3000;
export const PERSONA_REVEAL_DURATION = 5000;

// Animation durations
export const NUMBER_COUNT_DURATION = 2; // seconds
export const SLIDE_TRANSITION_DURATION = 0.5; // seconds

// Quiz settings
export const QUIZ_QUESTION_COUNT = 6;

// Score ranges for personas (based on 6 questions, range roughly -18 to +18)
export const PERSONA_SCORE_RANGES = {
  "chart-topper": { min: 12, max: 18 },      // Very positive
  "one-hit-wonder": { min: 6, max: 11 },     // Had a moment
  "b-side": { min: 0, max: 5 },              // Flying under radar
  "cover-artist": { min: -6, max: -1 },      // Doing others' work
  "leaked-album": { min: -12, max: -7 },     // Planning exit
  "underground-hit": { min: -18, max: -13 }, // Deep in stealth mode
} as const;
