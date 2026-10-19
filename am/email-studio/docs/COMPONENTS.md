# Component contracts

All fragments are complete table rows. Insert into the shared 600px shell; the head resets/media query and Outlook wrapper are required. These files are source components, not tested native Eloqua elements.

| ID | Component | Family | Editable fields | Limits and rules |
|---|---|---|---|---|
| ID-01 | Athletics masthead | Identity | edition label | Keep logo 50px; brand treatment fixed. |
| ID-02 | Aggie AM masthead | Identity | None | Use once, beneath utility bar; retain authentic logo. |
| ID-03 | Preferences & postal footer | Identity | view online URL, preferences URL | Required. Preserve opt-out distinction. Replace with approved Eloqua footer only after equivalent behavior is verified. |
| ED-01 | Statement hero | Editorial | eyebrow, headline, summary | Eyebrow ≤45 chars; headline ≤65; summary ≤120. No background image dependency. |
| ED-02 | Lead story | Editorial | sport, headline, body, story URL | Headline ≤70 chars; body ≤85 words. Facts from supplied edition, not independently verified. |
| ED-03 | Two-story rail | Editorial | two headlines, two summaries, two URLs | Each headline ≤48 chars; summary ≤40 words. Two equal cells stack on mobile. |
| ED-04 | The Rundown | Editorial | sport, summary, URL per item | 3–7 items; ≤35 words each. Keep losses factual and neutral. |
| ED-05 | Moment / motion feature | Editorial | headline, image, alt, summary, video URL | Image 528px wide at desktop, fluid on mobile; readable static first frame required. Animation is optional. |
| AT-01 | Away game matchup | Athletics | date, sport, opponent, ranking, time, timezone, broadcast, venue | Display timezone after confirmation. The supplied email omits it; do not infer for send. Home/neutral language may be edited, not geometry. |
| AT-02 | Final score | Athletics | teams, scores, venue, result line | Win/loss neutral labels; no color-only result indicator. Scores ≤3 digits. |
| AT-03 | Upcoming schedule | Athletics | date, event, time, timezone, venue, network | 3 default rows; 1–7 supported. No schedule intro line (source explicitly removed it). Times are source samples pending confirmation. |
| AT-04 | Player spotlight | Athletics | sport, athlete, headline, body, URL | ≤60-word summary; no invented quotes or athlete endorsements. |
| AT-05 | Three-stat strip | Athletics | three values, three labels | Values ≤5 chars; labels ≤12. One-stat variant: remove two cells and set width 100%. |
| AT-06 | Milestone panel | Athletics | eyebrow, milestone, context | ≤50 words; verify historical claim with sports information before sending. |
| CV-01 | Dugout Club campaign | Conversion | campaign, image, offer, CTA URL | Source membership offer; reconfirm availability and terms. This is a membership promotion, not a single-game ticket price. |
| CV-02 | Event essentials | Conversion | broadcast, arrival/watch instructions, information URL | Game-day sample is away. Add parking/gates only from approved venue guidance. |
| CV-03 | Primary action | Conversion | CTA label, URL | Label ≤28 chars. No invented scarcity, price, seat or inventory claims. |
| UT-01 | Presenting sponsor | Utility | approved sponsor destination | Required for Aggie AM; do not apply sponsor to other campaigns without contracted entitlement. Keep 16px clear space. |
| UT-02 | Sponsor banner | Utility | approved banner, alt, URL | Preserve source placement before Rundown. Artwork review required: legal copy must remain readable at 320px; never crop disclaimers. |
| UT-03 | Section break | Utility | None | 8px vertical / 36px horizontal. Structural only; cannot replace a heading. |
| UT-04 | Utility bar & notice | Utility | view online URL | Use once at top. Send-blocking status stays in catalog, outside email markup. |

## Variants and dependencies

Only variants actually shown in the catalog are built. Home/neutral matchups, loss treatments, alternative story crops and extra card counts require a controlled source edit and revalidation. No unbuilt variant is implied by the component name.

ID-03, UT-04 and a masthead are required in each composition. UT-01 and UT-02 are source Aggie AM sponsorship placements. ED-03 requires the stack class and shared media query. Images use ../assets relative to template/module directories until Eloqua remaps them.

Campaign uses documented CV-02 and CV-03 overrides in build.py: membership benefits and membership CTA. Footer behavior varies by recipe: only Aggie AM includes the Aggie AM-specific opt-out sentence.

Staff may edit text, alt text, approved URLs and approved images. Staff must preserve width, table nesting, classes, explicit backgrounds, spacing and conditional comments. These are workflow rules, not editor-enforced locks.
