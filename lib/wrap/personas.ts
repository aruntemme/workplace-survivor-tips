import { WrapPersona, WrapPersonaType } from "./types";
import { WRAP_YEAR } from "./constants";

export const wrapPersonas: Record<WrapPersonaType, WrapPersona> = {
  "chart-topper": {
    type: "chart-topper",
    title: "The Chart-Topper",
    tagline: "Somehow Still #1",
    emoji: "🏆",
    description: `You actually thrived in ${WRAP_YEAR}. Like, genuinely. Your manager loves you, your projects shipped, and you somehow still have energy left. Are you a unicorn? A plant from HR? Either way, we respect it.`,
    traits: [
      "Gets praised in all-hands meetings",
      "Actually enjoys Monday standups",
      "Has a 'wins' folder on their desktop",
      "Somehow avoids all the drama",
    ],
    shareText: `I'm a Chart-Topper. Yes, I actually like my job. #WorkWrap${WRAP_YEAR}`,
    gradient: "wrap-gradient-green",
  },
  "one-hit-wonder": {
    type: "one-hit-wonder",
    title: "The One-Hit Wonder",
    tagline: "Peaked in Q2",
    emoji: "🌟",
    description: `You had a moment in ${WRAP_YEAR}. That one project? *Chef's kiss.* But since then? You've been running on the fumes of that glory. The good news: everyone still remembers your hit.`,
    traits: [
      "Still mentions 'that Q2 project' in meetings",
      "Coasting on past achievements",
      "Strategic about visibility timing",
      "Perfected the art of looking busy",
    ],
    shareText: `I peaked in Q2. It's been background music since. #WorkWrap${WRAP_YEAR}`,
    gradient: "wrap-gradient-yellow",
  },
  "b-side": {
    type: "b-side",
    title: "The B-Side",
    tagline: "The Hidden Track",
    emoji: "🎵",
    description: `Nobody knows what you do. Including you, sometimes. You fly under the radar so well that you've achieved corporate invisibility. This is either a problem or a superpower.`,
    traits: [
      "Gets confused for other employees",
      "Skips meetings and nobody notices",
      "Does good work that goes unrecognized",
      "Has perfected the background NPC energy",
    ],
    shareText: `Nobody knows what I do. Including me. #WorkWrap${WRAP_YEAR}`,
    gradient: "wrap-gradient-blue",
  },
  "cover-artist": {
    type: "cover-artist",
    title: "The Cover Artist",
    tagline: "Playing Everyone Else's Song",
    emoji: "🎤",
    description: `You spent ${WRAP_YEAR} covering for everyone else. Your manager's work? Done. Your teammate's slack? Picked up. Original content? Who has time for that when you're playing everyone else's greatest hits?`,
    traits: [
      "Does three people's jobs for one salary",
      "CC'd on everything 'just in case'",
      "Calendar is 80% other people's emergencies",
      "Has 'team player' trauma",
    ],
    shareText: `I spent ${WRAP_YEAR} covering for everyone else. #WorkWrap${WRAP_YEAR}`,
    gradient: "wrap-gradient-purple",
  },
  "leaked-album": {
    type: "leaked-album",
    title: "The Leaked Album",
    tagline: "Everyone Knows You're Leaving",
    emoji: "📀",
    description: `Your two weeks notice is basically written. You've checked out so visibly that even the office plant knows you're interviewing. The only question is timing.`,
    traits: [
      "'Open to Work' badge ready to go",
      "LinkedIn optimized and updated weekly",
      "Takes all calls in the parking lot",
      "Already knows their exit interview answers",
    ],
    shareText: `I'm The Leaked Album. My two weeks notice is basically written. #WorkWrap${WRAP_YEAR}`,
    gradient: "wrap-gradient-orange",
  },
  "underground-hit": {
    type: "underground-hit",
    title: "The Underground Hit",
    tagline: "Planning the Breakout",
    emoji: "🎧",
    description: `You're quietly building something. Whether it's skills, connections, or an escape plan - ${WRAP_YEAR + 1} is your year to break out. Currently underground, but the world will know soon.`,
    traits: [
      "Taking online courses on company time",
      "Networking like their life depends on it",
      "Has a 5-year plan that doesn't include this job",
      "Stealth mode: activated",
    ],
    shareText: `Currently underground. ${WRAP_YEAR + 1} is my breakout year. #WorkWrap${WRAP_YEAR}`,
    gradient: "wrap-gradient-pink",
  },
};

export function getPersonaByScore(score: number): WrapPersonaType {
  if (score >= 12) return "chart-topper";
  if (score >= 6) return "one-hit-wonder";
  if (score >= 0) return "b-side";
  if (score >= -6) return "cover-artist";
  if (score >= -12) return "leaked-album";
  return "underground-hit";
}

export function getPersona(type: WrapPersonaType): WrapPersona {
  return wrapPersonas[type];
}
