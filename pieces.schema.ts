// pieces.schema.ts — the Galleries' data model (draft for ratification)
// Design rule: everything else (wings, sorting, 3D, cards, lineage
// click-through, the someday-template) reduces to fields on Piece.
// Renderers are pluggable; this file is the investment.

export type PieceId = string; // ledger IDs verbatim: "A1", "C13", "AC48", "I-p17"

// ---------------------------------------------------------------------------
// FATE — non-optional. "This field is the gallery's argument."
// Tagged union so each fate can carry its own evidence.
// ---------------------------------------------------------------------------
export type Fate =
  | { kind: "kept" }
  | { kind: "curated"; where?: string }            // already displayed (C13)
  | { kind: "released"; channel?: string; date?: string } // First Friday, LFL, ZACC piano, tuck-in...
  | { kind: "claimed"; note?: string }             // adopt-a-piece; via family/colleague
  | { kind: "destroyed"; patternRetained: boolean; date?: string; phrase?: string }
      // NOTE (v2): "filed away" collapsed into this — it IS destroyed w/
      // patternRetained:true; the difference was always register, not matter.
      // Display default: patternRetained ? "filed away" : "destroyed";
      // phrase overrides ("destroyed, pattern retained" for the loud cases,
      // "filed away, with a lovely farewell" for C12). Sort-by-fate groups
      // them together, which is correct: one "what's gone" view.
  | { kind: "absorbed"; into?: PieceId | string }  // donor sheets (AC49 → Road Trip)
  | { kind: "non-basement"; residence: string }    // lives elsewhere in the house (C10)
  | { kind: "undecided" };

// ---------------------------------------------------------------------------
// STATES vs LINEAGE — two different things, per ledger convention:
//   states[]  = presentations of the SAME work (PAT: painting / slide deck /
//               net art; AC48 folded vs unfolded). Lives inside one Piece.
//   lineage   = links BETWEEN works (C5 draft → C13 imago; Eden register
//               J-p23 → I-p19 → G1). Lives as edges with named relations.
// ---------------------------------------------------------------------------
export interface State {
  label: string;                 // "folded", "unfolded", "2016 slide deck", "net art"
  image?: ImageRef;              // absent for no-image states (lost/dispersed)
  medium?: string;
  date?: string;                 // free text; eras are real ("~2010–2011 [likely]")
  note?: string;
  url?: string;                  // digital descendants / net-art states
}

export type LineageRelation =
  | "draft-of" | "imago-of"      // the C5→C13 full-lineage convention
  | "study-for" | "absorbed-into"
  | "digital-descendant-of" | "prompted-descendant-of"
  | "sibling" | "same-session" | "reinterprets"  // C12 reinterprets Q59
  | "same-substrate";           // cut from one parent work (the AV sunflower
                                // child + the A dark-haired-girl ACEO, ~2013) —
                                // the relation is intrinsic and lives HERE;
                                // whether they HANG together is per-wing (see
                                // Wing.hang clusters below), so no piece carries
                                // a pairing it only sometimes wants.

export interface LineageLink {
  to: PieceId;
  relation: LineageRelation;
  note?: string;
}

// ---------------------------------------------------------------------------
// CARD — exposition + ekphrasis + console-log notes, all attributed.
// Everything optional except nothing: silence is legible as "filed away."
// ---------------------------------------------------------------------------
export interface Card {
  exposition?: string;           // Nora. What/when/why, the memory attached.
  ekphrasis?: Attributed[];      // can be several, across years (PAT has two)
  notes?: Attributed[];          // collaborative voices: Amanuensis, Librarian,
                                 // Void Technician, Night Archivist, Nora...
}

export interface Attributed {
  voice: string;                 // "Nora", "the Void Technician", "Claude (Opus), Sept 2026"
  text: string;
  date?: string;
}

// ---------------------------------------------------------------------------
// AXES — wings as views. Each axis is a sorting/grouping mechanism; a wing is
// a saved query over these. Multi-wing membership is free. Extendable without
// migration: unknown keys are allowed.
// ---------------------------------------------------------------------------
export interface Axes {
  era?: string;                  // period-of-life: "AP year", "bookstore era", "MakerSpace"
  month?: string;                // calendar-wing axis
  subjects?: string[];           // "firebird", "cat", "self-portrait", "Eden", "squirrel"
  series?: string[];             // "ACEO", "Mr series", "coworkers' cats"
  rooms?: string[];              // curatorial placements: "self-portrait room",
                                 // "diary wing", "front matter", "juvenilia"
  [axis: string]: string | string[] | undefined;
}

// ---------------------------------------------------------------------------
// PRESENTATION — the pluggable seam. Default is a plain image + card.
// Escalation path lives here: image → flip-through → lineage viewer →
// environment → (someday) smol game world. Adding a kind never touches data.
// ---------------------------------------------------------------------------
export type Presentation =
  | { kind: "image" }                       // default; may be omitted
  | { kind: "flip-through"; pages: ImageRef[] }  // codices — handling allowed
  | { kind: "environment"; path: string }   // FUTURE seam: a built set-piece
                                            // (a three.js room, or someday a
                                            // smol game world). Nothing uses
                                            // this at launch; it exists so
                                            // escalation is a new kind, not a
                                            // migration.
  | { kind: "external"; url: string };      // PRESENT-DAY need: states that
                                            // already live elsewhere (net-art
                                            // pages, P-series ecards).
// (v2: "diptych" REMOVED — pairing is curatorial, not intrinsic. Intrinsic
// kinship = lineage ("same-substrate", "sibling"); hanging-together = a
// cluster inside a specific wing's hang. E5+E7 pair in the F wing's hang;
// a time-based wing may reunite same-substrate cuts that live apart elsewhere.)

export interface ImageRef {
  src: string;                   // repo-relative path
  alt: string;                   // required — the index taught us: bare images are invisible
  width?: number;
  height?: number;
}

// ---------------------------------------------------------------------------
// PIECE
// ---------------------------------------------------------------------------
export interface Piece {
  id: PieceId;
  title: string;                 // artist's title, canonical malapropisms retained ("Phototaxy")
  image?: ImageRef;              // primary image; optional (no-image rows exist)
  states?: State[];              // only when multi-state
  date?: string;                 // free text with confidence markers, as in the ledger
  medium?: string;
  dimensions?: string;
  fate: Fate;                    // REQUIRED
  axes?: Axes;
  lineage?: LineageLink[];
  card?: Card;
  presentation?: Presentation;   // default "image"
  twoHand?: { layers: string[] };  // single support, two dated hands
  provisional?: boolean;         // documentation-pass pieces awaiting fate pass
  favorite?: number;             // Nora's rough-preference rank → the default hanging order
}

// ---------------------------------------------------------------------------
// WING — a saved view: name + thesis + either an explicit hang or a query.
// The launch wing is just: { name: "First Hanging", hang: [...favorites] }.
// ---------------------------------------------------------------------------
export interface Wing {
  slug: string;
  name: string;
  thesis?: string;               // every wing can state its argument
  hang?: (PieceId | PieceId[])[];  // explicit curated order; a nested array =
                                   // a cluster hung as one unit (diptych,
                                   // triptych, n-tych) IN THIS WING ONLY —
                                   // the same pieces may hang apart elsewhere.
  query?: { axis: string; value?: string; sort?: "favorite" | "date" | "id" };
  environment?: string;          // optional set-piece renderer for this wing only
}

export const GALLERY = {
  pieces: [] as Piece[],
  wings: [] as Wing[],
};
