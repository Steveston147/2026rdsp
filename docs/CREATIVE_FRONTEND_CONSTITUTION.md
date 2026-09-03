# Creative Frontend Fidelity Constitution

Status: normative visual implementation rule
Effective: 2026-09-03

Approved mockups and design patterns are specifications, not loose inspiration. Do not replace distinctive composition with a generic hero/grid/cards/CTA structure merely because it is easier, familiar, already available, or conventional for Next.js/Tailwind.

Before accepting visual loss, ask: **Is this truly a technical limitation, or merely an implementation shortcut?**

## Visual authority

1. latest explicitly approved mockup/reference;
2. approved pattern/design specification;
3. explicit recorded design decisions;
4. current implementation only as evidence of current state.

Existing components, Tailwind patterns, framework conventions and prior implementations are not design authority. If the authoritative reference is missing, conflicting, ambiguous, or cannot actually be inspected, do not guess.

## Mandatory fidelity

Preserve defining composition, hierarchy, asymmetry, negative space, scale, image crop/dominance, typography measure/line breaks, overlap/depth, section pacing, navigation character, material/texture, motion and mobile interpretation.

Use the implementation layer required by the design: semantic HTML, Grid/Flex where genuinely structural, coordinate-driven/absolute artboards, transforms, z-index, masks/clip-path, SVG, responsive images, partial rasterisation, composited artwork with semantic overlays, selective JavaScript, GSAP/Motion, or advanced canvas/WebGL only when genuinely required.

Template is not authority. Previous implementation is evidence, not authority.

## Responsive / multilingual

Responsive design is not desktop shrinkage. Desktop, tablet and mobile may be separately art-directed editions of one design identity. Multilingual versions may differ in line breaks, widths, spacing, crop and local composition when needed for natural language. Design may localise; facts may not.

## Mandatory workflow

For substantial visual work: identify and inspect the authoritative reference -> analyse the defining geometry -> implement macro composition -> add detail -> render the actual page in a browser -> compare with the reference -> identify deviations -> adjust -> re-render until no unexplained major deviation remains.

Build success is not visual completion. Code inspection is not visual verification.

Review significant work at 320px, 390px, representative tablet and representative desktop (normally including 1440x900 where appropriate).

## Deviation rule

Any material remaining deviation must be recorded with reference/viewport, observed difference, cause, fix attempted, remaining difference and status (`fixed` or `explicitly accepted`). Do not silently normalise major differences as “close enough”.

## Constraints require evidence

Performance, accessibility, maintainability, responsiveness and framework limitations are real constraints but may not be assumed reasons for simplification. Demonstrate the conflict where measurable and test responsive assets, AVIF/WebP, SVG, partial rasterisation, separate mobile artwork, semantic overlays or more suitable CSS geometry before flattening the approved design.

## Photography

Inspect native dimensions before assigning critical image roles. Avoid visible upscaling, accidental crop, misleading stock use and weak/repeated imagery when the design relies on authenticity or editorial storytelling.

## Definition of done

Visual work is not complete unless the authoritative reference was actually inspected; relevant desktop/mobile renders were actually viewed; major geometry is intentionally faithful; image suitability was checked; accessibility basics remain intact; repository checks pass as applicable; material deviations are fixed or explicitly accepted; and evidence of visual comparison exists.

Final test: **When the approved reference and actual browser rendering are shown side by side, would an informed viewer immediately recognise the implementation as the intended design rather than a simplified approximation?** If not, it is not finished.

Do not search first for reasons the design cannot be implemented. Search first for the responsible combination of techniques that can implement it. Avoidable design loss, blind precedent, unverified assumptions and “probably fine” are not completion criteria.