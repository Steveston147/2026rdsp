# AGENTS.md

## Purpose

This repository implements the RDSP website. AI-assisted changes must preserve factual accuracy, usability, accessibility and the approved visual design.

## Supreme visual rule

For substantial visual work, redesigns, mockup implementation or pattern work, read and apply `docs/CREATIVE_FRONTEND_CONSTITUTION.md` before coding.

Approved visual references are specifications, not loose inspiration. Existing components, Tailwind utilities, current layouts and framework conventions are not visual authority.

Do not claim visual verification unless the actual browser rendering was inspected. Build success is not visual completion.

## Before editing

1. inspect the relevant current code and data;
2. identify the authoritative design/mockup if visual work is involved;
3. verify programme facts rather than inferring them;
4. inspect existing components/styles without assuming they must be reused;
5. consider mobile and multilingual impact;
6. keep changes focused and reviewable.

## No guessing

Do not invent or infer dates, fees, eligibility, accommodation conditions, programme status, application rules or other programme facts. If a required fact or authoritative design reference cannot be verified, surface the uncertainty rather than filling the gap.

## Visual implementation

When an approved mockup/pattern governs the task, preserve its defining composition, hierarchy, image treatment, typography, spacing, overlap, pacing and responsive art direction. Reuse a component only when it preserves the approved design.

For substantial visual changes, perform actual browser render -> reference comparison -> deviation correction at relevant desktop/mobile widths as required by the constitution.

## Multilingual

Locale-specific layout may change to fit natural language. Design may localise; factual data may not. Do not create separate factual truths per language.

## Performance and accessibility

Use semantic HTML, responsive images, keyboard-accessible controls and restrained JavaScript. Do not use performance, maintainability or framework convention as assumed reasons to flatten an approved visual design; demonstrate real conflicts and test alternatives first.

## Definition of done

A substantial visual change is not complete unless the authoritative reference was actually inspected, relevant browser renders were actually viewed, material deviations were fixed or explicitly accepted, image suitability was checked, accessibility basics remain intact, and repository-defined build/lint/type/test checks pass as applicable.