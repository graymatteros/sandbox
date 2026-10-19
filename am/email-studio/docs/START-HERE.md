# Texas A&M Athletics email library

Review build · October 19, 2026 · No sends, publishing, Eloqua import or inbox validation performed.

Open `index.html` for the visual catalog. For copy-to-clipboard and the best preview behavior, serve this folder with a local static server. All five emails and the component previews also open directly from disk. Documentation is supplied as editable Markdown source.

## Deliverables

- `templates/`: five complete responsive HTML emails and plain-text companions: Aggie AM, game day, postgame, feature and ticket/campaign.
- `modules/`: 21 reusable, named table-row fragments plus complete preview documents. These are source HTML fragments, not native Eloqua component exports.
- `assets/`: authentic public artwork referenced in the supplied email. No downloaded recipient pixel or personalized URL.
- `source/build.py`: standard-library generator. Run `python3 source/build.py` from this folder, then `python3 source/validate.py`. The generator updates templates, modules, component docs and catalog manifest.
- `source/manifest.json`: tokens, component field contracts and template recipes.
- `docs/`: design, source audit, implementation and validation guidance.
- `reference/current-aggie-am-sanitized.html`: source layout reference with all links replaced and tracker removed. It is not a production master.

## Daily production

1. Duplicate the right recipe and assign a dated version, e.g. `TAMU_AggieAM_20261020_v01`. Keep the original master read-only.
2. Gather approved copy, schedules, scores, image rights, sponsor assets and destinations. The sample facts are from a received email; they have not been independently verified.
3. Edit the module body copy in the generator, or edit a dated HTML copy between BEGIN/END comments. The generator is the source of truth for rebuilding this library; manual output edits are overwritten by a rebuild.
4. In a full template, swap entire `<tr>…</tr>` module blocks inside the container table. Never paste a standalone module HTML document inside that table. Preserve head CSS, Outlook conditional table and the footer.
5. Use one utility bar, one masthead and one footer. Keep Aggie AM presenting sponsor, lottery banner before Rundown, and Dugout placement unless the sponsorship owner approves a change. Sponsors are not automatically licensed for other email types.
6. Update subject and preheader in the manifest recipe, the shell and plain-text edition. Ensure the plain-text edition has the same facts and usable final links.
7. Upload to a test asset in Eloqua. Replace every `example.invalid` URL using approved account components and links. Complete the guide and approval gates before launch.
8. A staff member who did not build the library must create the next edition, replace a hero, remove an optional section and send a test without breaking the layout. Record time and errors. That is the workflow acceptance test.

## Assembly rules

Email markup uses inline styles, presentation tables and a 600px Outlook wrapper. Head CSS controls mobile stacking and resets. Modules assume that shell and cannot independently supply it. Two-story cells stack below 620px; scores and three-stat strips remain side by side. Never add a new column count without testing. CSS rounding, animation and client dark-mode behavior are optional enhancements. Images and critical text have alternatives. No JavaScript is present in email outputs; the catalog has its own separate script.

The campaign uses the authentic Dugout Club offer rather than invented ticket inventory. Its essentials section is an explicitly documented campaign override of CV-02; CV-03 becomes a membership-information action. For a ticket sale, replace the offer, artwork, terms and both actions with approved ticketing content. Do not retain membership pricing as a ticket price.
