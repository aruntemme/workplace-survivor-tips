# Content Plan: WorkplaceEscape

## Content Philosophy

### Core Principles

1. **Mock Situations, Not People** - Target universal experiences, not individuals
2. **Relatable > Edgy** - Recognition humor beats shock value
3. **Self-Deprecating Friendly** - Laugh with the audience
4. **LinkedIn-Safe** - Shareable without career risk
5. **Cathartic** - Provide stress relief, not stress addition

### Tone Guidelines

| DO | DON'T |
|----|-------|
| Exaggerate common frustrations | Attack specific companies/people |
| Use absurdist escalation | Be mean-spirited |
| Include insider corporate lingo | Use offensive language |
| Reference popular culture | Date references too specifically |
| Celebrate the absurd | Encourage actual bad behavior |

---

## SECTION 1: ENTRY QUIZ CONTENT

### Quiz Title Options (A/B Test)

1. "How Do You REALLY Feel About Your Colleagues?"
2. "The Workplace Vibe Check"
3. "What's Your Office Survival Score?"
4. "Are You Thriving or Just Surviving at Work?"
5. "The Monday Morning Diagnostic"

### Landing Page Copy

**Headline Options:**

```
V1: "Let's find out if you love your job... or if you're just really good at pretending"

V2: "Take the quiz your HR department hopes you never find"

V3: "5 questions. 2 minutes. The truth about your workplace survival level."

V4: "Warning: Side effects include hysterical laughter and existential validation"
```

**Subheadline:**
```
"Based on your answers, we'll show you the internet you deserve."
```

**CTA Button:**
```
"Begin the Vibe Check" / "Let's Go" / "I'm Ready to Be Diagnosed"
```

---

### Quiz Questions (7 Total, Show 5 Randomly)

#### Question 1: The Meeting Scenario

**"Your manager schedules a 'quick 5-minute sync' at 4:55 PM on Friday. You..."**

| Answer | Points | Vibe |
|--------|--------|------|
| "Great! I love impromptu collaboration!" | +3 | Corporate Optimist |
| "Open LinkedIn in another tab 'just in case'" | -1 | Escape Artist |
| "Immediately start drafting your 'conflict' excuse" | -2 | Excuse Expert |
| "Accept while silently screaming into the void" | -3 | Silent Sufferer |

#### Question 2: The Reply-All Incident

**"Someone reply-alls to 500 people with 'Thanks!' Your reaction?"**

| Answer | Points | Vibe |
|--------|--------|------|
| "Appreciate their enthusiasm!" | +3 | Optimist |
| "Silently add them to your mental 'list'" | -1 | Professional |
| "Reply-all back with just 'Unsubscribe'" | -2 | Chaos Agent |
| "Write a 3-paragraph Slack rant to your work bestie" | -3 | Venter |

#### Question 3: Monday Morning

**"It's 9:01 AM Monday. Your Slack shows 47 unread messages. You..."**

| Answer | Points | Vibe |
|--------|--------|------|
| "Dive right in! Fresh week, fresh energy!" | +3 | Morning Person |
| "Coffee first. Messages can wait 30 minutes." | 0 | Normal Human |
| "Mark all as read. If it's important, they'll follow up." | -2 | Selective Reader |
| "Close laptop. Go back to bed. Rethink life choices." | -3 | Over It |

#### Question 4: The Credit Stealer

**"A colleague presents YOUR idea as their own in a meeting. You..."**

| Answer | Points | Vibe |
|--------|--------|------|
| "Glad the idea is getting traction!" | +3 | Team Player |
| "Politely mention your prior contribution" | 0 | Professional |
| "Screenshot the original Slack message for 'records'" | -1 | Strategic |
| "Start a detailed revenge fantasy that lasts the entire meeting" | -3 | Plotting |

#### Question 5: Corporate Jargon

**"The phrase 'Let's take this offline and circle back with more bandwidth' makes you feel..."**

| Answer | Points | Vibe |
|--------|--------|------|
| "Aligned! Clear next steps!" | +3 | Corporate Native |
| "Nothing. I've become immune." | 0 | Veteran |
| "Physical pain in my soul" | -2 | Jargon Allergy |
| "An urge to create a satirical website about work" | -3 | One of Us |

#### Question 6: The Toxic Colleague

**"Your most challenging colleague just joined a video call without pants (camera on). You..."**

| Answer | Points | Vibe |
|--------|--------|------|
| "Politely DM them about the situation" | +2 | Kind Soul |
| "Screenshot. Store. Never mention." | -1 | Collector |
| "Nothing. This is the content I live for." | -2 | Drama Fan |
| "Start a pool on when HR gets involved" | -3 | Bookie |

#### Question 7: The Exit Interview

**"Honestly, if you quit tomorrow, your goodbye Slack message would be..."**

| Answer | Points | Vibe |
|--------|--------|------|
| "Heartfelt thanks and LinkedIn connection requests" | +3 | Genuine |
| "Professional and brief" | +1 | Normal |
| "An empty message with just a link to 'Take This Job and Shove It'" | -2 | Dramatic |
| "I've already drafted it and it's saved in my personal folder" | -3 | Ready |

---

### Scoring Logic

```javascript
function calculateResult(totalPoints: number): ResultType {
  if (totalPoints >= 10) return 'corporate_optimist';
  if (totalPoints >= 5) return 'professional_survivor';
  if (totalPoints >= 0) return 'functioning_cynic';
  if (totalPoints >= -5) return 'quiet_quitter';
  if (totalPoints >= -10) return 'escape_artist';
  return 'professional_pessimist';
}
```

---

## SECTION 2: RESULT TYPES & CARDS

### POSITIVE PATH (Score >= 8)

#### Result: "The Corporate Optimist"

**Headline:** "Congratulations! You Actually Like Your Job!"

**Description:**
```
Wow. You're either incredibly lucky, in denial, or the person who
brings homemade cookies to meetings. Either way, we respect it.

Your positivity is either inspiring or slightly terrifying to
your colleagues. Keep being that ray of sunshine in the
fluorescent-lit office!
```

**Shareable Card Text:**
```
"I took the Workplace Vibe Check and I'm apparently a
CORPORATE OPTIMIST. Yes, I'm the person who replies
'Happy Monday!' unironically."
```

**What They See:**
- Link to LinkedIn motivation posts
- "10 Tips to Stay Positive" (boring)
- Suggestion to share with "less fortunate colleagues"

---

### NEGATIVE PATH (Score < 8)

#### Result 1: "The Professional Survivor" (5-7 pts)

**Headline:** "You're Holding It Together... Barely"

**Badge:** [Level: Concerning]

**Description:**
```
You've mastered the art of the polite smile while dying inside.
Your coffee consumption is concerning. Your ability to nod
along in meetings while planning dinner is elite.

You're not thriving, but you're not quitting either.
This is peak corporate endurance.
```

**Shareable Text:**
```
"According to science (a quiz), I'm 73% done with
corporate life but 100% dependent on my paycheck.
#WorkplaceVibeCheck"
```

---

#### Result 2: "The Functioning Cynic" (0-4 pts)

**Headline:** "You See Through the Corporate BS"

**Badge:** [Level: Self-Aware]

**Description:**
```
You've decoded the matrix. "Quick syncs" are never quick.
"Exciting opportunities" mean more work. "We're a family"
means no boundaries.

Your eye-roll is legendary. Your sarcasm is a defense
mechanism. Your LinkedIn is purely for stalking.
```

**Shareable Text:**
```
"I'm officially a FUNCTIONING CYNIC according to this
quiz. 'Circle back' triggers my fight-or-flight response.
WorkplaceEscape.com"
```

---

#### Result 3: "The Quiet Quitter" (-5 to -1 pts)

**Headline:** "You're Doing the Minimum. Strategically."

**Badge:** [Level: Efficient]

**Description:**
```
You've optimized your work-life balance by minimizing the
'work' part. Your out-of-office is always on. Your camera
is always off. Your boundaries are immaculate.

You're not lazy - you're accurately matching your effort
to your compensation.
```

**Shareable Text:**
```
"Took a quiz. Discovered I'm a QUIET QUITTER.
But like, a strategic one. It's called work-life
boundary optimization."
```

---

#### Result 4: "The Escape Artist" (-10 to -6 pts)

**Headline:** "You've Mentally Checked Out... And We Get It"

**Badge:** [Level: Critical]

**Description:**
```
Your LinkedIn has "Open to Work" enabled but hidden from
current employer. Your resume is always updated. You price
beach apartments in Portugal monthly.

Every Sunday night, you question every decision that led
you here. The good news? You're self-aware about it.
```

**Shareable Text:**
```
"I'm an ESCAPE ARTIST at work. Not the cool Houdini kind.
The 'how many browser tabs of job listings can I hide' kind.
WorkplaceEscape.com"
```

---

#### Result 5: "The Professional Pessimist" (Below -10)

**Headline:** "You've Achieved Full Workplace Enlightenment (Cynicism)"

**Badge:** [Level: Ascended]

**Description:**
```
You've seen too much. The HR "initiatives." The "restructuring."
The "culture improvement" surveys that change nothing.

You're not negative - you're just no longer surprised.
Welcome to the final stage. Here's your complimentary
dark humor and emotional detachment.
```

**Shareable Text:**
```
"Quiz says I'm a PROFESSIONAL PESSIMIST.
I prefer 'workplace realist.' The optimists
just haven't been through enough reorgs yet."
```

---

## SECTION 3: MINI-GAME CONTENT

### Game 1: "Meeting Survivor" (Idle Clicker)

**Concept:** Stay awake in an endless meeting by clicking

**Mechanics:**
- Click to gain "Alertness Points"
- Alertness depletes over time
- Boss periodically asks "Any thoughts?" - must click fast
- Power-ups: Coffee (+50 alertness), Snacks (+25)
- Penalties: Boring slides (-10/sec), "Let me share my screen" (-50)

**Upgrades (Humorous):**
| Upgrade | Cost | Effect |
|---------|------|--------|
| Ergonomic Chair | 100 | +5% base alertness |
| Secret Second Monitor | 500 | Passive alertness gain |
| "Connection Issues" Button | 1000 | Emergency escape (30s immunity) |
| Strategic Nodding | 2500 | Auto-click when boss talks |
| Proxy Meeting Attendee | 10000 | Game plays itself |

**High Score Titles:**
- 0-100: "Intern"
- 100-500: "Meeting Regular"
- 500-2000: "Calendar Warrior"
- 2000-10000: "Professional Meeting Survivor"
- 10000+: "They Should've Sent an Email"

---

### Game 2: "Email Defender" (Arcade)

**Concept:** Protect your inbox from unnecessary emails

**Mechanics:**
- Emails fall from top of screen
- Drag to sort: Important (keep), Spam (delete), CC Hell (block)
- Wrong sorts cost "Sanity Points"
- Combos for fast correct sorts

**Email Types:**
| Email | Action | Points |
|-------|--------|--------|
| "Quick question" (that isn't quick) | Delete | +10 |
| "Per my last email" | Keep (it's ammo) | +15 |
| "Thanks!" reply-all | Block sender | +20 |
| "Meeting invite: 4:30 PM Friday" | Decline | +25 |
| Actually important work email | Keep | +5 |
| Newsletter you never subscribed to | Spam | +10 |

**Power-ups:**
- "Out of Office" - 10 second immunity
- "Inbox Zero" - Clear all current emails
- "Mark All Read" - Ignore everything for 5 seconds

---

### Game 3: "BS Bingo" (Interactive)

**Concept:** Generate and play corporate jargon bingo

**Features:**
- Generate random bingo card with buzzwords
- Perfect for actual meetings (mobile-friendly)
- Share completed bingo cards

**Word Bank (75+ terms):**
```
- "Synergy"               - "Low-hanging fruit"
- "Circle back"           - "Move the needle"
- "Take this offline"     - "Bandwidth"
- "Deep dive"             - "Align"
- "Leverage"              - "Pivot"
- "Stakeholder"           - "Deliverables"
- "Best practices"        - "Action items"
- "Going forward"         - "Touch base"
- "Out of pocket"         - "EOD"
- "Loop in"               - "On my radar"
- "Pain points"           - "Value-add"
- "Scalable"              - "Holistic"
- "Proactive"             - "Ecosystem"
```

---

### Game 4: "Excuse Generator"

**Concept:** AI-powered professional excuse generator

**Categories:**
1. **Meeting Escapes**
   - "I have a hard stop at [time]"
   - "I'm double-booked with [vague important thing]"
   - "My internet is being 'unstable' today"

2. **Camera Off Reasons**
   - "Bad hair day" (honest)
   - "Bandwidth issues" (classic)
   - "Multitasking for efficiency" (spin)

3. **Late/Absent Reasons**
   - Professional: "Doctor's appointment"
   - Creative: "Waiting for an important delivery"
   - Nuclear: "Family emergency" (use sparingly)

4. **Deadline Extensions**
   - "Waiting on stakeholder input"
   - "Want to ensure quality over speed"
   - "Unexpected complexity emerged"

**Output Format:**
```
YOUR EXCUSE:
"I'll need to drop off this call at 3 PM - I have
a hard stop for a cross-functional alignment session
that was just escalated this morning."

BELIEVABILITY SCORE: 87%
REUSABILITY: Can use again in 2 weeks
```

---

## SECTION 4: TOOLS CONTENT

### Tool 1: "Corporate Translator"

**Concept:** Decode what corporate speak really means

**Examples:**
| They Say | They Mean |
|----------|-----------|
| "Let's take this offline" | "This is getting awkward, stop talking" |
| "That's an interesting perspective" | "You're completely wrong" |
| "We need to be more proactive" | "You're in trouble for something" |
| "Going forward..." | "Forget everything we just discussed" |
| "I'll loop you in" | "I'll forget to loop you in" |
| "Quick sync" | "At least 45 minutes" |
| "We're a family here" | "We have no boundaries" |
| "Competitive salary" | "Below market rate" |
| "Fast-paced environment" | "Chaotic and understaffed" |
| "Other duties as assigned" | "Whatever we want" |

---

### Tool 2: "Toxic Colleague Identifier" (Extended Quiz)

**Concept:** Deeper quiz to identify types of toxic coworkers

**12 Coworker Types:**
1. **The Credit Thief** - Steals ideas in meetings
2. **The Reply-All Villain** - CC's the world
3. **The Loud Chewer** - Self-explanatory
4. **The Meeting Scheduler** - Books 8 AM calls
5. **The One-Upper** - Always has a better story
6. **The Ghost** - Never responds to messages
7. **The Micromanager** - Checks in hourly
8. **The Pessimist** - Nothing will ever work
9. **The Gossip** - Knows everyone's business
10. **The Workaholic** - Makes others look bad
11. **The Excuse Machine** - Never their fault
12. **The Kitchen Criminal** - Steals lunch, leaves dishes

**Result Card:**
"Your workplace contains:
- 2 Credit Thieves
- 1 Meeting Scheduler
- 3 Kitchen Criminals

Survival probability: 34%"

---

### Tool 3: "Professional Reply Generator"

**Concept:** Generate passive-aggressive but professional responses

**Input Examples:**

**Scenario:** Colleague takes credit for your work
**Output Options:**
1. *Gentle:* "Thanks for presenting! I'm glad the research I compiled was helpful."
2. *Medium:* "Great presentation! I have the original analysis if anyone needs the source data."
3. *Spicy:* "As per my email from March 15th, which I'm happy to forward, this approach..."

**Scenario:** Boss schedules Friday 5 PM meeting
**Output Options:**
1. *Gentle:* "I have a commitment at 5:30 - could we cover key points async?"
2. *Medium:* "I can join for the first 15 minutes if we prioritize the agenda."
3. *Spicy:* "Unfortunately I have a hard stop due to a prior commitment that predates this invite."

---

## SECTION 5: WEEKLY CONTENT

### "Workplace Horoscope" (Weekly Feature)

**Format:** Satirical horoscope for office life

**Example - Aries:**
```
ARIES (Mar 21 - Apr 19)

This week, Mercury is in retrograde and so is your
project timeline. Tuesday brings unexpected "feedback"
from someone who hasn't read your work. Stay calm.

Lucky meeting day: None
Unlucky phrase: "Let's unpack that"
Power move: Actually use your vacation days
```

**Example - Cancer:**
```
CANCER (Jun 21 - Jul 22)

The stars suggest you'll be CC'd on at least 47
emails that don't concern you. Your lucky coffee
order is "anything with caffeine."

Avoid: Reply-all temptation
Embrace: Strategic calendar blocking
Spirit animal: That coworker who always "has a conflict"
```

---

### "Survival Tips" (Listicle Series)

**Article Ideas:**
1. "7 Ways to Look Busy When You're Not"
2. "The Art of the Strategic 'Connection Issues'"
3. "Calendar Defense: Blocking Time That Doesn't Exist"
4. "Email Templates for Every Passive-Aggressive Situation"
5. "How to Survive Open Office Plans: A Guide"
6. "Meeting Escape Routes: Ranked by Believability"
7. "LinkedIn Buzzword Bingo: The Drinking Game (Non-Alcoholic Version)"

---

## SECTION 6: CONTENT CALENDAR

### Week 1: Launch

| Day | Content |
|-----|---------|
| Mon | Launch quiz + social push |
| Tue | Behind-the-scenes on Twitter |
| Wed | "Corporate Translator" launch |
| Thu | First "Workplace Horoscope" |
| Fri | Meeting Survivor game launch |

### Week 2-4: Growth

| Week | Focus |
|------|-------|
| 2 | Email Defender game + PR outreach |
| 3 | Excuse Generator + "Survival Tips" #1 |
| 4 | Toxic Colleague quiz + community features |

### Monthly Recurring

| Cadence | Content |
|---------|---------|
| Weekly | Workplace Horoscope |
| Bi-weekly | New Survival Tips article |
| Monthly | New mini-game or tool |
| Quarterly | Major quiz update |

---

## SECTION 7: VOICE & STYLE GUIDE

### Writing Voice

**Primary Voice:** Exhausted millennial/Gen-Z office worker

**Characteristics:**
- Dry humor
- Self-aware cynicism
- Pop culture references (but not dated)
- Corporate jargon used ironically
- Run-on sentences for dramatic effect
- Generous use of "honestly," "literally," "actually"

### Example Transformations

**Too Corporate:**
"This resource provides actionable insights for workplace optimization."

**Our Voice:**
"Look, we're not going to fix your workplace. But we can help you laugh about it instead of crying in the bathroom (again)."

**Too Mean:**
"Your boss is an idiot and you should quit."

**Our Voice:**
"Your boss schedules 4 PM Friday meetings. We're not saying anything, we're just... saying."

### Forbidden Phrases

- "Hustle culture" (used sincerely)
- "Rise and grind"
- "Work hard, play hard"
- Any genuinely motivational quotes
- "#blessed"
- "We're all in this together" (unless ironic)

---

## SECTION 8: CONTENT VERSIONING

### V1 Content (MVP)

- 1 Quiz (5 questions, 6 results)
- 2 Result paths (positive/negative)
- Landing page copy
- Share card text per result
- Basic about/legal pages

### V2 Content (Enhanced)

- 2 Additional quizzes
- 3 Mini-games with content
- 5 Tools with full content
- 10 Survival Tips articles
- Weekly Horoscope (4 weeks pre-written)

### V3 Content (Platform)

- User-submitted stories system
- Comment moderation guidelines
- Community guidelines
- Premium content tiers
- Newsletter templates (12 editions)
- Podcast script templates

---

*Content Plan Version: 1.0*
*Last Updated: December 2024*
