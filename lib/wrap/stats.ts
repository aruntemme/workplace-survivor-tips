import {
  WrapStats,
  WrapPersonaType,
  BaseStatModifiers,
  PersonaSpecificStats,
  ChartTopperStats,
  OneHitWonderStats,
  BSideStats,
  CoverArtistStats,
  LeakedAlbumStats,
  UndergroundHitStats,
} from "./types";
import { getPersonaByScore } from "./personas";

// Generate a random number within a range, influenced by modifiers
function generateStat(
  base: number,
  variance: number,
  modifier: number = 0
): number {
  const adjusted = base + modifier * 10;
  const min = Math.max(0, adjusted - variance);
  const max = adjusted + variance;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Get boss fights based on persona
function getBossesDefeated(persona: WrapPersonaType): string[] {
  const commonBosses = ["Q1 Review", "The Reorg", "Back-to-Back Monday"];

  const personaBosses: Record<WrapPersonaType, string[]> = {
    "chart-topper": ["Imposter Syndrome", "Scope Creep", "The Big Presentation"],
    "one-hit-wonder": ["Momentum Loss", "The Comparison Game", "Q3 Slump"],
    "b-side": ["Visibility Challenge", "The All-Hands", "Performance Review"],
    "cover-artist": ["Burnout Boss", "Scope Creep", "The Guilt Trip"],
    "leaked-album": ["The Exit Interview", "Counter Offer", "Two Weeks Notice"],
    "underground-hit": ["Skill Gap", "The Waiting Game", "Interview Anxiety"],
  };

  const shuffled = [...commonBosses, ...personaBosses[persona]].sort(
    () => Math.random() - 0.5
  );
  return shuffled.slice(0, 4);
}

// Get top phrases based on score
function getTopPhrases(
  score: number
): Array<{ phrase: string; count: number }> {
  const positivePhrase = [
    { phrase: "Happy to help!", count: generateStat(120, 40) },
    { phrase: "Great idea!", count: generateStat(89, 30) },
    { phrase: "Let's make it happen", count: generateStat(67, 25) },
  ];

  const neutralPhrases = [
    { phrase: "Sounds good", count: generateStat(200, 80) },
    { phrase: "I'll circle back", count: generateStat(150, 50) },
    { phrase: "Sorry, I was on mute", count: generateStat(120, 40) },
  ];

  const negativePhrases = [
    { phrase: "Sure, I can take that on", count: generateStat(180, 60) },
    { phrase: "Per my last email", count: generateStat(90, 30) },
    { phrase: "Let me check my bandwidth", count: generateStat(140, 45) },
  ];

  if (score >= 6) return positivePhrase;
  if (score >= -6) return neutralPhrases;
  return negativePhrases;
}

// Generate persona-specific stats
function generatePersonaStats(persona: WrapPersonaType): PersonaSpecificStats {
  switch (persona) {
    case "chart-topper":
      return {
        type: "chart-topper",
        projectsShipped: generateStat(8, 3),
        recognitionReceived: generateStat(12, 4),
        positiveReviews: generateStat(4, 1),
      } as ChartTopperStats;

    case "one-hit-wonder":
      return {
        type: "one-hit-wonder",
        peakQuarter: ["Q1", "Q2"][Math.floor(Math.random() * 2)],
        weeksCoastingSince: generateStat(24, 8),
        glorySustained: ["3 weeks", "2 months", "Still riding it"][
          Math.floor(Math.random() * 3)
        ],
      } as OneHitWonderStats;

    case "b-side":
      return {
        type: "b-side",
        timesWentUnnoticed: generateStat(47, 15),
        meetingsSkippedSuccessfully: generateStat(23, 8),
        visibilityScore: ["Stealth Mode", "Background NPC", "Hidden Track"][
          Math.floor(Math.random() * 3)
        ],
      } as BSideStats;

    case "cover-artist":
      return {
        type: "cover-artist",
        otherPeoplesTasksCompleted: generateStat(67, 20),
        creditGiven: generateStat(45, 15),
        creditReceived: generateStat(12, 5),
      } as CoverArtistStats;

    case "leaked-album":
      return {
        type: "leaked-album",
        jobApplicationsSent: generateStat(34, 12),
        interviewPrepHours: generateStat(28, 10),
        resignationLetterDrafts: generateStat(7, 3),
      } as LeakedAlbumStats;

    case "underground-hit":
      return {
        type: "underground-hit",
        linkedInLurkSessions: generateStat(89, 25),
        salaryResearchQueries: generateStat(45, 15),
        secretSkillsBuilt: generateStat(5, 2),
      } as UndergroundHitStats;
  }
}

export function generateWrapStats(
  totalScore: number,
  modifiers: Partial<BaseStatModifiers> = {}
): WrapStats {
  const persona = getPersonaByScore(totalScore);

  // Calculate base stats with modifiers
  const meetingMod = modifiers.meetingPain || 0;
  const emailMod = modifiers.emailChaos || 0;
  const managerMod = modifiers.managerDrama || 0;
  const survivalMod = modifiers.survivalMode || 0;

  // Invert for positive personas (lower "pain" stats)
  const painMultiplier = totalScore >= 0 ? -1 : 1;

  const stats: WrapStats = {
    // Manager stat - inversely related to score
    managerPlayedYou: generateStat(
      180 - totalScore * 8,
      40,
      managerMod * painMultiplier
    ),

    // Meeting hours - higher pain = more hours
    meetingHours: generateStat(
      600 + meetingMod * 50,
      100,
      meetingMod * painMultiplier
    ),

    meetingsThatCouldBeEmails: generateStat(
      200 + meetingMod * 30,
      50,
      meetingMod
    ),

    // Email skip rate - cynics skip more
    emailSkipRate: Math.min(
      98,
      Math.max(40, generateStat(75 - totalScore * 2, 15, emailMod))
    ),

    // Compensation reality
    inflationRate: 3.4,
    raiseRate: totalScore >= 6 ? generateStat(4, 1) : generateStat(2, 0.5),

    // Top phrases based on personality
    topPhrases: getTopPhrases(totalScore),

    // HP - higher score = more HP remaining
    hpRemaining: Math.min(
      10,
      Math.max(1, Math.floor((totalScore + 18) / 4) + 1)
    ),

    // Boss fights
    bossesDefeated: getBossesDefeated(persona),

    // Core results
    persona,
    totalScore,

    // Persona-specific stats
    personaStats: generatePersonaStats(persona),
  };

  return stats;
}

// Accumulate modifiers from quiz answers
export function accumulateModifiers(
  current: Partial<BaseStatModifiers>,
  newModifiers?: Partial<BaseStatModifiers>
): Partial<BaseStatModifiers> {
  if (!newModifiers) return current;

  return {
    meetingPain: (current.meetingPain || 0) + (newModifiers.meetingPain || 0),
    emailChaos: (current.emailChaos || 0) + (newModifiers.emailChaos || 0),
    managerDrama:
      (current.managerDrama || 0) + (newModifiers.managerDrama || 0),
    survivalMode:
      (current.survivalMode || 0) + (newModifiers.survivalMode || 0),
  };
}
