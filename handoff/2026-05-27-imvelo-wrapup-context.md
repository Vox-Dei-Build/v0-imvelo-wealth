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

### Internal review readiness
This lane is now appropriate for internal review only. It is not public-launch-ready, but it is materially safer and more premium than the previous wrap-up baseline because unsupported proof has been removed, the first screen is stronger, the service presentation is quieter, and trust is based on confirmed or traceable details.

### Verification
- `pnpm build` passed on 2026-05-27.

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
