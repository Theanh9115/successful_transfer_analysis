# Features and priorities

**Project priorities:**

1. **Scouting:** Discover players, evaluate performance, compare candidates, and organize watchlists.
2. **Machine learning:** Estimate post-transfer performance using historical data, with uncertainty and supporting evidence, once the target and evaluation are validated.

**Question the product should help answer:** “Which player should our team consider recruiting, and how likely is that player to perform well after transferring?” The coach makes the decision; the prediction is conditional on a defined outcome and available evidence.

**Confirmed scope:** the first candidate pool and recruiting destinations are men's NCAA Division I only. Desired coverage is 2022–23 through 2026–27; intended users are college coaches and scouts. The first use case is search by name → profile → Add to Watchlist → compare saved players. The later model uses data available after the final men's DI tournament game each year to predict subsequent performance. DII candidates are a possible later expansion, not part of this MVP.

**Status checked against source on 2026-10-08.** A Vite/React scaffold exists and a browser-side API fetch experiment is present. The app renders no coach workflow; no backend, stored dataset, or validated model is present. All ten features below are **Not Started**. The scaffold is completed foundation, not a completed feature.

## MVP features (Proposed)

### 1. Player discovery

- **Description / priority:** Find players and establish the data context; **MVP**.
- **Functional requirements:** Search by name; filter by position, team, conference, season, and agreed statistics; show the season and DI competition coverage. Filters should be limited to fields the approved source actually provides.
- **Acceptance criteria:** Given a DI player database, a name search returns matching players. Given position and statistical filters, applying them returns only matching records. Each result shows season and DI context; empty results differ from loading or source errors.
- **Dependencies:** Approved men's DI player-season data, normalized team/conference fields, player list API.
- **Status:** Not Started.

### 2. Player profiles

- **Description / priority:** Evaluate a player's season-by-season offensive and defensive record and record scouting notes; **MVP**.
- **Functional requirements:** Show season statistics with units/denominators, offensive and defensive metrics where available, original source and last update time; allow a private note. Missing metrics must be explicit.
- **Acceptance criteria:** A coach can inspect multiple seasons, identify each metric's source and update date, and save a note that remains after reload.
- **Dependencies:** Player identity and season data, agreed metric definitions, profile and note APIs, access boundary for private notes.
- **Status:** Not Started.

### 3. Watchlist and player comparison

- **Description / priority:** Keep candidates and compare 2–4 players on consistent measures; **MVP**.
- **Functional requirements:** Add/remove players, persist the watchlist, and show a side-by-side comparison with aligned seasons, units, and denominators. Flag missing or non-comparable measures.
- **Acceptance criteria:** Given a profile, selecting **Add to Watchlist** saves the player. Given at least two saved players, selecting **Compare** shows their statistics side by side without absent values appearing as zero. Refreshing the page retains the saved watchlist.
- **Dependencies:** Profiles, watchlist storage/API, agreed comparison statistics.
- **Status:** Not Started.

### 4. Team needs

- **Description / priority:** Capture positions and desired characteristics such as shooting, rebounding, defense, and playmaking; **MVP**.
- **Functional requirements:** Save/edit team needs and use them as transparent discovery filters. Keep this distinct from a learned team-fit score.
- **Acceptance criteria:** A coach can set a needed position and characteristic, see which filters are active, and update the saved preferences.
- **Dependencies:** Agreed characteristics and measurable fields, player filters, persistence/API.
- **Status:** Not Started.

### 5. Data management

- **Description / priority:** Import historical statistics from an approved source with reviewable quality checks; **MVP**.
- **Functional requirements:** Record source rights and provenance; import player-season and transfer records as permitted; rerun without duplicate player records; report missing values, invalid rows, ambiguous IDs, and errors. Keep credentials server-side.
- **Acceptance criteria:** Repeating a batch leaves record counts stable; a report shows accepted, updated, duplicate, rejected, and unresolved rows with reasons.
- **Dependencies:** Approved source and terms for men's DI data across the desired 2022–23 to 2026–27 range, schema, identifier rules. Actual coverage is **TBD**.
- **Status:** Not Started. The current browser-side request is an incomplete experiment, not an import pipeline.

### 6. ML prediction readiness

- **Description / priority:** Make model availability and data type clear while predictions are disabled; **MVP**.
- **Functional requirements:** Indicate whether a validated prediction is available for a player; label observed historical statistics separately from predictions; keep prediction calls disabled until dataset, target definition, and evaluation are approved.
- **Acceptance criteria:** Before validation, the UI plainly says predictions are unavailable and displays no synthetic or unevaluated score as a real recruiting probability.
- **Dependencies:** Profile UI and a documented model-readiness decision; no trained model is required for the unavailable state.
- **Status:** Not Started.

## Nice-to-have features (Proposed)

These are post-MVP milestones. Prediction remains a core project goal, but it depends on historical outcomes and validation that the scouting MVP does not yet have.

### 7. Transfer performance prediction

- **Description / priority:** Estimate post-transfer personal performance and, if valid data supports it, team improvement as separate defined outcomes; **Nice-to-Have**, later ML phase.
- **Functional requirements:** Use relevant statistics available by the final men's DI tournament game in the recruiting cycle; show each predicted outcome and horizon, supporting statistics, uncertainty, model version, and historical reliability. Explain factors that contribute to estimates without implying causality.
- **Acceptance criteria:** A later-season holdout report covers calibration, uncertainty, and subgroup/season results; weak or missing inputs suppress the estimate; a coach can tell prediction from observed statistics.
- **Dependencies:** Measurable definitions of “player plays better” and “team improves,” decision date, permitted historical transfers/outcomes, leakage audit, evaluated and versioned model. The two outcomes need not use the same model.
- **Status:** Not Started.

### 8. Team-specific player fit

- **Description / priority:** Relate a candidate's style to a selected team's needs and statistics; **Nice-to-Have**.
- **Functional requirements:** Select a team, compare candidate and team measures, and identify strengths or weaknesses the player may address. Label descriptive matching separately from any predictive fit claim.
- **Acceptance criteria:** A coach can trace each fit observation to player and team data; the app avoids claiming team-specific outcome improvement without validation.
- **Dependencies:** Team-season statistics, team needs, comparable metric definitions, source rights.
- **Status:** Not Started.

### 9. Advanced analytics and visualization

- **Description / priority:** Explore development, comparisons, and shareable scouting summaries; **Nice-to-Have**.
- **Functional requirements:** Chart player development across seasons, add interactive comparison charts, and export comparisons or summaries with sources and missing-data labels.
- **Acceptance criteria:** Charts match underlying values and seasons; exported material identifies sources, update dates, and model version when applicable.
- **Dependencies:** Multi-season profiles, comparison data, export/privacy rules.
- **Status:** Not Started.

### 10. Automation and collaboration

- **Description / priority:** Refresh data and support shared staff evaluation; **Nice-to-Have**.
- **Functional requirements:** Schedule validated updates with failure visibility; share watchlists within an authorized staff workspace; collaborate on notes and evaluations with attribution.
- **Acceptance criteria:** Failed refreshes do not corrupt existing data; only authorized staff can see shared records; changes identify their author.
- **Dependencies:** Stable manual import, source update terms, authentication, workspace permissions, deployment target.
- **Status:** Not Started.

## Scope decisions still needed

Actual men's DI and season coverage, available conference and defensive metrics, account access, and whether the first version is single-user or multi-staff are **TBD**. The exact personal/team outcome metrics and prediction horizon are **TBD** and gate prediction work. See `project-overview.md` and `data-pipeline.md`.
