# SPD Cal Poly — SERP Audit (2026-05-18)

Site under audit: **spdcalpoly.com** (production), spdcalpoly.org (legacy, redirecting via 301s per recent commits).
Method: live Google searches via Chrome with `&pws=0&gl=us` (depersonalized, US geo). Position = SPD's best-ranked owned property (site, IG, FB) per query.

## Headline findings

| Query | SPD site rank | SPD on page 1? | Theta Tau rank | Verdict |
|---|---|---|---|---|
| `cal poly engineering frat` | #2 (spdcalpoly.com) | Yes | #3 (thetatauslo.org) | **Win** |
| `cal poly engineering fraternity` | #1 (spdcalpoly.com) | Yes | #3 (thetatauslo.org) | **Win** |
| `cal poly slo engineering fraternity` | #1 (spdcalpoly.com) | Yes | #3 | **Win** |
| `cal poly rush engineering fraternity` | #1 + #4 (/recruitment) | Yes | #6 | **Win** |
| `computer science fraternity cal poly` | #1 (spdcalpoly.com) | Yes | #6 | **Win** |
| `best engineering fraternity cal poly` | #1 (spdcalpoly.com) | Yes | #4 | **Win** |
| `sigma phi delta cal poly` | #1 (spdcalpoly.com) | Yes | n/a | **Win** (brand) |
| `engineering greek life cal poly` | #2 (spdcalpoly.com) | Yes | **#1 (thetatauslo.org)** | **Lose to Theta Tau** |
| `stem fraternity cal poly` | #2 (spdcalpoly.com) | Yes | #3–4 | Marginal win |
| `cal poly coed engineering fraternity` | not on p1 | No | #1 (thetatauslo.org) | **Lose** (expected — SPD is male-only) |
| `cal poly professional fraternities` | not on p1 | **No** | #6 (thetatauslo.org) | **Lose to Theta Tau** |
| `cal poly professional frats` | not on p1 | **No** | #6 (thetatauslo.org) | **Lose to Theta Tau** |
| `cal poly frat` | not on p1 | No | not on p1 | Both lose to greeklife.calpoly.edu / panhellenic / IFC / Greekrank |
| `cal poly fraternity` | not on p1 | No | not on p1 | Both lose to university properties |
| `cal poly frats` | not on p1 | No | not on p1 | Both lose to university properties |
| `cal poly fraternities` | not on p1 | No | not on p1 | Both lose to university properties |
| `academic fraternity cal poly` | not on p1 | No | not on p1 (Reddit mention only) | Both lose |

## User's three claims — verified

1. **"We win 'cal poly engineering frat' and 'cal poly engineering fraternity'"** — confirmed. spdcalpoly.com ranks #2 and #1 respectively, ahead of thetatauslo.org both times.
2. **"We lose to Theta Tau on 'frats' / 'fraternities'"** — partially. On the bare-head terms (`cal poly frats`, `cal poly fraternities`, `cal poly frat`, `cal poly fraternity`) **neither SPD nor Theta Tau makes page 1** — the SERP is dominated by greeklife.calpoly.edu, calpolypanhellenic.org, Greekrank, calpolyinterfraternitycouncil.org, Cal Poly Now, and IG @calpolyfsl. Theta Tau outranks us on `engineering greek life cal poly` (their #1 vs our #2), which is the closest match to the user's claim.
3. **"We don't make front page on 'cal poly professional fraternities/frats'"** — confirmed. Page 1 for both is owned by Delta Sigma Pi (calpolydeltasig.com), Alpha Kappa Psi (sloakpsi.com), and Theta Tau (thetatauslo.org). SPD is absent. This is a clean loss — Theta Tau does outrank us here.

## Other queries worth optimizing for

Strong opportunities where we already win or are #1–#2, worth defending:
- `sigma phi delta cal poly` — brand, currently #1
- `cal poly slo engineering fraternity` — currently #1
- `cal poly rush engineering fraternity` — currently #1 + #4 (recruitment landing page)
- `computer science fraternity cal poly` — currently #1
- `best engineering fraternity cal poly` — currently #1

Gaps where we should push for page 1 (high commercial intent for recruitment):
- `cal poly professional fraternities` / `…professional frats` — lost to Theta Tau + business frats. **Add "professional fraternity" copy and an H1/title variant on the home or recruitment page.**
- `engineering greek life cal poly` — lost to Theta Tau (#1). Add "engineering Greek life" phrasing in body copy and an H2.
- `academic fraternity cal poly` — no engineering frat appears. Open lane if we add "academic fraternity" framing.
- `cal poly engineering brotherhood` (not yet probed but obvious) — worth claiming with a tagline.

Mostly unwinnable without major authority:
- `cal poly frat(s)` / `cal poly fraternit(y|ies)` — Google has decided these are navigational for the university-wide FSL pages. Not worth chasing the home term; instead double down on engineering-qualified variants where we already dominate.

## Recommended optimizations (concrete, prioritized)

1. **Add "professional fraternity" to title and H1** of the home page. Current title reads as "Engineering Fraternity"; Theta Tau's reads "Foremost Professional Co-ed Engineering Fraternity" and ranks for both professional + engineering terms. We're leaving the "professional" lane uncontested.
2. **Add an "Engineering Greek Life at Cal Poly" section/H2** on the home page with that exact phrasing. Currently Theta Tau owns this query.
3. **Build/strengthen a "Why a professional engineering fraternity?" passage** so the page is relevant to both `professional fraternities` and `engineering fraternity` head terms simultaneously.
4. **Keep the /recruitment page strong** — it already ranks #4 for `cal poly rush engineering fraternity`. Make sure the title and H1 say "Winter Rush" + "Engineering Fraternity" + "Cal Poly" plainly.
5. **Don't waste effort on bare `cal poly frat(s)`** — those SERPs are locked by Cal Poly's own greeklife domain and panhellenic / IFC sites. Compete on qualified variants instead.

## Notes
- Production canonical appears to be `www.spdcalpoly.com` (per recent commit `be682d3 SEO: canonical www`). Legacy `.org` URLs 301-redirecting (per `c98f871`). Indexing transition is progressing — Google now surfaces .com for all engineering queries.
- All rank checks done depersonalized (`pws=0`) and US-geo (`gl=us`) on 2026-05-18. Local SLO IP could shift things slightly.
