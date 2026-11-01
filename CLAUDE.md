# CLAUDE.md — the Virtual Gallery

Context for Claude sessions working in this repo. Nora (she/her) is the
artist. This gallery is the public face of a completed documentation
campaign: ~1,182 catalogued artworks spanning four decades, force-ranked
by the artist (700 survived the sort). The gallery shows *patterns*;
physical fates are part of the record, not an embarrassment.

## Doctrine (settled; don't relitigate)
- **Hand-rolled TS/JS, no framework.** Static site, GitHub Pages.
- **Chrome stays neutral; the art owns all chroma.** UI may borrow
  accents from a wing's palette via CSS custom properties, never compete.
- **Wings are saved views**, not folders: an explicit `hang` (curated
  order; nested arrays = pieces clustered as one unit) or a query over
  `axes`. A piece can appear in many wings. Default view = the First
  Hanging, the artist's own preference order (`favorite` = rank).
- **`fate` is required and is the gallery's argument.** Render it on
  every card. `destroyed` + `patternRetained` displays as "filed away"
  unless `phrase` overrides.
- **Cards**: `exposition` is the artist; `ekphrasis`/`notes` entries are
  attributed by `voice` (artist, Claude models, personas). Silence is
  legible — no filler text for pieces without cards.
- **states[]** = presentations of the same work (render as toggle/stack);
  **lineage[]** = links between works (render as "ancestors/relatives"
  navigation when present).
- **Images**: `{id}-2048/-1024/-400.webp`, sRGB, no metadata. `src`
  points at the 1024; derive srcset from the naming pattern.
  `image.width/height` are PIXEL dims of the src file and are mandatory
  (layout reservation = anti-jank). `alt` is mandatory. `loading="lazy"`,
  `decoding="async"`. Placeholder: wing/month palette color is fine.
- Masters never enter the repo; derivatives only; encode once.

## Tonight's POC scope (Halloween, ~2 hours)
Ship small and real: one page, salon wall of the 10 entered pieces in
favorite order; click → piece view w/ image (2048 on zoom), title, date,
medium, dimensions, fate line, exposition + any ekphrasis (attributed);
C6 renders its prior state as a second image with its label. Light/dark
via prefers-color-scheme. Lazy loading with reserved aspect boxes.
**Defer**: 2.5D environments, the fox persona, sorting/tag UI, lineage
viewer, search. A milestone is not a vow.

## Known data chores
- image.width/height in the first PIECES export hold inches — replace
  with actual pixel dims of the -1024 files.
- C6 state src lacks the `img/` prefix.

## Future seams (designed, dormant)
- `presentation.kind: "environment"` → 2.5D parallax rooms (CSS planes).
  An 8th-grade drawing of a gallery hallway with paintings-on-doors is
  the planned entrance motif: doors lead to wings.
- Commentary persona: "the Fox" (artist's voice in persona) and the
  fox's sunlight-form (model voices); plain `voice` attribution until
  then.
- Someday: per-piece smol game worlds as new presentation kinds.

## Practice
End substantive sessions with a terse hand-off log entry (date, session
name, what happened, what a successor needs) — append to HANDOFF.md in
this repo; the artist folds it into the project spine.
