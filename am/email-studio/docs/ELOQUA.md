# Eloqua implementation & validation guide

## Verified documentation, not verified account behavior

Oracle documents HTML/ZIP upload into the Source Editor, with image processing and link review. Its current overview distinguishes Source Editor from Design Editor and says the Classic Source Editor should continue to be used for active campaigns, while Redwood Source Editor is Controlled Availability. Confirm this guidance against the A&M account and its current release before implementation.

- [Oracle: uploading HTML emails/templates](https://docs.oracle.com/en/cloud/saas/marketing/eloqua-user/Help/EmailEditing/HTMLEmail/CreatingNewEmailsByUploadingHTML.htm)
- [Oracle: HTML emails and editor status](https://docs.oracle.com/en/cloud/saas/marketing/eloqua-user/Help/EmailEditing/HTMLEmail/HTMLEmailOverview.htm)
- [Oracle: exporting HTML with Eloqua elements](https://docs.oracle.com/en/cloud/saas/marketing/eloqua-user/Help/Emails/Tasks/ExportingHTMLEmail.htm?Highlight=Export+to+HTML)

Documentation reviewed October 19, 2026. No A&M Eloqua account access or import was used for this build. This library does not contain tested native Design Editor modules, protected content regions, shared-content IDs or valid field-merge tokens.

## Implementation route

Start with a duplicated HTML master in the account’s supported Source Editor. Treat library fragments as controlled source blocks. Do not switch this master into a visual editor: the supplied email explicitly warns against doing so. The authoring experience in the catalog is a preview and source handoff, not an Eloqua integration.

If staff require native drag/drop or protected content, run a separate pilot: recreate one module in the account’s Design Editor, configure the actual permitted editing controls, test content changes/removal/reordering and inspect the delivered HTML. Shared content and dynamic content are account-owned options to investigate; they are not interchangeable with arbitrary table fragments. Prefer approved shared footer/header assets where appropriate, then verify their placement and mobile output. Do not promise content locking or a no-code assembly experience before the pilot passes.

## Import walkthrough

1. Administrator confirms permissions, business unit, sender identity, branding, approved footer/preference center, tracking policy and supported editor. Save an export of the current master with Eloqua elements.
2. In a test folder, upload one HTML template or a ZIP containing that template and assets. Oracle documents a 5MB upload limit; this complete library ZIP includes multiple templates and large originals and is **not** a one-click Eloqua upload package. Build a template-specific package with optimized assets below that limit, or upload HTML and select existing hosted images in the wizard.
3. Use Process files to upload/remap each relative `../assets/…` image to the approved image library. Check the resulting absolute HTTPS URL, dimensions and alt text. Do not use the original received email's recipient pixel.
4. Resolve all `https://example.invalid/KEY` destinations. Keys are human-readable build placeholders, **not Eloqua merge syntax**. Story, video, sponsor, game-info, ticket and membership links must be approved individually. Do not assume a clean short URL resolves to the right page until opened and checked.
5. Set the edition-specific view-online link using the account’s supported approach. Use the approved preference/unsubscribe component and validated field merge. The source notes that the preference center needs a contact-ID merge after `elq_cid=`; do not paste the original recipient’s value. Exact merge syntax must come from an account export or administrator, not this library.
6. Preserve the source footer’s distinction: all-athletics unsubscribe versus unchecking only Aggie AM. Verify actual preference-center behavior with a test contact and suppression state. General templates omit only the Aggie AM-specific sentence; all-athletics opt-out and postal/contact details remain.
7. Review click-tracking selection deliberately, including whether system preference/unsubscribe links need special handling. Let Eloqua generate its own tracking and required unsubscribe handling. Do not reuse received-message tracking, identity hashes, activity IDs or pixels.
8. Confirm sender/reply-to, subject, preheader and a complete plain-text version. Export the imported asset and compare it to the approved HTML. Check that responsive head styles, table widths, conditional comments and image references survived.
9. Send to seed contacts only. Complete client checks and compliance tests. Obtain editorial, brand, sponsorship and marketing-operations approval, then schedule through the normal team workflow.

## Field mapping

| Placeholder | Account configuration needed |
|---|---|
| VIEW_ONLINE_URL | Hosted edition or supported Eloqua system link |
| PREFERENCES_URL | Approved center + valid test-contact merge + unsubscribe handling |
| FOOTBALL_STORY_URL / VOLLEYBALL_URL / GOLF_URL / SOCCER_URL / XC_URL / BASEBALL_URL | Editorial-approved destination |
| VIDEO_URL | Approved public destination for touchdown clip |
| SPONSOR_BANNER_URL | Contract-approved sponsor destination |
| DUGOUT_URL | Current membership page and terms |
| GAME_INFO_URL / TICKETS_URL | Current game information / approved ticketing inventory |

VIU link entitlement is not inferred; the presenting sponsor module is unlinked until the sponsorship owner supplies the destination and requirements. Schedule rows intentionally contain no unapproved destination.

## Acceptance and rollback

A staff editor must independently build the next edition, replace copy/artwork, reorder two optional source blocks, remove one block, update the plain-text version and send a seed test. Confirm sponsor inventory, links and opt-out behavior remain intact. Save the accepted HTML, Eloqua asset/version IDs and test receipts. If import or editing alters the markup, revert to the saved source master; do not patch a live campaign. Track native-editor feasibility separately from HTML template acceptance.
