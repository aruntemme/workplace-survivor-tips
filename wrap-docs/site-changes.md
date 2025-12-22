# Site Changes: WorkplaceEscape → Work Wrap 2024

## Overview

This document outlines the changes needed to transform the current WorkplaceEscape quiz into a "Work Wrap 2024" Spotify Wrapped-style experience.

---

## 1. Branding Changes

### Current → New

| Element | Current | Work Wrap 2024 |
|---------|---------|----------------|
| **Site Name** | WorkplaceEscape | Work Wrap 2024 |
| **Tagline** | "The workplace vibe check" | "Your Year in Corporate, Quantified" |
| **URL** | workplaceescape.com | workwrap.lol or workwrap2024.com |
| **Tone** | Evergreen satirical quiz | Time-limited year-end event |
| **Visual** | Glass morphism cards | Spotify Wrapped gradient style |

### Color Palette Shift

**Current:** Purple/blue gradients with glass effects
**New:** Bold Spotify-inspired gradients
- Deep black backgrounds
- Vibrant gradient cards (green → blue → purple)
- High contrast white text
- Neon accent colors for stats

---

## 2. UI/UX Changes

### Landing Page

**Current:**
```
[Hero with quiz intro]
     ↓
[Start Quiz Button]
```

**New:**
```
[Animated "2024" with glitch effect]
[Dramatic tagline reveal]
     ↓
[Your Year Awaits - Reveal Now]
     ↓
[Teaser stats: "You sat through HOW many meetings?"]
```

### Quiz Flow → Story Flow

**Current Flow (QuizContainer.tsx):**
- Question appears
- 4 answer options
- Click to select
- Progress bar advances
- After 5 questions → Result

**New Flow (WrapContainer.tsx):**
- Story-style full-screen slides
- Tap/click anywhere to advance
- Each slide reveals one "stat"
- Animated number counters
- Build dramatic tension
- Final persona reveal

### Component Changes

| Current Component | New Component | Changes |
|-------------------|---------------|---------|
| `QuizContainer.tsx` | `WrapContainer.tsx` | Full-screen story mode, auto-advance option |
| `QuestionCard.tsx` | `StatRevealCard.tsx` | No questions, just animated stat reveals |
| `AnswerOption.tsx` | `QuizSlide.tsx` | Keep for initial questions, restyle |
| `ResultCard.tsx` | `WrapSummary.tsx` | Multi-card final summary |
| `ShareButtons.tsx` | `ShareCards.tsx` | Generate image cards for sharing |
| `ProgressBar.tsx` | `StoryProgress.tsx` | Dots/lines like Instagram stories |

---

## 3. New Files to Create

### Pages

```
app/
├── wrap/
│   ├── page.tsx          # Landing page for Work Wrap
│   ├── quiz/
│   │   └── page.tsx      # Quick quiz portion
│   ├── reveal/
│   │   └── page.tsx      # The animated reveal experience
│   └── summary/
│       └── [id]/
│           └── page.tsx  # Shareable summary page
```

### Components

```
components/
├── wrap/
│   ├── WrapContainer.tsx      # Main story container
│   ├── StatRevealCard.tsx     # Individual stat animation
│   ├── NumberCounter.tsx      # Animated counting numbers
│   ├── StoryProgress.tsx      # Story-style progress indicator
│   ├── WrapSummary.tsx        # Final summary with all stats
│   ├── ShareCard.tsx          # Shareable image-like card
│   └── PersonaReveal.tsx      # Dramatic persona announcement
```

### Lib/Data

```
lib/
├── wrap/
│   ├── questions.ts      # Year-end specific questions
│   ├── stats.ts          # Stat generation logic
│   ├── personas.ts       # Work Wrap personas
│   └── shareText.ts      # Share copy for platforms
```

---

## 4. Question Changes

### Current Questions (Keep Some, Add Year-End Spin)

**Keep these (with 2024 twist):**
- Meeting scenarios → "How many 'quick syncs' derailed your 2024?"
- Email/Slack scenarios → "Your inbox this year..."
- Manager scenarios → Add "2024 edition" framing

**New Year-End Questions:**

1. "In 2024, your most-used Slack emoji was probably..."
   - The crying-laughing face (coping mechanism)
   - Thumbs up (path of least resistance)
   - Eyes emoji (reading drama, saying nothing)
   - Custom emoji your company made that you hate

2. "Your 2024 Q4 energy level is best described as..."
   - "Still crushing it!"
   - "Running on fumes"
   - "Coasting to December 31"
   - "I am simply a vessel at this point"

3. "If your 2024 work year was a music genre, it would be..."
   - Upbeat pop (things went well!)
   - Heavy metal (chaos but survived)
   - Elevator music (numb to it all)
   - Funeral dirge (self-explanatory)

4. "The highlight of your 2024 work year was..."
   - A promotion/achievement
   - A day you took off
   - When the coffee machine got fixed
   - Nothing comes to mind

---

## 5. Results/Persona Changes

### Current Personas → Work Wrap Personas

| Current | Work Wrap Equivalent | 2024 Spin |
|---------|---------------------|-----------|
| Corporate Optimist | **The Unicorn** | "Somehow still thriving in 2024" |
| Professional Survivor | **The Endurance Athlete** | "Ran the marathon of back-to-backs" |
| Functioning Cynic | **The Analyst** | "Predicted every disappointment" |
| Quiet Quitter | **The Efficiency Expert** | "Optimized effort-to-output ratio" |
| Escape Artist | **The LinkedIn Lurker** | "Applied to 47 jobs, attended 0 interviews" |
| Professional Pessimist | **The Veteran** | "Seen 3 reorgs, survived all of them" |

---

## 6. Stat Generation System

### How Stats Are Generated

After the quick quiz, generate "stats" based on answers:

```typescript
interface WorkWrapStats {
  // Meeting stats
  meetingHours: number;         // "Hours in meetings"
  meetingsThatCouldBeEmails: number;
  timesOnMute: number;

  // Communication stats
  unreadSlacks: number;
  perMyLastEmailCount: number;
  passiveAggressiveEmails: number;

  // Survival stats
  coffeeConsumed: string;       // "Concerning amounts"
  sundayScaries: number;        // Always 52
  linkedInSessions: number;

  // Manager/colleague stats
  creditStolen: number;
  ideasIgnored: number;

  // Calculated
  overallSurvivalScore: string; // "Barely" / "Somehow" / "Thriving"
  topArtistEquivalent: string;  // "Your manager played you more than [artist]"
}
```

### Stat Calculation Logic

Based on quiz answers, generate numbers that feel specific:
- Negative answers → Higher "suffering" stats
- Positive answers → Lower stats (rare unicorn path)
- Always include at least one absurdly high number for shareability

---

## 7. Animation Requirements

### New Animations (Framer Motion)

**Stat Reveal:**
```tsx
// Number counting up
<motion.span animate={{ opacity: 1 }}>
  <CountUp from={0} to={247} duration={2} />
</motion.span>
```

**Slide Transitions:**
```tsx
// Spotify-style slide up/fade
<AnimatePresence mode="wait">
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -50 }}
  >
    {currentSlide}
  </motion.div>
</AnimatePresence>
```

**Persona Reveal:**
- Build suspense with "Calculating..."
- Glitch effect on reveal
- Confetti for absurd stats

---

## 8. Sharing System Overhaul

### Current Sharing
- Twitter/LinkedIn text posts
- Challenge links

### New Sharing
- **Generated image cards** (canvas/html2canvas)
- **Multiple card options** (pick your best stat)
- **Story format** for Instagram
- **"Compare with friend"** feature

### Share Card Templates

```
┌─────────────────────────────────┐
│        WORK WRAP 2024           │
│                                 │
│    You attended 347 meetings    │
│    Could've been emails: 289    │
│                                 │
│    You are: THE SURVIVOR        │
│                                 │
│    Get yours: workwrap.lol      │
└─────────────────────────────────┘
```

---

## 9. SEO/Meta Changes

### Current Meta
```html
<title>WorkplaceEscape - The Workplace Vibe Check</title>
```

### New Meta
```html
<title>Work Wrap 2024 - Your Year in Corporate, Quantified</title>
<meta property="og:title" content="My 2024 Work Wrap Results" />
<meta property="og:description" content="I survived 347 meetings this year. What about you?" />
```

### Dynamic OG Images
Generate custom OG images with user's stats for link previews.

---

## 10. Deployment Strategy

### Option A: Replace Current Site
- Rebrand completely to Work Wrap
- Lose evergreen WorkplaceEscape SEO
- Simpler deployment

### Option B: Subdomain/Path
- workplaceescape.com/wrap-2024
- Keep original quiz
- Run both simultaneously
- A/B test traffic

### Option C: Separate Domain
- workwrap.lol or similar
- Fresh viral campaign
- Clear time-limited branding
- Can sunset after January without affecting main brand

**Recommendation:** Option C for maximum viral potential and clean campaign.

---

## 11. Files to Modify (Minimal Changes Path)

If keeping current architecture but adding Wrap mode:

| File | Change |
|------|--------|
| `app/layout.tsx` | Add conditional theming |
| `app/page.tsx` | Add "Try Work Wrap 2024" banner |
| `lib/quiz/questions.ts` | Add wrap-specific questions |
| `lib/quiz/results.ts` | Add wrap personas |
| `tailwind.config.ts` | Add Wrapped gradient themes |

---

## 12. Timeline Estimate

| Phase | Tasks |
|-------|-------|
| **Phase 1** | New landing page, quiz questions, basic flow |
| **Phase 2** | Animated stat reveals, story mode |
| **Phase 3** | Share cards, social integration |
| **Phase 4** | Polish, testing, launch |

**Ideal Launch:** First week of December 2024 (during Spotify Wrapped buzz)
