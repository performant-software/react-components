# Replacing Semantic UI in `@performant-software/react-components`

**Status:** Draft for team discussion · **Author:** Jamie · **Date:** 2026-07-21

A proposal to retire Semantic UI React from our shared component library, why it's becoming urgent rather than optional, which replacement to adopt, and how to do it without a funded migration project or a transition any client would notice.

---

## TL;DR

- **The pressure is defensive, not cosmetic.** Semantic UI React depends on `findDOMNode`, which **React 19 removed**. The day a consuming app moves to React 19, our library *breaks* — it doesn't degrade. Our peer range is already pinned `< 19.0.0` because of this.
- **The transition can be invisible.** Consumers import our own ~107 named components (`ListTable`, `DataTable`, `EditModal`, …), never `semantic-ui-react` directly. The real Semantic surface is only ~28 primitives behind that API — a seam we control.
- **Recommended replacement: Base UI** (from the MUI team, contributors from Radix + Floating UI). Headless, React-19-ready, stable since Dec 2025, and — critically — it natively covers combobox/multi-select, which is our single thorniest Semantic component.
- **Recommended approach: fund-by-stealth.** No migration budget. One small upfront investment (an internal primitives seam), then swaps ride along on work clients already pay for — especially the first React-19 or accessibility ticket.

---

## Why now

Ranked by how much each would actually move a decision — and, honestly, by which ones a client will *pay* for.

| Motivation | Type | Fundable? |
|---|---|---|
| **React 19 compatibility** — `findDOMNode` is gone in 19; Semantic's `Ref`/`Sticky`/`Visibility` rely on it. Staying on Semantic caps every consumer at React 18. | Existential | **Yes** — rides the first "we need React 19" ticket |
| **Accessibility / WCAG · Section 508** — many of our clients are academic / museum / government. Base UI (and Radix) are best-in-class on keyboard, focus, ARIA; Semantic's a11y is dated. | Compliance | **Yes** — rides a compliance requirement |
| **Unmaintained-dependency risk** — `semantic-ui-react` and `semantic-ui-less@2.4.1` are effectively frozen; CVEs accrue with no upstream fix. | Security / liability | Indirectly |
| **Bundle size & load performance** — Semantic ships a heavy CSS theme + runtime; smaller bundles improve Core Web Vitals for the sites we build. | Client-facing perf | Indirectly |
| **Developer productivity** — modern API, React 19 form primitives (`useFormStatus`, `useActionState`, `useOptimistic`) that map directly to our form-heavy components. | Internal | No (rides along) |

**Takeaway:** we stop pitching this as a "migration project" and instead let the first React-19 or accessibility engagement pay for the seam. Everything else comes along for free once one of those forces a funded touch.

---

## Replacement: Base UI vs Radix (as of mid-2026)

Both are headless primitive libraries — you own 100% of the CSS, which is exactly what makes an invisible transition possible (we replicate today's look rather than adopt a new one). They are **not** the same project:

- **Base UI is not a fork or official successor to Radix.** It's a separate MUI library, started in 2024 by people from the **Radix, Floating UI, and MUI** teams — same lineage, next generation.
- **Radix still exists and is still maintained** by WorkOS. Not deprecated.

| | **Radix Primitives** | **Base UI** ✅ recommended |
|---|---|---|
| Maturity | Older, battle-tested over years, huge install base (shadcn's original base) | Stable **v1.0 Dec 2025**, now iterating fast (~1.x, ~6M weekly downloads, 40+ components) |
| Support trajectory | Maintained by WorkOS, but **velocity has slowed** — many original maintainers left; "stable" trending toward "frozen" | **Full-time MUI engineering**, actively expanding |
| Adoption momentum | Large legacy footprint | **shadcn/ui made Base UI its default (July 2026)**; new projects pick it ~2:1 over Radix |
| Combobox / multi-select | ❌ not native (need downshift/cmdk) | ✅ **native** |
| React 19 | ✅ | ✅ |

**Why Base UI for us specifically:** our heaviest and trickiest Semantic component is `Dropdown` (with `search`, `multiple`, `allowAdditions`). Base UI covers that natively via **Select / Combobox / Autocomplete**; Radix would force a third-party bolt-on for exactly the hardest part. And adopting a *second* library on a slowing-support trajectory would repeat the mistake that killed Semantic for us — so we weight trajectory heavily.

**The one argument for Radix:** if we value years of production hardening and a larger Q&A corpus over an active-team newer library. Given our reasons for leaving Semantic, we don't.

---

## Component inventory → Base UI mapping

Usage counts are `semantic-ui-react` import occurrences across the **whole `react-components` repo** — `semantic-ui` (97 files), `storybook` (38), `controlled-vocabulary` (6), `user-defined-fields` (4). Widening from the package-only view surfaced one thing worth calling out: **`Form` is far more prevalent than it first appeared (26 vs. 5)** — it's the #2 primitive repo-wide, which reinforces that `Form`/`Field` is the make-or-break swap. One new trivial primitive appeared (`Container` → CSS).

The key insight in this table: **most "gaps" are not behavioral gaps.** They're Semantic *styling boxes* (Segment, Grid, Header, Card…) that were never real components — replacing them with our own CSS is the invisible-transition work we want to own anyway. The only true external dependency we take on is an icon set.

### Direct behavioral mappings (Base UI primitive exists)

| Semantic | Uses | Base UI | Notes |
|---|---:|---|---|
| `Button` | 39 | `Button` | Direct. |
| `Form` | 26 | `Form` · `Field` · `Fieldset` | **Upgrade** — real validation primitives vs. Semantic's ad-hoc form. **Highest-volume behavioral swap; budget accordingly.** |
| `Modal` | 16 | `Dialog` | `Modal.Header/Content/Actions` → `Dialog.Title/Popup/…` (structural remap). |
| `Dropdown` | 11 | `Select` · `Combobox` · `Autocomplete` · `Menu` | Splits by usage: plain select → Select; searchable/multi → Combobox; action menu → Menu. **This is the big win.** |
| `Input` | 9 | `Input` (+ `Field`) | `Field` adds label/validation wiring. |
| `Checkbox` | 4 | `Checkbox` (+ `Checkbox Group`) | Direct. |
| `Progress` | 1 | `Progress` | Direct. |
| `Popup` | 1 | `Popover` · `Tooltip` · `Preview Card` | Pick by intent. |
| `Divider` | 1 | `Separator` | Direct. |
| `Accordion` | ~1 | `Accordion` · `Collapsible` | Direct. |
| `Confirm` | ~1 | `Alert Dialog` | Direct. |
| `DropdownSearchInput` | 1 | `Combobox` | Subsumed. |
| `TextArea` | ~1 | `Input` / `Field` | Styled textarea via Field. |

### No primitive needed — plain HTML + our CSS (was pure Semantic *styling*)

| Semantic | Uses | Replacement |
|---|---:|---|
| `Icon` | 16 | ⚠️ **External:** `lucide-react` (or `react-icons`) behind an `<Icon name>` shim that maps Semantic's icon names → glyphs. Our only new third-party dependency. |
| `Loader` | 9 | In-house CSS spinner (no logic). |
| `Label` | 6 | Form label → `Field.Label`; tag/chip → in-house CSS. |
| `Message` | 5 | In-house banner CSS; use Base UI `Toast` where it's transient/notification. |
| `Image` | 5 | Plain `<img>`; `Avatar` where it's a user avatar. |
| `Header` | 5 | `<h1–6>` + CSS. |
| `Card` | 5 | `<div>` + CSS. |
| `Segment` | 3 | `<div>` + CSS. |
| `Item` | 3 | Structural HTML + CSS. |
| `Grid` | 3 | CSS Grid/Flex (**modernization** — drop Semantic's 16-col grid). |
| `Menu` | 2 | Nav → `Navigation Menu`/`Tabs`/`Toolbar`; action → `Menu`. |
| `Dimmer` | 2 | Dialog has a built-in backdrop; standalone → CSS overlay. |
| `Breadcrumb` | 2 | `<nav><ol>` + `Separator` (structural). |
| `Table` | 1 | Plain `<table>` + CSS. (If we ever want sorting/virtualization, TanStack Table — but `DataTable` already owns that logic.) |
| `Pagination` | 1 | In-house buttons + logic. |
| `Container` | 1 | `<div>` + max-width CSS. |
| `Embed`, `List` | ~1 each | Structural HTML + CSS. |

### Delete outright (obsolete under React 19 + Base UI)

| Semantic | Uses | Why it goes |
|---|---:|---|
| `Ref` | 2 | React 19 passes `ref` as a normal prop — no wrapper needed. |
| `Transition` | 3 | Base UI components expose enter/exit data-attributes for CSS transitions; standalone → CSS. |
| `Sticky` | ~1 | `position: sticky`. |
| `Visibility` | ~1 | `IntersectionObserver` hook. |

**Coverage summary:** every genuinely *behavioral* Semantic primitive has a native Base UI home. The residue is CSS work we want to own for the invisible transition, plus exactly **one** new dependency (icons) and **four deletions** that React 19 makes redundant.

---

## Downstream: how consuming apps use us

> **⏳ Pending** — analysis of `core-data-cloud`, `core-data-connector`, and `FairImage` not yet complete (repos being added to the working session). This section answers the question that decides how truly *invisible* the swap can be: **do any consumers reach past our public API?**
>
> Specifically, for each repo we'll confirm:
> - **Do they import only our named components** (`ListTable`, `EditModal`, …), or also raw `semantic-ui-react` / `semantic-ui-less` directly? Direct reaches are the only places a consumer could "notice" the swap.
> - **Do they consume our exported `style.css`**, and do they override Semantic class names (`.ui.button`, `.ui.grid`, …) in their own stylesheets? Class-name overrides are the most likely source of visible breakage.
> - **Which of our components each app actually uses** — so we can sequence Phase 3 swaps behind the components real clients depend on first.
>
> Findings will replace this block.

---

## Transition plan (fund-by-stealth)

The pattern is a **strangler fig** behind an adapter seam: trap Semantic behind one internal layer, then hollow it out one primitive at a time, with every step independently shippable and reversible.

### Phase 0 — Freeze the "before" *(one-time, unfunded, do first)*
Add visual-regression snapshots (Playwright screenshots / Chromatic) of every Storybook story as the baseline. This is what turns *"no client noticed"* from a hope into a CI gate. One-time setup, not per-swap cost.

### Phase 1 — Build the seam *(the one upfront investment, ~hours)*
Create `packages/semantic-ui/src/ui/{Button,Icon,Modal,Dropdown,Input,…}` that **today just re-export Semantic UI unchanged** (re-exporting the real component preserves `Modal.Header`, `Dropdown.Menu`, etc.). Mechanically point all 96 call sites — plus the 8 in `storybook`, `controlled-vocabulary`, `user-defined-fields` — at the seam. **Zero behavior change**, fully reviewable, ships on its own. Now Semantic is isolated behind one boundary and can't grow.

### Phase 2 — Stop the bleeding *(free, ongoing)*
New and edited components import from the seam, never from `semantic-ui-react`. Enforce with an ESLint `no-restricted-imports` rule. Semantic's footprint stops expanding at no cost.

### Phase 3 — Swap internals, funded-work-first *(amortized)*
Replace each primitive's internals with Base UI + our CSS, validated against Phase 0 snapshots. Sequencing:
- **Codemod the mechanical tail first** — `Button`, `Icon`, `Label`, `Divider`, `Card` are ~1:1. One jscodeshift pass clears dozens of files in an unfunded afternoon.
- **Ride funded tickets for the rest** — when a client pays to touch `DataTable`/`EditModal`, swap the primitives inside it as part of that ticket.
- **Let React 19 force the bulk** — the first client needing React 19 funds the `Ref`/`Sticky`/`Dropdown` work, scoped honestly as "React 19 support."
- **Save real effort for `Form` and `Dropdown`** — the only two with genuinely tricky prop semantics.

### Phase 4 — CSS parity as its own workstream *(the sneaky-hard part)*
Lift Semantic's visual tokens (colors, radii, spacing, font) into CSS variables; keep **exporting `style.css`** so consumers' `import '.../style.css'` keeps resolving even as it becomes a compat shim. CSS drift is more likely to be "noticed" than component behavior — treat it as a first-class deliverable, not cleanup.

### Phase 5 — Release
If props stay identical, this can even be a minor. If any prop shifts, cut a major with a codemod + adapter exports. The repo already has a `beta` tag flow for testing against a real app first.

**Cost/benefit:** slower (finishes as funded work happens to cover the surface, over ~a year) — but it never needs a yes, no client sees a bill or a regression, and it can pause indefinitely between funded touches with no broken state.

---

## Risks & mitigations

| Risk | Mitigation |
|---|---|
| **`Form` / `Dropdown` prop-compat drift** — the two hard swaps. | Budget most effort here; keep adapter shims that translate old props; lean on Base UI `Field` + `Combobox`. |
| **CSS drift the client *does* notice.** | Phase 0 snapshot gate + Phase 4 token workstream. |
| **`Ref` → `forwardRef`/ref-as-prop rewrites.** | Fold into the React 19 ticket where they're required anyway. |
| **Base UI is newer → thinner long-tail battle-testing.** | Its team is the Radix lineage; we adopt incrementally behind the seam, so any surprise is contained to one primitive and reversible. |
| **New icon dependency.** | Single `<Icon>` shim isolates it; name-map keeps `<Icon name="edit" />` working. |

---

## Open questions for the team

1. **Do we commit to Base UI**, or prototype one thorny component (`Dropdown`) in *both* Base UI and Radix before deciding?
2. **Who owns Phase 0 + Phase 1** (the only genuinely unfunded work)? It's the highest-leverage few hours in the whole plan.
3. **Icon set:** `lucide-react` vs `react-icons` vs shipping our own glyphs — and how complete is our current `Icon name` usage that we'd need to map?
4. **Release posture:** target a minor (strict prop-compat) or plan for a major with codemods?
5. **Is there a known React-19 or accessibility engagement on the horizon** we can attach the funded bulk to?

---

*Next step if we proceed: I can build Phase 1 (the `src/ui` seam + mechanical call-site migration) on a feature branch — fully reversible, zero visual change — so we have something concrete to review.*
