# Validation record and release gates

Status: REVIEW BUILD. Local automated checks are recorded in `validation-results.json`. No Eloqua import, delivered-email rendering, device-lab tests or live compliance behavior verified.

## Automated local checks

Run `python3 source/validate.py`. Checks complete HTML documents, layout-table roles, local image existence, no email script/form/iframe, no recipient tracking hosts/parameters, no unapproved live anchors, required footer address, template size, subject/preheader companions and all module boundaries. This verifies source structure and privacy hygiene, not inbox compatibility. Templates deliberately fail production readiness while placeholder links remain.

## Browser checks

Completed in the Codex in-app browser: all five templates at iframe widths of 600, 375 and 320px; all 15 cases had matching body/scroll widths and all images loaded. Catalog search for score returned one component; Identity filter returned three. Mobile headline sizing was visually refined and rechecked. Detailed measurements: `browser-validation.json`; desktop/mobile screenshots are included. This does not establish physical-device, assistive-technology or inbox behavior. Copy and download controls were not exercised end to end.

Catalog preview shows browser rendering only. Check 600, 375 and 320px widths for all five templates and every component. No horizontal overflow; headlines readable; two-story rail stacks; scores remain aligned; footer reachable; sponsor images legible. Check search, family filter, tab navigation, viewport controls, downloads and copy. Dark canvas is not an inbox test.

## Email-client matrix — all pending

| Environment | Tests |
|---|---|
| Outlook Windows classic, 100% and 125% scaling | Fixed width wrapper, table gaps, font fallback, button padding, score clipping, GIF first frame |
| New Outlook and Outlook.com | Layout, links, image scaling, forced dark mode |
| Gmail web / iOS / Android | Media-query survival, dark inversion, clipping, long strings, image blocking |
| Apple Mail macOS / iOS | Responsive layout, automatic data links, image scaling, dark mode, VoiceOver order |
| Yahoo web/mobile where audience warrants | Mobile width, links, background colors |
| Plain-text inbox | Reading order, copy parity, final URL readability, opt-out |

For each cell record date, template/version, device/client version, screenshot or receipt, tester, issue and pass/fail. Obtain real delivered HTML via a seed send; opening an HTML file does not satisfy these checks. Litmus or Email on Acid is appropriate if available. Re-test after Eloqua changes markup or links.

## Stress tests before acceptance — pending

- Long team names, three-digit scores, 100-character headline, long destination text and absent optional image. Restore approved content limits after deliberate stress testing.
- Images blocked; animation unavailable; web fonts unavailable (none required); head media query removed; 200% zoom; keyboard order and screen-reader reading order.
- Sponsor banner/disclaimers at 320px. If not legible, obtain a mobile-safe approved asset; do not simply crop or shrink legal copy.
- Final HTML after Eloqua processing comfortably under Gmail’s approximate 102KB clipping threshold; this is a practical target, not a guaranteed cross-client limit. Aim <80KB to leave room for ESP markup. Review complete footer delivery.
- Optimize source GIF/JPEG payload before sending. Verify static first frame and source artwork text after compression.

## Send-blocking checklist

- [ ] Every example.invalid link replaced; all live destinations opened and approved.
- [ ] Relative asset paths remapped to production HTTPS URLs.
- [ ] Preferences contact merge, Aggie AM opt-out and all-athletics unsubscribe tested using a seed contact; suppression confirmed.
- [ ] Sender, reply-to, postal details, subject, preheader and plain-text edition approved.
- [ ] Current results, dates, times/timezones, rankings, copy and offer terms approved.
- [ ] Sponsorship placement, links, art, legal copy and reuse permissions approved.
- [ ] Client matrix and accessibility/stress tests passed; no blocking rendering issue.
- [ ] Staff editor independently produces next edition successfully.
- [ ] Eloqua asset/version IDs and rollback export saved; marketing operations authorizes launch.

## Owners

Editorial/Sports Information owns facts. Brand owns marks/visual approval. Sponsorship owns contractual placements and legal artwork. Marketing Operations owns account configuration, preference behavior, deliverability and launch. The email implementer owns source integrity and fixes. Assign named owners during the pilot.
