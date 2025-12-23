import { WrapQuestion } from "./types";
import { WRAP_YEAR } from "./constants";

export const wrapQuestions: WrapQuestion[] = [
  // Energy / Outlook questions
  {
    id: "year-energy",
    text: `How would you describe your ${WRAP_YEAR} work energy?`,
    category: "energy",
    answers: [
      {
        id: "thriving",
        text: "Crushing it, honestly",
        points: 3,
        vibe: "Chart-Topper energy",
        statModifiers: { survivalMode: -2 },
      },
      {
        id: "peaked",
        text: "Started strong, now coasting",
        points: 1,
        vibe: "One-Hit Wonder",
        statModifiers: { survivalMode: 1 },
      },
      {
        id: "invisible",
        text: "Flying under the radar",
        points: 0,
        vibe: "B-Side vibes",
        statModifiers: { survivalMode: 0 },
      },
      {
        id: "depleted",
        text: "Running on fumes and spite",
        points: -2,
        vibe: "Survival mode",
        statModifiers: { survivalMode: 3 },
      },
    ],
  },

  // Meeting questions
  {
    id: "meeting-reality",
    text: "Your meeting calendar this year has been...",
    category: "meetings",
    answers: [
      {
        id: "productive",
        text: "Actually productive somehow",
        points: 3,
        vibe: "Unicorn status",
        statModifiers: { meetingPain: -2 },
      },
      {
        id: "manageable",
        text: "Busy but manageable",
        points: 1,
        vibe: "Holding it together",
        statModifiers: { meetingPain: 1 },
      },
      {
        id: "chaos",
        text: "Back-to-back chaos daily",
        points: -1,
        vibe: "Calendar tetris",
        statModifiers: { meetingPain: 2 },
      },
      {
        id: "hostage",
        text: "I'm basically held hostage",
        points: -3,
        vibe: "Meeting martyr",
        statModifiers: { meetingPain: 3 },
      },
    ],
  },

  // Manager/Credit questions
  {
    id: "credit-situation",
    text: "When it comes to getting credit for your work...",
    category: "manager",
    answers: [
      {
        id: "recognized",
        text: "I get recognized appropriately",
        points: 3,
        vibe: "Living the dream",
        statModifiers: { managerDrama: -2 },
      },
      {
        id: "sometimes",
        text: "Sometimes, when stars align",
        points: 1,
        vibe: "Occasionally seen",
        statModifiers: { managerDrama: 0 },
      },
      {
        id: "others-work",
        text: "I do the work, others take the bow",
        points: -2,
        vibe: "Cover Artist mode",
        statModifiers: { managerDrama: 2 },
      },
      {
        id: "what-credit",
        text: "Credit? In this economy?",
        points: -3,
        vibe: "Invisible contributor",
        statModifiers: { managerDrama: 3 },
      },
    ],
  },

  // Communication/Email questions
  {
    id: "email-relationship",
    text: "Your relationship with your inbox is best described as...",
    category: "communication",
    answers: [
      {
        id: "inbox-zero",
        text: "Inbox zero enthusiast",
        points: 2,
        vibe: "Productivity guru",
        statModifiers: { emailChaos: -2 },
      },
      {
        id: "managed",
        text: "I check it when I need to",
        points: 1,
        vibe: "Balanced approach",
        statModifiers: { emailChaos: 0 },
      },
      {
        id: "overwhelming",
        text: "It's a war zone in there",
        points: -1,
        vibe: "Email survivor",
        statModifiers: { emailChaos: 2 },
      },
      {
        id: "ignored",
        text: "I've declared inbox bankruptcy",
        points: -2,
        vibe: "Strategic ignorance",
        statModifiers: { emailChaos: 3 },
      },
    ],
  },

  // Survival/Career questions
  {
    id: "career-plans",
    text: `What are your ${WRAP_YEAR + 1} career plans?`,
    category: "survival",
    answers: [
      {
        id: "growing",
        text: "Keep growing where I am",
        points: 3,
        vibe: "Loyal soldier",
        statModifiers: { survivalMode: -1 },
      },
      {
        id: "open",
        text: "Open to opportunities (secretly)",
        points: 0,
        vibe: "Underground Hit",
        statModifiers: { survivalMode: 1 },
      },
      {
        id: "actively-looking",
        text: "LinkedIn is my second home",
        points: -2,
        vibe: "Leaked Album energy",
        statModifiers: { survivalMode: 2 },
      },
      {
        id: "escape",
        text: "Counting down to my escape",
        points: -3,
        vibe: "Exit strategy activated",
        statModifiers: { survivalMode: 3 },
      },
    ],
  },

  // Overall vibe check
  {
    id: "work-vibe",
    text: `If ${WRAP_YEAR} at work was a music genre, it would be...`,
    category: "outlook",
    answers: [
      {
        id: "upbeat",
        text: "Upbeat pop - things went well!",
        points: 3,
        vibe: "Main character energy",
      },
      {
        id: "indie",
        text: "Indie - unique but underappreciated",
        points: 1,
        vibe: "Hidden gem",
      },
      {
        id: "elevator",
        text: "Elevator music - just... there",
        points: -1,
        vibe: "Background noise",
      },
      {
        id: "metal",
        text: "Heavy metal - chaos but survived",
        points: -2,
        vibe: "Battle-hardened",
      },
    ],
  },
];

// Fisher-Yates shuffle
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function getWrapQuestions(): WrapQuestion[] {
  // Return all questions with shuffled answers
  return wrapQuestions.map((q) => ({
    ...q,
    answers: shuffleArray(q.answers),
  }));
}
