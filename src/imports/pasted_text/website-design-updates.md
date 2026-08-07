I want you to MODIFY THE EXISTING WEBSITE based on the attached original design reference and the current implementation.

IMPORTANT:
Do NOT rebuild the website from scratch.
Do NOT change the overall visual identity.
Do NOT introduce a new portfolio layout.

Keep the current blue sky / cloud / nostalgic / playful visual direction.

Use my original design reference as the visual source of truth and make the following corrections.

==================================================
1. HERO SECTION — FIX THE COMPOSITION
==================================================

The hero currently has several problems.

### A. CAT ON TOP OF TV

There is a small black cat sitting on top of the television.

It MUST remain:

- Fixed relative to the TV
- Positioned at the TOP-RIGHT edge of the television
- Slightly overlapping the top edge of the TV
- Clearly visible
- NOT floating away from the TV
- NOT moving independently

The intended relationship is:

       🐈
    ┌─────────┐
    │   TV    │
    │ PHOTO   │
    └─────────┘

The cat should be anchored to the TV container, not to the viewport.

Use relative positioning on the TV wrapper and absolute positioning for the cat.

The cat should scale proportionally with the TV on smaller screens.

==================================================
2. HERO TV — NO ANIMATION
==================================================

The television is currently moving/animated.

REMOVE the movement.

The TV must be completely STATIC.

No:
- floating animation
- bobbing
- vertical movement
- horizontal movement
- rotation
- parallax movement

The TV should simply remain centered in the hero.

The photograph inside the TV should also remain static.

Clouds may have extremely subtle atmospheric movement if necessary, but the TV itself must NEVER move.

==================================================
3. HERO MUST FIT INSIDE THE FIRST FOLD
==================================================

This is very important.

Currently:

The TV appears first,
then "Hi, I am Shreya",
then "UI/UX Designer"
only becomes visible after scrolling.

That is NOT what I want.

On a normal desktop viewport, the following must all be visible WITHOUT scrolling:

1. Navbar
2. Clouds
3. TV with photo
4. Cat sitting on TV
5. "Hi, I am Shreya"
6. "UI/UX Designer"

The hero should be designed as the first viewport/fold.

The user should immediately understand:

Who I am
+
What I do

without needing to scroll.

Do NOT make the hero unnecessarily tall.

Reduce vertical spacing and scale the TV down if necessary so that the introduction fits naturally below the TV within the first viewport.

The hero should feel compact and intentional.

Desktop target:
approximately 100vh maximum, preferably slightly less if possible.

Do NOT force the user to scroll to discover my name.

==================================================
4. HERO TEXT
==================================================

Keep:

"Hi, I am Shreya"

"UI/UX Designer"

Use Instrument Serif selectively for "Shreya" and maintain the typography style from the reference.

The text should appear immediately underneath the TV.

Do not create excessive empty space between the TV and the introduction.

The text should be visually connected to the hero.

==================================================
5. OVERALL SCALE — EVERYTHING IS CURRENTLY TOO LARGE
==================================================

The current implementation feels visually oversized.

Reduce the overall visual scale.

The goal is NOT to make everything tiny.

The goal is to establish a clear visual hierarchy.

Use normal UX/UI spacing and typography principles.

The website should feel:

- airy
- elegant
- playful
- readable
- visually interesting

NOT:

- oversized
- crowded
- overwhelming
- childish
- visually noisy

Reduce:

- section heading sizes
- greeting pill sizes
- greeting text
- card dimensions where appropriate
- decorative element sizes
- excessive section padding
- project controls
- body text where it currently feels too large

Do NOT reduce everything by the same percentage.

Use proper hierarchy.

==================================================
6. INFINITE GREETING MARQUEE
==================================================

The greeting marquee currently takes too much visual attention.

Make it significantly more subtle.

The greeting pills should be smaller.

Use:

- smaller font
- smaller pill height
- smaller horizontal padding
- smaller spacing
- smaller decorative symbols

The marquee should support the personality of the website, NOT compete with the hero.

It should feel like a playful secondary detail.

The marquee should NOT become one of the largest elements on the page.

Keep the continuous infinite scrolling behavior.

Make the animation smooth and seamless.

Do not allow horizontal page overflow.

On mobile, reduce the size further while keeping the marquee readable.

==================================================
7. ABOUT SECTION — BETTER PROPORTIONS
==================================================

Keep the existing About card and content.

However, reduce its overall visual weight slightly.

The current white card is too dominant.

Maintain:

- rounded corners
- white background
- light-blue quotation marks
- tools
- social links

But use more restrained typography and spacing.

The content should be easy to scan.

Do not make the body text unnecessarily large.

The social links should remain small and secondary.

==================================================
8. "I LOVE CATS" SECTION — FIX THE ARROW
==================================================

The hand-drawn arrow/line is currently overlapping the text.

Fix the positioning.

The arrow should POINT TOWARD the phrase:

"I love cats and
meow like them"

but must NOT cross through or overlap the letters.

The intended visual relationship should be:

     ↘
       I love cats and
       meow like them

The hand-drawn line should sit around the text as a decorative annotation.

It should look intentionally hand-drawn.

Do not place the line directly over the typography.

Keep the cat illustration on the RIGHT side.

The cat should feel like a visual companion to the text.

On mobile, reposition the arrow and cat so that neither overlaps the text.

==================================================
9. PROJECTS SECTION — ONLY TWO PROJECTS
==================================================

For now, show ONLY TWO projects.

Remove StayPoint completely from the project selector and project content.

Projects:

1. Halo
2. Google Pay UX Case Study

Do not create a third project placeholder.

==================================================
10. PROJECT SWITCHER POSITION
==================================================

Currently the project switcher:

Halo
Google Pay UX Case Study
StayPoint

is at the bottom of the project card.

Change this.

The project selector should be:

BELOW the "Projects" section heading/label
AND
ABOVE the main project showcase card.

The hierarchy should be:

✦ Projects
────────────────────────

[ Halo ] [ Google Pay UX Case Study ]

┌───────────────────────────────────┐
│                                   │
│         PROJECT SHOWCASE          │
│                                   │
└───────────────────────────────────┘

The selector should be horizontally centered.

Make it compact and subtle.

The active project should be visually highlighted using the black pill style.

Inactive projects should use a lighter/white style.

Do NOT make the project selector huge.

==================================================
11. PROJECT CARD
==================================================

Keep the current project showcase concept.

For Halo:

Title:
Halo

Description:
"Making online connections safer and more comfortable."

Year:
2026

Tools:
Figma

Keep the project visual/mockup.

The card should remain spacious but not oversized.

Reduce unnecessary whitespace inside the card.

Maintain rounded corners.

==================================================
12. VIEW PROJECT BUTTON
==================================================

The current "View Project" button has a DOWNLOAD icon.

REMOVE the download icon.

This is NOT a download action.

Replace it with a navigation/external-link style icon.

Use an appropriate small arrow/external-link icon such as:

↗

The button should communicate:

"Open project"

rather than "Download".

The button should link to the Dribbble project URL that I will provide later.

For now, use a clearly defined placeholder URL variable:

HALO_DRIBBBLE_URL

Do not hardcode a fake URL.

For the Google Pay project use:

GPAY_DRIBBBLE_URL

I will replace these URLs later.

The button must actually behave as a link.

==================================================
13. PROJECT TRANSITION / INTERACTION
==================================================

Keep project switching smooth.

When switching between Halo and Google Pay:

- update project title
- update description
- update year
- update tools
- update image
- update Dribbble link

Use a subtle transition.

Do NOT use excessive animation.

The project interaction should feel like a polished portfolio interaction, not a flashy website effect.

==================================================
14. "WHAT'S ON MY DESK" SECTION — CHANGE THE CONCEPT
==================================================

I do NOT want the section to be called:

"What's on my desk"

Change the section into a more personal editorial section.

Use:

"Beyond the pixels"

as the section heading.

Use this supporting text:

"Things I read, draw, collect, and keep coming back to."

The purpose of this section is to show things I enjoy outside of UI/UX design.

It should feel personal and editorial.

==================================================
15. BOOKS
==================================================

Add a subsection for books I am reading.

Display books as visual cards.

Each book card should contain:

- Book cover image
- Book title
- Small category/label
- A short personal comment from me

Example:

BOOKS I'M READING

[ Book Cover ]

"The Midnight Library"

"Made me think a lot about the versions of our lives we never get to live."

Keep the comments short and personal.

The cards should feel like objects placed inside the sky environment.

Do NOT make them look like an Amazon/product grid.

Use slightly organic positioning.

==================================================
16. MY DRAWINGS
==================================================

Add another subsection:

"My little drawings"

or

"Things I draw"

Display:

- Drawing image
- Short caption
- Optional small handwritten-style note

Example:

[ Drawing ]

"Sketching random cats when I should probably be designing."

The drawings should feel personal and imperfect.

Do not make them look like professional art portfolio pieces.

The purpose is personality.

==================================================
17. DESK SECTION LAYOUT
==================================================

The section should visually contain two main categories:

BOOKS
and
DRAWINGS

Use a loose editorial layout rather than a rigid symmetrical grid.

For example:

          Books
    ┌─────────┐  ┌─────────┐
    │  BOOK   │  │  BOOK   │
    │  COVER  │  │  COVER  │
    └─────────┘  └─────────┘

             +

       My little drawings

       ┌─────────┐
       │ DRAWING │
       └─────────┘

Allow some asymmetry.

Keep enough whitespace around the objects.

==================================================
18. REMOVE CHERRY BLOSSOM TREE FROM FOOTER
==================================================

The large cherry blossom branch currently appears in the lower part of the page.

REMOVE it from the footer area.

Also remove the large grass illustration at the bottom.

I do NOT want:

- grass footer
- large ground illustration
- cherry blossom tree attached to the footer

The page should NOT end as a landscape scene.

==================================================
19. KEEP SAKURA — BUT USE IT MORE SUBTLY
==================================================

I love sakura flowers.

Instead of the large cherry blossom tree, use Sakura as a SMALL decorative motif in the footer.

Possible treatment:

- a few small sakura petals floating around the footer
- 2–4 small flowers near the footer text
- tiny sakura illustrations around the contact area
- subtle falling petals

The sakura should feel elegant and minimal.

Do NOT create another large tree.

The footer should remain clean.

==================================================
20. FOOTER — MAKE IT MORE CREATIVE
==================================================

Keep the existing footer concept because I like it.

Keep:

"Let's create something together."

Email CTA

Social links

Small copyright/design statement

But make it slightly more creative.

Use the personal tone of the portfolio.

Possible small line:

"Designed and built with curiosity, caffeine and a little meow."

or:

"Designed with curiosity & a little meow."

Add subtle Sakura petals/flowers around the footer.

The footer should feel like a gentle ending to the portfolio.

NOT a conventional corporate footer.

==================================================
21. RESPONSIVE BEHAVIOR
==================================================

Make all of these changes responsive.

DESKTOP:

- Hero fits inside first fold
- TV remains centered
- Cat stays anchored to TV's top-right
- Name and role visible immediately
- Greeting marquee remains compact
- Project selector centered above project card
- Two project cards/views only
- Books/drawings displayed editorially
- Footer remains minimal

TABLET:

- Scale TV down proportionally
- Keep name and role in first viewport where possible
- Reposition clouds
- Maintain cat attachment to TV
- Reduce section spacing
- Maintain readable project cards

MOBILE:

- Hero remains compact
- TV scales down proportionally
- Cat remains attached to TV
- Name and role appear immediately below TV
- No horizontal page scrolling
- Greeting pills become smaller
- Project selector can horizontally scroll if necessary, but the PAGE itself must never horizontally scroll
- Project card becomes single-column
- Books become a horizontal scroll or stacked cards
- Drawings become stacked cards
- Sakura decorations remain subtle

==================================================
22. IMPORTANT SIZE / HIERARCHY RULE
==================================================

Use this visual hierarchy:

1. Hero / TV / identity — strongest
2. Project showcase — strong
3. About card — medium
4. Personal cat section — medium
5. Books and drawings — medium
6. Greeting marquee — subtle
7. Decorative elements — subtle
8. Social links — secondary

The greeting marquee and decorations must NEVER overpower the actual portfolio content.

==================================================
23. DO NOT CHANGE
==================================================

Preserve:

- Blue gradient
- Cloud environment
- Retro TV
- Personal photograph
- Black cat
- Instrument Sans
- Instrument Serif
- White rounded About card
- Cat personality section
- Playful visual language
- Glassmorphic navbar
- Overall one-page scrolling experience

Only make the corrections requested above.

==================================================
24. FINAL QA
==================================================

Before finishing, inspect the result visually at:

1440 × 900
1280 × 800
1024 × 768
768 × 1024
430 × 932
390 × 844
375 × 812
320 × 700

Specifically check:

✓ TV is static
✓ Cat stays attached to TV
✓ Name and role visible in first fold
✓ No oversized elements
✓ Greeting marquee is subtle
✓ Arrow does not overlap cat text
✓ Only Halo + Google Pay projects exist
✓ Project selector is above project card
✓ Project selector is centered
✓ View Project uses external-link/arrow icon, NOT download
✓ Dribbble URLs are used as variables/placeholders
✓ Books section exists
✓ Drawings section exists
✓ Cherry blossom tree removed
✓ Grass removed
✓ Sakura remains only as subtle decoration
✓ Footer remains creative but minimal
✓ No horizontal scrolling
✓ No accidental overlapping
✓ No excessive animations

DO NOT make further design changes beyond these instructions.