// Work Wrap Types

export type WrapPersonaType =
  | "chart-topper"
  | "one-hit-wonder"
  | "b-side"
  | "cover-artist"
  | "leaked-album"
  | "underground-hit";

export interface WrapAnswer {
  id: string;
  text: string;
  points: number;
  vibe: string;
  // Additional stat modifiers
  statModifiers?: Partial<BaseStatModifiers>;
}

export interface WrapQuestion {
  id: string;
  text: string;
  answers: WrapAnswer[];
  category: "energy" | "meetings" | "communication" | "manager" | "survival" | "outlook";
}

export interface BaseStatModifiers {
  meetingPain: number;
  emailChaos: number;
  managerDrama: number;
  survivalMode: number;
}

export interface WrapStats {
  // Base stats (calculated from quiz answers)
  managerPlayedYou: number;
  meetingHours: number;
  meetingsThatCouldBeEmails: number;
  emailSkipRate: number;
  inflationRate: number;
  raiseRate: number;
  topPhrases: Array<{ phrase: string; count: number }>;
  hpRemaining: number;
  bossesDefeated: string[];
  persona: WrapPersonaType;
  totalScore: number;

  // Persona-specific bonus stats
  personaStats: PersonaSpecificStats;
}

// Each persona has unique stats that appear in their reveal
export type PersonaSpecificStats =
  | ChartTopperStats
  | OneHitWonderStats
  | BSideStats
  | CoverArtistStats
  | LeakedAlbumStats
  | UndergroundHitStats;

export interface ChartTopperStats {
  type: "chart-topper";
  projectsShipped: number;
  recognitionReceived: number;
  positiveReviews: number;
}

export interface OneHitWonderStats {
  type: "one-hit-wonder";
  peakQuarter: string;
  weeksCoastingSince: number;
  glorySustained: string;
}

export interface BSideStats {
  type: "b-side";
  timesWentUnnoticed: number;
  meetingsSkippedSuccessfully: number;
  visibilityScore: string;
}

export interface CoverArtistStats {
  type: "cover-artist";
  otherPeoplesTasksCompleted: number;
  creditGiven: number;
  creditReceived: number;
}

export interface LeakedAlbumStats {
  type: "leaked-album";
  jobApplicationsSent: number;
  interviewPrepHours: number;
  resignationLetterDrafts: number;
}

export interface UndergroundHitStats {
  type: "underground-hit";
  linkedInLurkSessions: number;
  salaryResearchQueries: number;
  secretSkillsBuilt: number;
}

export interface WrapPersona {
  type: WrapPersonaType;
  title: string;
  tagline: string;
  emoji: string;
  description: string;
  traits: string[];
  shareText: string;
  gradient: string;
}

export interface WrapSlide {
  id: string;
  type: "stat" | "persona" | "intro" | "outro";
  title?: string;
  content: React.ReactNode | ((stats: WrapStats) => React.ReactNode);
  gradient: string;
  duration?: number; // Auto-advance duration in ms
}

export interface WrapState {
  status: "idle" | "quiz" | "calculating" | "reveal" | "complete";
  currentQuestionIndex: number;
  questions: WrapQuestion[];
  answers: Record<string, number>;
  totalScore: number;
  stats: WrapStats | null;
}

export type WrapAction =
  | { type: "START_QUIZ"; questions: WrapQuestion[] }
  | { type: "ANSWER_QUESTION"; questionId: string; points: number; modifiers?: Partial<BaseStatModifiers> }
  | { type: "NEXT_QUESTION" }
  | { type: "CALCULATE_STATS" }
  | { type: "SET_STATS"; stats: WrapStats }
  | { type: "START_REVEAL" }
  | { type: "COMPLETE" };
