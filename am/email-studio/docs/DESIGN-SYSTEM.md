# Visual system & asset specifications

This is a proposed editorial extension of the supplied Aggie AM, not an officially approved A&M brand standard.

| Token | Value | Application |
|---|---|---|
| Maroon | #500000 | Masthead, statement panels, CTA |
| Ink | #211B1B | Body copy on white/paper |
| Warm paper | #F5F2EB | Moment, stat and footer surfaces |
| White | #FFFFFF | Main surface; text on maroon |
| Email width | 600px | Fluid width with fixed Outlook wrapper |
| Desktop gutter | 36px | 528px usable content width |
| Mobile gutter | 22px | Applied under 620px |
| Body | Arial 16px / 26px | No web-font dependency |
| Display | Georgia bold 32–46px | Headlines kept short |
| Metadata | Arial bold 11px / 16px | Uppercase; 2px tracking |
| Score | Arial bold 76px / 90px | Two team cells, three digits maximum |
| Action | Arial bold 14px / 20px | 16px vertical + 24px horizontal padding |

Use a single lead story and primary action. Keep label/headline/body/action order. Use 8/16/24/32/40px spacing steps. Large editorial type is intentional; avoid more than three headline lines. All styles essential to desktop layout are inline. Do not use flex, grid, absolute positioning or CSS background photos in email markup.

## Asset preparation

| Asset | Display | Delivery guidance |
|---|---|---|
| Athletics mark | 50px wide | Transparent PNG; retains supplied proportions |
| Aggie AM mark | 280px wide | Keep original artwork, no retyping or stretching |
| VIU by HUB | 120px wide | On white; 16px minimum clear space; sponsorship owner approves actual entitlement and prominence |
| Editorial image | 528px wide, fluid | Supply 1056px wide JPEG, ideally <200KB; 16:9 is a recommended new-photo crop, not a constraint on existing artwork |
| Sponsor banner | 528px wide, fluid | Preserve intrinsic aspect ratio, legal copy and approved linked destination |
| Dugout artwork | 528px wide, fluid | Supplied artwork retained; do not crop embedded text |
| Motion | 528px wide, fluid | GIF optional; first frame must explain the moment; add adjacent textual CTA |

The source GIF is approximately 3MB and Dugout JPEG approximately 2.7MB. These authentic originals are included for fidelity; optimize a derivative before production (GIF ≤1MB target; JPEG ≤250KB target), compare image quality and preserve sponsor/legal text. Do not upscale small original assets. Host production images in the approved Eloqua library/CDN using HTTPS. Relative local URLs must be remapped during import. Reference image sizes are listed in `assets/manifest.json`.

## Accessibility and resilient design

Headings are semantic h2 elements within the email module system; the email document title and masthead identify the edition. Use descriptive image alternatives and meaningful link labels. Live text carries scores, times and offer details. Layout tables use `role=presentation`. White on maroon and ink on white/paper are high-contrast treatments; verify all new sponsor art and colors. Do not communicate wins, losses or home/away solely through color. Buttons offer a large target; inline story links remain standard text links.

Light mode is the design baseline. The email declares light color scheme and only adjusts the outer body in clients honoring the dark query. It does not promise control of forced inversion. Avoid invisible transparent dark marks: current mastheads keep marks on explicit backgrounds. Test logos, sponsor panels and buttons in Gmail, Apple Mail and Outlook dark modes. The catalog’s dark canvas is a review surround only.

For motion-sensitive readers, use a static approved image in a production variant. Do not rely on prefers-reduced-motion being honored by inboxes.
