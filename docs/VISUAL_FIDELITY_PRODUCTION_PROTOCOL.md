# Visual Fidelity Production Protocol

Mandatory under `docs/CREATIVE_FRONTEND_CONSTITUTION.md` for substantial mockup/pattern implementation.

## Five gates
1. **Reference** — identify and actually inspect the authoritative approved mockup/reference. If missing/conflicting/uninspectable, stop; do not infer from current code.
2. **Measurement** — record reference viewport, section/hero height, headline x/y/measure, major image x/y/w/h, overlap/z-order, whitespace, CTA/navigation, crop/focal point and major spacing.
3. **Blueprint** — state rendering strategy per major region: normal flow, Grid/Flex, coordinate artboard, SVG, raster/composite, semantic overlay, motion; define desktop/tablet/mobile and locale art direction.
4. **Convergence** — real browser `Reference -> Render -> Difference Audit -> Correction -> Re-render` until no unexplained Major deviation remains.
5. **Acceptance** — retain a Visual QA Record with evidence, scores and deviation disposition. Build success is not visual completion.

## Seven-axis score
Score 0-10: Composition, Geometry, Typography, Imagery, Materiality, Responsive Art Direction, Motion/Interaction (N/A if irrelevant).

Acceptance target for fidelity-led work:
- average **>= 9.5**;
- no applicable axis below **9.0** without explicit design-owner acceptance;
- Composition and Geometry **>= 9.2** for signature art-directed hero sections.

Scores require comparison notes; unsupported scores are unverified.

## Difference order
Fix Macro Geometry first; Typography/Imagery second; Material/Detail/Motion third. Do not polish details while section height, headline position, image dominance, whitespace or major overlap are materially wrong.

## Deviation classes
- Major: recognisable composition/hierarchy/focal point/mobile art direction changed — fix or explicitly accept.
- Moderate: noticeable typography/crop/spacing/overlap/texture difference — normally fix.
- Minor: small browser/font variance without perceptual design change — may remain if recorded.

Do not dismiss differences as responsive/framework/performance/maintainability issues without evidence.

## Required records

### Visual Measurement
```md
Reference:
Viewport:
Hero/section height:
Headline x/y/width:
Primary image x/y/w/h:
Secondary images:
Overlap/z-order:
Whitespace:
Navigation/CTA:
Typography/line breaks:
Crop/focal point:
Native image dimensions checked: yes/no
```

### Implementation Blueprint
```md
Surface/pattern:
Authoritative reference:
| Region | Visual requirement | Rendering strategy | Responsive/locale strategy | Risk |
|---|---|---|---|---|
Desktop:
Tablet:
Mobile:
Locale differences:
Typography:
Images:
Motion:
Accessibility/performance evidence:
```

### Visual QA Record
```md
Reference:
Implementation URL/build:
| Viewport / locale | Composition | Geometry | Typography | Imagery | Materiality | Responsive | Motion | Average |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| Severity | Difference | Cause | Fix attempted | Status |
|---|---|---|---|---|
Reference inspected: yes/no
Browser render inspected: yes/no
Screenshot/reference compared: yes/no
Images checked: yes/no
Overflow checked: yes/no
No unexplained Major deviation: yes/no
Overall >= 9.5: yes/no
Final: ACCEPTED / NOT READY
```

For multilingual publication, each affected locale is an independent visual QA surface. Design may localise; facts may not.

Operating rule: **Measure before coding. Blueprint before detailing. Render before claiming. Compare before accepting. Iterate until material differences are gone or explicitly approved.**
