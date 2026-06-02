# Imvelo — Wrap-up Context Handover

## Worktree
- **Path:** `/Users/admin/Sites/vox-dei/v0-imvelo-wealth-wrapup-2026-05-27`
- **Branch:** `feat/imvelo-wrapup-handoff-2026-05-27`
- **Base commit:** `1412baa` — `feat: sync main changes into imvelo-wealth branch`

## Important Repo Reality
The active implementation work was **not pushed to `main`**.

Current repo state observed when this handover was created:
- `main` points at `1412baa`
- `origin/main` also points at `1412baa`
- original active branch: `feat/imvelo-design-handoff-phase-1`
- original worktree path: `/Users/admin/Sites/vox-dei/v0-imvelo-wealth`
- original worktree contains a **large set of uncommitted local changes**
- a selected subset of those local changes has now been copied into this new worktree for wrap-up review
- the original worktree still remains the broader source lane with additional local work not yet brought across

## Why This Worktree Exists
This worktree is meant to be the **clean wrap-up / review lane** for the current Imvelo state, with context preserved, without assuming the unfinished design/dev changes should be shipped.

A first selective carry-over has now been applied here so this lane includes the safe contact/legal/supporting changes that were already prepared.

## Client / Commercial Constraint
This is **client work that has not been paid for yet**.

Implication for next steps:
- do **not** publish as an openly accessible production site
- preferred release mode for now is **password-protected / internal-only viewing**
- treat public deploy decisions as approval-gated

## Product / Design Context
- The material currently provided by the client is still considered the **older pack**
- a **newer design direction** is still expected from the designer
- there are also additional **design feedback points** still to be applied
- this means the current site should be treated as a **reviewable interim state**, not final creative sign-off

## Team / Content Context
The folder already contains **headshots**, but the client is still expected to provide / finalise:
- names
- professional background
- credentials
- role/title details
- other team profile content

Until those are confirmed:
- avoid presenting team proof as fully final
- avoid over-claiming bios/credentials
- prefer placeholders or restrained copy where necessary

Known team update already received:
- **Siba** has also obtained her **CFP®** designation

## Known Client-Confirmed Details So Far
From the latest client reply, the following were confirmed for use:

### Company
- FSP Licence Number: `49944`
- Company Registration: `2018/195882/07`

### Contact
- Phone: `010 109 5097`
- Emails:
  - `info@imvelowealth.co.za`
  - `admin@imvelowealth.co.za`
- Address:
  - `EPPF Office Park, 24 Georgian Cres E, Bryanston East, Johannesburg, 2152`
- Office hours:
  - `09:00 – 17:00`

### Social
- LinkedIn: `https://www.linkedin.com/company/imvelo-wealth-solutions/?viewAsMember=true`
- Instagram: `https://www.instagram.com/imvelowealth/`
- Facebook: `@imvelowealth`
- X/Twitter: `@imvelowealth` (low activity)
- TikTok: `https://www.tiktok.com/search?q=imvelowealth&t=1779221171365`

### Team fact confirmed after handover creation
- **Siba Njoba** has also obtained her **CFP®** designation

### Legal Source Direction
Client indicated that legal/compliance docs are available on the existing live website, including references such as:
- PAIA Manual
- POPIA privacy statement
- Treating Customers Fairly
- Conflict of Interest Management Policy

## Still Pending / Blocked
### Content
- final team names / roles / credentials / bios
- testimonials
- case studies (optional, later)
- updated designer-supplied visual direction
- explicit WhatsApp number confirmation if a WhatsApp CTA is required

### Product / Release
- decision on how password protection should be applied
  - app-layer basic auth
  - platform password gate
  - private preview only
- decision on whether additional unfinished local work from the original worktree should be merged later

## Original Worktree Snapshot (for recovery later)
At handover creation time, the original worktree had many local changes across:
- homepage / navigation / footer / contact / consultation
- service pages
- resources pages
- legal pages
- regulatory / proof sections
- team / testimonials / media sections
- added routes like privacy, terms, thank-you, wealth-score, sitemap, robots, etc.

Because those changes are still **uncommitted local work**, they should be reviewed before any adoption into this wrap-up lane.

## Changes Already Carried Into This Worktree
The following changes were intentionally copied from the original local lane into this wrap-up worktree:
- updated footer company/contact details
- updated contact page company/contact details
- added media/social section file
- added mobile CTA bar file
- added thank-you page
- updated hero/about/CTA copy and office image labels
- added privacy page
- added terms page

These are now part of the wrap-up lane and should be treated as the current working baseline here.

## Recommended Next Steps
### Phase 1 — Review / Contain
1. keep this lane separate from the original broader uncommitted implementation lane
2. decide password-protection approach for internal review only
3. capture the outstanding design feedback points in writing

### Phase 2 — Wrap-up Adjustments
4. review the carried-over changes against the current client/commercial constraint
5. remove or soften anything that feels too final for an unpaid/internal-only state
6. avoid locking in old design decisions if a newer designer pass is imminent

### Phase 3 — Interim Review Build
7. prepare an internal-only preview
8. keep proof/team/testimonial surfaces conservative until the client confirms final content
9. do not treat the site as public-ready until payment + design + content are aligned

## Notes For Whoever Picks This Up
- This worktree is now the preferred wrap-up lane for current review work
- The original lane still contains useful progress, but it is mixed with unfinished assumptions and extra scope
- The commercial constraint matters: **internal review only until approved otherwise**
- If adopting anything further from the original worktree, do it deliberately and in slices

## 2026-05-27 Internal Review Wrap-up Pass

### Premium-feel assessment
The earlier Vercel direction felt more premium because it had stronger first-screen confidence: larger type, more whitespace, less brochure-like detail, and a clearer sense that Imvelo is a serious advisory firm rather than a generic finance template.

The wrap-up lane was weaker because it still contained:
- invented testimonials, case studies, pricing, AUM/client-count claims, return claims, and response-time promises
- too many cards and too much sales copy
- broken `/bayport-house.jpg` usage
- missing-link risk on service/resource CTAs
- generic value/service/process sections that diluted the advisory positioning
- fake team profiles instead of the available real headshots and confirmed CFP® update

The highest-leverage move was to remove weak proof and make the site feel more deliberate: fewer sections, larger editorial hierarchy, restrained trust signals, real leadership imagery, and conversion paths based only on confirmed details.

### Implementation changes made in this pass
- Added `middleware.ts` with Basic Auth gating for internal review.
  - Gate is enabled by default.
  - Set `IMVELO_REVIEW_USER` and `IMVELO_REVIEW_PASSWORD` before sharing a runtime preview.
  - Set `IMVELO_REVIEW_GATE=off` only when deliberately disabling the gate.
  - If credentials are missing while the gate is enabled, runtime access returns a 503 rather than exposing the site publicly.
- Added noindex/nofollow metadata and `X-Robots-Tag` headers for gated responses.
- Disabled Vercel Analytics by default; it only renders when `NEXT_PUBLIC_ENABLE_ANALYTICS=1`.
- Restored the missing `public/bayport-house.jpg` asset from the original worktree because the wrap-up lane already referenced it.
- Added real headshots from `/Users/admin/Downloads/Imvelo/team/`:
  - `public/palesa-tlholoe.jpeg`
  - `public/siba-njoba.jpeg`
- Reworked the homepage:
  - stronger full-bleed premium hero
  - confirmed FSP / registration / location trust rail
  - reduced value proposition
  - simplified services presentation
  - calmer four-step process
  - removed unsupported testimonials and case studies
  - replaced them with verifiable trust architecture and compliance links
  - simplified CTA
- Reworked About:
  - removed unsupported AUM/client/satisfaction/years stats
  - removed generic values section from the page flow
  - used Palesa and Siba only, with CFP® badges, without inventing final bios
- Reworked Services:
  - removed unconfirmed pricing from service listing/detail surfaces
  - corrected phone number to `010 109 5097`
  - removed missing guide/resource links
- Reworked Resources:
  - removed placeholder blog/resource archive and newsletter signup from the page flow
  - surfaced the existing media/commentary section instead
- Reworked Contact/Consultation:
  - form submissions now prepare a mailto email instead of logging to console
  - removed unconfirmed “free”, “60-minute”, “24 hours”, and similar promises
- Cleaned Terms / Thank You copy to avoid unconfirmed fee, tool, and response-time claims.

### Current blockers / dependencies
- Final designer direction is still pending.
- Final team profile content is still pending.
- Testimonials and case studies are still pending and should not be reintroduced until confirmed.
- WhatsApp CTA remains blocked until the correct WhatsApp number is confirmed.
- Compliance PDFs currently link to the existing Imvelo site; confirm whether they should be re-hosted in this project before any public launch.
- The current review gate needs runtime credentials configured before sharing.
- If link previews need to work in WhatsApp or similar apps, use the preview-token path described below instead of relying only on Basic Auth.

### Internal review readiness
This lane is now appropriate for internal review only. It is not public-launch-ready, but it is materially safer and more premium than the previous wrap-up baseline because unsupported proof has been removed, the first screen is stronger, the service presentation is quieter, and trust is based on confirmed or traceable details.

### Verification
- `pnpm build` passed on 2026-05-27.

## Share / Preview Link Note
Basic Auth alone can block WhatsApp, Slack, and other unfurl bots from reading metadata, which prevents rich link previews from rendering.

To preserve internal-only access while still allowing shareable previews:
- keep `IMVELO_REVIEW_GATE` enabled
- set `IMVELO_REVIEW_USER` and `IMVELO_REVIEW_PASSWORD` for direct browser access
- also set `IMVELO_PREVIEW_TOKEN` to a long random value
- share links in this format:
  - `https://<preview-domain>/?preview=<token>`

Current middleware behavior:
- `/og/*` routes are allowed through so Open Graph images can render
- a valid `?preview=<token>` query grants access and drops a short-lived secure cookie
- all responses still carry `noindex, nofollow, noarchive`
- this is safer for client review sharing than disabling the gate entirely

## 2026-05-27 Follow-up Restoration Pass

After internal review feedback, the first wrap-up pass was adjusted to restore several premium / credibility elements that had been removed too aggressively:

- Reworked the homepage hero again with a stronger full-bleed image treatment, premium typography, motion, and a cleaner proof rail.
- Restored the dictionary-style Imvelo name/story block on the homepage and About page.
- Restored the provider access strip with Allan Gray, Ninety One, STANLIB, Sanlam, Old Mutual, Discovery, Momentum, Hollard, and PPS, using a subtle animated marquee.
- Restored the comparison table, but reframed it as “Product-led Advice vs. Planning-led Advice” to avoid overclaiming unconfirmed commission details.
- Restored article/resource listings and the resource detail route.
- Restored individual service routes for:
  - `/services/financial-planning`
  - `/services/estate-planning`
  - `/services/employee-benefits`
  - `/services/retirement-counselling`
  - `/services/financial-coaching`
  - `/services/business-assurance`
- Updated services overview, services grid, and footer service links so service CTAs no longer all point to the same generic page.
- Replaced the low-resolution Siba image with the higher-resolution `public/siba-njoba.jpg` from the original lane.
- Added lightweight CSS animation utilities for the hero reveal, hero image drift, and provider marquee.

### Follow-up verification
- Cleared `.next`, rebuilt cleanly, and `pnpm build` passed.
- Verified gated production server responses:
  - homepage includes restored dictionary, provider strip, comparison table, and service links
  - all six service detail routes return `200`
  - `/resources/two-pot-retirement-system` returns `200`
  - Resources page includes restored articles and the media section

## 2026-05-27 Animation, Typography, Service, and Cookie Pass

This pass responded to the latest internal feedback that the hero still needed to feel closer to the earlier premium Vercel direction, animations felt weak, typography felt generic, partner credibility needed more useful interaction, service cards were too noisy, and the site needed a professional cookie preference surface.

### What changed
- Replaced the temporary custom reveal utilities with the `aos` package and initialized it through `components/aos-provider.tsx`.
- Updated typography from the previous generic pairing to `Manrope` for interface/body text and `Source Serif 4` for premium editorial headings.
- Reworked the homepage hero back toward the earlier editorial structure:
  - centered, restrained first screen
  - large serif headline
  - calm advisory positioning
  - primary and secondary CTAs
  - office image and proof rail retained below the copy
- Kept the Imvelo dictionary/name-story section restored on the homepage and About page.
- Reworked the partner/provider section into a clickable, horizontally scrolling provider strip.
  - Current provider references are linked for internal review.
  - Final logo usage and public partner presentation still need approval before launch.
- Reworked the homepage services overview into a quieter advisory index instead of stacked marketing cards.
- Reworked the `/services` page into editorial service rows with scope and outcome columns instead of noisy cards.
- Added a professional cookie preference banner in `components/cookie-consent.tsx`.
  - Essential cookies are explained as required.
  - Analytics and marketing preferences are opt-in.
  - Preferences are stored locally in the browser.

### Premium impact
- The hero now has a stronger, calmer first impression and avoids the generic finance-template feeling.
- The new font pairing is more appropriate for a premium advisory firm: sober, legible, and editorial without feeling decorative.
- AOS gives the site subtle motion with less custom CSS overhead.
- Services feel more considered and less like a product catalogue.
- Provider access is more credible because the names are interactive and visibly structured, while still marked as review-stage material.
- Cookie handling now feels closer to a professional financial-services site instead of an afterthought.

### Still blocked / dependencies
- Final designer direction is still pending.
- Final partner-logo usage and any formal provider/partner wording must be approved before public launch.
- Final team profile content, testimonials, and case studies are still pending.
- WhatsApp CTA remains blocked until the correct WhatsApp number is confirmed.
- The cookie banner is a practical internal-review implementation, not a substitute for final legal review.

### Internal review readiness
The site is stronger for internal client review after this pass. It is still not public-launch-ready, but the hero, motion, typography, service presentation, provider strip, and cookie preference surface now better support a premium advisory-firm impression while staying conservative about proof.

### Verification
- `pnpm build` passed on 2026-05-27 after the AOS, typography, service, partner-strip, and cookie-consent updates.
- Browser spot-check passed on the gated local production URL:
  - homepage hero renders with the restored editorial direction
  - cookie preference banner renders with preference actions
  - `/services` renders the quieter editorial service-row layout

## 2026-05-27 Provider Rail Correction

Latest feedback identified that the homepage provider strip still looked unresolved: the left copy column compressed badly and the provider names felt like generic cards.

### What changed
- Reworked `components/partner-strip.tsx` into a cleaner premium credibility rail:
  - heading and review caveat now sit above the marquee instead of in a narrow side column
  - provider names display as larger typographic wordmarks inside a full-width scrolling rail
  - links remain clickable for internal review
  - added `id="provider-access"` for direct review access
- Removed `Product-led Advice vs. Planning-led Advice` from the homepage.
  - The comparison table still remains on `/services`, where it has more context and does not interrupt the homepage flow.

### Verification
- `pnpm build` passed after the provider rail correction.
- Authenticated homepage HTML contains `A wider provider universe`.
- Authenticated homepage HTML has `0` occurrences of `Product-led Advice`.
- Authenticated `/services` still contains the comparison table.
- Basic Auth still returns `401` without credentials and `200` with review credentials.
- Review-mode SEO was tightened after verification:
  - page metadata now resolves to noindex unless `IMVELO_REVIEW_GATE=off`
  - review-mode `robots.txt` disallows all crawling
  - sitemap output is suppressed unless public indexing is deliberately enabled

## 2026-06-01 Client Feedback Alignment Pass

Client feedback received after review made the direction clearer: this is not a rebrand, the existing Imvelo Wealth logo and identity must remain, the site should move closer to the earlier visual/stock-image feel, copy should follow the current website/company-profile terminology, and the presentation should use South African financial-services language.

### Source material reviewed
- `/Users/admin/Downloads/Imvelo/logo.jpeg`
- `/Users/admin/Downloads/Imvelo/IWS Company Profile 2026.pdf`
- `/Users/admin/Downloads/Imvelo/Proposal_Hybrid_Wealth_Management_Strategy - Imvelo Wealth.pdf`
- `/Users/admin/Downloads/Imvelo/WhatsApp Image 2026-05-29 at 05.35.02.jpeg`
- `/Users/admin/Downloads/Imvelo/team/siba_njoba.jpeg`
- Reference sites:
  - Citadel: strong image-led hero, concise “wealth journey” sections, premium restraint
  - Nicola Wealth: more editorial/visual wealth-management feel
  - PSG About: clear division/service architecture and South African terminology

### What changed
- Restored the client’s existing logo identity instead of the interim text/monogram treatment.
  - Added `public/imvelo-logo.jpeg`
  - Added cropped web-ready `public/imvelo-logo-wide.jpeg`
  - Updated navigation and footer to use the existing logo.
- Reinforced the preferred short name: `Imvelo Wealth`.
  - Replaced visible “Imvelo” short-form references with “Imvelo Wealth” where appropriate.
- Updated the Imvelo meaning section:
  - changed from Zulu/nature-origin copy to Xhosa “to bring forth”
  - aligned wording with the company profile: nurture, grow, and preserve wealth.
- Reworked the hero away from the physical office/building story.
  - removed the Bayport/office image from the hero
  - restored a stock-style financial-planning image closer to the first visual direction
  - changed the proof rail from “Office / Bryanston East” to “Founded / 2018”
- Replaced the partner marquee/cards with the client-supplied uniform partner-logo graphic.
  - Added `public/imvelo-partner-logos.jpeg`
  - Kept provider links below the graphic for internal review.
- Updated Siba’s headshot to the client-supplied image:
  - Added `public/siba-njoba-client.jpeg`
  - Updated `components/team-section.tsx`.
- Added client material graphics for future/internal visual use:
  - `public/imvelo-services-graphic.jpeg`
  - `public/imvelo-demographics-graphic.jpeg`
- The supplied demographics graphic was used briefly, then removed from the About page in the follow-up correction below.
- Reduced homepage text weight:
  - removed the trust-architecture section from the homepage flow
  - added a concise `Latest Resources` preview on the homepage
  - kept fuller resource content on `/resources`
- Updated South African terminology:
  - Employee Benefits now uses pension/provident funds, group retirement plans, group risk benefits, group investment plans, and employee wellness workshops.
  - Business Assurance now uses buy and sell, key man insurance, contingent liability, and preferred compensation.
  - Removed visible “retention schemes” wording.
- Reduced physical-office emphasis:
  - visible homepage/contact/footer language now uses Sandton/Johannesburg or general contact details rather than the physical building story.

### Robo-advice / digital strategy context
The hybrid wealth strategy PDF and client note introduce a future roadmap:
- white-labelled robo-advice via One-moola / Sechaba
- FSCA approval to offer automated advice
- target launch later in 2026, possibly September/October
- intended move toward self-service and a more interactive Allan Gray-like model
- funding still being explored

This is important product direction, but it should not yet be positioned as a live public capability. Current recommendation: keep it in internal strategy notes and prepare future IA/CTA room for it, but only publish once launch scope, compliance wording, and funding/build plan are confirmed.

### Verification
- `pnpm build` passed on 2026-06-01.
- Local gated preview checks passed:
  - unauthenticated `/` returns `401`
  - authenticated `/`, `/about`, and `/services/employee-benefits` return `200`
  - homepage included the Imvelo logo treatment used at that stage
  - homepage includes the partner-logo image
  - homepage includes `Latest Resources`
  - homepage has `0` `Product-led Advice` occurrences
  - homepage has no visible `Bryanston`, `EPPF`, `Georgian`, or `office park` mentions
  - About page uses `siba-njoba-client.jpeg`

### Still pending / blocked
- Client still intends to send websites they like and the organogram.
- Partner logo usage still needs final public permissions/approval.
- Final team profile pack is still pending.
- Robo-advice content must remain internal-roadmap only until launch/compliance wording is confirmed.
- Designer-updated direction is still pending.

## 2026-06-01 Partner Logo Asset Pass

The client rejected the flattened WhatsApp partner-logo screenshot and asked for individual web-sourced logos instead.

### What changed
- Replaced the single partner screenshot layout in `components/partner-strip.tsx` with a clickable uniform provider wall.
- Added individual local partner assets under `public/partners/`:
  - Ninety One
  - Liberty
  - Sanlam
  - PPS
  - Momentum
  - Discovery
  - Allan Gray
  - Old Mutual
  - STANLIB
  - Hollard
- Ordered the providers to match the client-supplied reference image.
- Used dark tiles for white/reversed marks so the logos read cleanly.
- Kept a visible internal-review note that public logo usage must be cleared before launch.

### Source caveat
- Most assets were pulled from provider public web domains or provider page source.
- Ninety One and Old Mutual currently use public-logo-database fallbacks because direct provider-domain access was blocked or did not expose a usable full logo in the scrape.
- These assets are acceptable for internal review only. Final launch should use approved brand files or written provider permissions.

### Verification
- `pnpm build` passed on 2026-06-01 after the partner logo replacement.
- Local gated preview checks passed:
  - unauthenticated `/` returns `401`
  - authenticated `/` returns `200`
  - authenticated `/partners/sanlam.svg` returns `200`
- Browser visual check passed on the homepage partner section after AOS animation completed.

## 2026-06-01 Logo / Demographics Correction

Feedback called out two issues from the prior pass: the Imvelo logo still looked like a pasted JPEG with a visible background, and the target-demographics material should not have been shown as a raw screenshot.

### What changed
- Generated `public/imvelo-logo-transparent.png` from the supplied client logo and switched navigation/footer to that transparent asset.
- Removed the raw `imvelo-demographics-graphic.jpeg` presentation screenshot from the About page.
- Rebuilt the same broad audience intent as native, editable site content under a restrained `Client Focus` section:
  - retirees
  - working professionals
  - mid-career professionals
  - employers and business owners

### Verification
- `pnpm build` passed after the correction.
- Local visual check confirmed:
  - the navigation logo no longer renders as a white rectangular JPEG block
  - the About page uses native text/UI for client focus instead of the target-demographics screenshot

## 2026-06-01 V0 Hero Restoration

The original v0 hero direction was restored structurally after feedback that the split hero still did not match the first premium version.

### What changed
- Reworked `components/hero-section.tsx` back to the original centered hero composition:
  - centered credential pill
  - large centered editorial headline
  - centered CTA pair
  - broad image panel underneath
- Kept current client-safe copy instead of reinstating unsupported older claims such as commission/fee promises.
- Used the confirmed review proof items in the image panel:
  - FSP Licence Number `49944`
  - Company Registration `2018/195882/07`
  - Founded `2018`
- Tightened vertical spacing so the image panel is visible in the first viewport on desktop.

### Verification
- `pnpm build` passed after the hero restoration.
- Browser visual check saved the restored hero at `/tmp/imvelo-restored-v0-hero-tight.png`.

## 2026-06-01 Initial Commit Hero Restoration

The actual initial commit hero was checked from `eed43db` and restored more closely after clarification.

### What changed
- Restored the initial hero's core presentation:
  - centered announcement pill
  - `Build Wealth That Lasts Generations` headline
  - centered two-button CTA row
  - four-column trust/stat row
  - wide consultation image using `professional-financial-planning-meeting-with-diver.jpg`
- Intentionally did not restore unconfirmed claims from the initial commit:
  - `Trusted by 500+ South African families`
  - `R2.5B+ Assets Under Management`
  - `500+ Families Served`
  - `15+ Years Experience`
  - `98% Client Satisfaction`
  - `Download Wealth Guide` route, because `/resources/wealth-guide` is not present in this lane
- Replaced those with confirmed or currently safe items:
  - FSP Licence `49944`
  - Company Registration `2018/195882/07`
  - Founded `2018`
  - CFP® director-led advice

### Verification
- `pnpm build` passed after this closer initial-commit restoration.
- Browser visual checks saved:
  - `/tmp/imvelo-initial-commit-hero-restored.png`
  - `/tmp/imvelo-initial-commit-hero-lower-settled.png`

## 2026-06-02 Partner Copy / Spacing / Full Team Pass

Feedback called out that internal-facing provider-logo caveats had leaked into the visible page, that the philosophy and partner sections felt too tight, and that the team section did not reflect the supplied organogram.

### What changed
- Removed visible internal-review/provider-permission caveats from `components/partner-strip.tsx`.
- Replaced the partner intro with client-facing copy about a broader provider universe supporting planning-led advice.
- Increased breathing room in:
  - `components/brand-story-block.tsx`
  - `components/partner-strip.tsx`
- Rebuilt `components/team-section.tsx` from the organogram instead of showing only the two directors.
- Added local team image assets under `public/team/` for:
  - Palesa Tlholoe
  - Siba Njoba
  - Blendine Kika
  - Nicholas Minnie
  - Phakama Nyembe
  - Tshepang Ngobeni
  - Zanele Dube
  - Valerie Mabalane
  - Lebogang Pooe
- Team roles now reflect the organogram:
  - Directors & Wealth Managers
  - Financial Advisers
  - Client Service Consultant
  - Paraplanner
  - Compliance and Fiduciary Consultant

### Still to confirm
- Several non-director headshots arrived as unnamed WhatsApp images. They are placed for internal review, but the final headshot-to-person mapping should be confirmed before public launch.

### Verification
- `pnpm build` passed after the pass.
- Browser checks saved:
  - `/tmp/imvelo-philosophy-spacing-fix.png`
  - `/tmp/imvelo-partners-copy-spacing-fix.png`
  - `/tmp/imvelo-team-section-top.png`
  - `/tmp/imvelo-team-section-lower.png`
