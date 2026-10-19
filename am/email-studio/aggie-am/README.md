# Aggie AM — current Dior-inspired edition

Current design reference: https://emaillove.com/dior-email-design-4

Open index.html for the live local review, original-edition comparison, three viewport sizes and Replay sunrise. email.html is the standalone email. The earlier editorial, F1 and Apollo studies remain in email-v1.html, email-f1.html and email-apollo.html, with their source builders preserved.

## This pass

- Original Aggie AM wordmark with a deterministic sunrise GIF: sun rises from the i, then rays appear. Lettering is taken directly from the supplied artwork. The completed mark is the first frame for clients that show a static GIF frame. It plays once. A static version and reduced-motion CSS are included. This is a proposed motion treatment, not a brand-approved replacement.
- Continuous cream canvas, centered condensed headlines, maroon accent rules and pill actions, using the Dior reference's editorial spacing.
- Big 3: football photo across the section, copy and score/stat treatment below; volleyball and a text-first golf treatment in two equal-width blocks. The golf treatment represents both teams without assigning one team's image to both.
- Weekend moment: one headline, original animated catch, seven-word caption and one action.
- Rundown: four result rows, one useful detail per result and a visible recap link. It remains secondary to the Big 3.
- Dugout: supplied artwork, two sentences and one membership action.
- Schedule: all 13 source events, with date, sport, opponent/event, time, location and TV. Desktop gets an actual semantic six-column table; narrow screens get labeled values per event. No fields are discarded. Golf Channel is carried over from the supplied men's golf story; an em dash means the source did not list TV. Times otherwise follow the supplied schedule, including TBA; timezone confirmation remains required before a send.

## Files and regeneration

Run `python3 source/build.py` for the current email. It writes email.html and source/events.json. The source contains the exact editable story data and layout functions.

Logo animation builder: source/animate-logo.py requires Pillow. The bundled desktop Python runtime includes it. Output is assets/aggie-am-sunrise.gif and assets/aggie-am-static.png. This is deterministic motion compositing from original logo pixels, not generative photography or AI-redrawn lettering.

source/validate.py checks email structure, local assets, tracking hygiene, table semantics, all 13 event rows and six values per row. Its report is source-checks.json. browser-checks.json records the browser measurements.

## Sources and privacy

Copy and schedule data come from the received October 19 Aggie AM. Football and volleyball photos come from the official edition-linked stories. Additional golf photos remain available in assets/ for future variants. Image provenance is in source/assets.json. The original sponsor artwork and Dugout graphic remain included. Copyright/brand/sponsorship review follows A&M's workflow.

Clean story destinations retain no recipient query parameters. The received-message pixel is excluded. View-online and preference links are still example.invalid placeholders. Images are relative local files until hosted and remapped in Eloqua. The original comparison retains its design and content, with replaced links and no recipient pixel.

## Verification limits

Browser checks passed at 600, 375 and 320px, with all visible image assets loaded, no horizontal overflow and 13 schedule events at every width. Replay sunrise was exercised. This does not establish Eloqua import, delivered inbox behavior, client animation support, accessibility conformance or tested opt-out behavior.

Before sending, confirm source facts, schedule time zones and offer availability; optimize large original artwork/GIFs; configure hosted images and system links; obtain normal brand/sponsor approvals; and send seed tests to the target clients. Border radii, condensed font availability and reduced-motion handling vary by client; layout must remain usable with their fallbacks.
