# Development progress

**Checked against repository:** 2026-10-08. **Current phase:** 1, project planning and setup. The Vite/React scaffold exists and the app renders an empty view. A frontend API request experiment exists but does not store data or expose a coach workflow. `data_analysis/src/data/load_data.py` and the data folder are empty. No backend, database, trained model, evaluation, authentication, or deployment is present in the inspected files.

**Active work:** define measurable outcomes and test data coverage. **Confirmed:** the first candidate pool and recruiting destinations are men's NCAA Division I only; desired seasons are 2022–23 through 2026–27; users are coaches and scouts; the first flow is name search → profile → watchlist → comparison. The model's annual input cutoff is after the final men's DI tournament game. **Blockers:** actual DI record coverage and account access, exact personal/team success metrics and outcome horizon, single-user versus multi-staff scope. A frontend source file still contains an exposed API credential; rotate it and plan server-side access before using the source in an application.

Checkboxes represent verified tasks, not intentions. Phase boundaries are learning milestones; the owner is the primary implementer. Do not implement unchecked tasks without an explicit request.

## Phase 1 — Project planning and setup (current)

**Objective:** Define a narrow first user journey and keep the repository safe to develop.

- [x] Create the Vite/React frontend scaffold (present in source).
- [x] Inventory the repository and record the current implementation state.
- [x] Draft project overview, feature list, pipeline plan, and progress tracker.
- [x] Choose men's NCAA DI candidates and recruiting destinations for the first version, 2022–23 to 2026–27, and coaches/scouts as target users. DII is a possible later expansion.
- [x] Define the first search → profile → watchlist → comparison journey and its five acceptance examples.
- [x] Identify personal improvement and team improvement as distinct success concepts.
- [x] Confirm recruiting destinations are DI only.
- [x] Set each prediction cycle's input cutoff after the final men's DI tournament game.
- [ ] Define measurable personal/team outcomes, baselines, and prediction horizon for later ML work.
- [x] Review CBBD's published data ranges and API terms; record source links in `data-pipeline.md`.
- [ ] Test actual men's DI player, team, and portal records for the desired seasons using authorized account access.
- [ ] Rotate the exposed credential and plan server-side storage before integrating API data.

**Dependencies:** remaining owner decisions and source access. **Deliverables:** approved MVP scope, initial user flow, data-source inventory, and measurable success-label definitions. **Complete when:** the scope and workflow are testable, DI data feasibility is known, outcome labels are specified, and the credential risk has a remediation plan. Published CBBD ranges alone do not complete the coverage check.

## Phase 2 — Database design

**Objective:** Model players, teams, seasons, transfers, shortlists, notes, and provenance with understandable keys.

- [ ] Draw a small ER diagram from the agreed workflow.
- [ ] Choose internal and source identifier rules for DI players and teams across seasons.
- [ ] Specify required fields, nullability, uniqueness, and relationships for each MVP entity.
- [ ] Review sample records and revise the schema for real missing/duplicate cases.
- [ ] Choose a local relational database for the first implementation.

**Dependencies:** Phase 1 scope and sample data. **Deliverable:** reviewed schema and data dictionary. **Complete when:** sample candidate, season, transfer, shortlist, and note records can be represented without ambiguous identity or silent data loss.

## Phase 3 — Data ingestion and processing

**Objective:** Build one reliable, repeatable manual import before automating it.

- [ ] Obtain a permitted men's DI sample; document source fields/terms and season coverage.
- [ ] Fetch or load a small raw batch and record source/timestamp.
- [ ] Validate required fields, types, statistic ranges, and units.
- [ ] Normalize team and player IDs; flag ambiguous matches.
- [ ] Store valid records with an idempotent import rule.
- [ ] Produce accepted/rejected/duplicate counts and inspect examples.

**Dependencies:** Phases 1–2, source access. **Deliverable:** one repeatable import and validation report. **Complete when:** rerunning the same batch produces no duplicate records and failures are explainable. Scheduling remains a later enhancement.

## Phase 4 — Backend API development

**Objective:** Expose the stored data and shortlist operations through a small REST API.

- [ ] Choose a backend framework and document why it fits this learning project.
- [ ] Implement and verify player list/filter and detail endpoints.
- [ ] Implement shortlist create/read and add/remove endpoints.
- [ ] Implement note read/create endpoints with the chosen access boundary.
- [ ] Standardize validation, pagination, errors, and source metadata in responses.
- [ ] Move upstream credential use behind the backend.

**Dependencies:** Phases 2–3 and user/access decision. **Deliverable:** documented API with representative responses. **Complete when:** a client can complete the MVP data operations without direct third-party calls or exposed secrets.

## Phase 5 — Frontend development

**Objective:** Build coach views against the agreed API contract.

- [ ] Sketch name search, player profile, Add to Watchlist, saved watchlist, and comparison screens.
- [ ] Build name search, position/stat filters, and loading/empty/error states.
- [ ] Build profile with season/source labels and missing-data indicators.
- [ ] Build a persistent watchlist, notes, team-needs form, and side-by-side comparison view.
- [ ] Show a clear prediction-unavailable state.

**Dependencies:** Phase 1 user flow and Phase 4 API contract. **Deliverable:** usable coach workflow in the existing React app. **Complete when:** a coach can search by name, filter records, open a profile, save a watchlist, compare two saved candidates, and still find the watchlist after refresh.

## Phase 6 — Feature integration

**Objective:** Connect the frontend, API, database, and import outputs end to end.

- [ ] Connect each coach view to the API and remove hardcoded demonstration records.
- [ ] Verify persistence after reload and consistent player IDs across screens.
- [ ] Check source dates, missing fields, validation errors, and failed-request messages.
- [ ] Walk through the MVP acceptance scenarios with a representative dataset.

**Dependencies:** Phases 3–5. **Deliverable:** integrated local MVP. **Complete when:** the full candidate-to-shortlist journey works on imported data and fails clearly when data is unavailable.

## Phase 7 — Testing and deployment

**Objective:** Make the non-ML MVP reliable and safe for its intended audience.

- [ ] Test import reruns, API validation, identity edge cases, and coach workflow.
- [ ] Check secret handling, source rights, note privacy, and chosen access controls.
- [ ] Document local run steps and deployment configuration without embedding credentials.
- [ ] Deploy to an appropriate environment only after the owner chooses the audience and hosting target.
- [ ] Review the pilot workflow with intended coaches and record feedback.

**Dependencies:** Phase 6 and deployment/access decisions. **Deliverable:** tested pilot-ready app and runbook. **Complete when:** core scenarios pass, data and access risks are addressed, and the owner can operate the app. No deployment is currently planned or approved.

## Phase 8 — Machine learning integration

**Objective:** Add validated predictions of personal post-transfer improvement and, if feasible, destination-team improvement as distinct outcomes after the data and workflow are stable.

- [ ] Assemble permitted historical DI-to-DI transfer records, destination player outcomes, and team baselines/outcomes.
- [ ] Specify separate measurable personal and team labels; choose the first prediction target from feasible data.
- [ ] Audit labels, missingness, identity joins, and pre-decision feature availability.
- [ ] Build a simple baseline and a season-based train/validation/test split.
- [ ] Evaluate discrimination, shortlist usefulness, calibration, and subgroup/season results.
- [ ] Define when low-quality inputs should suppress a prediction.
- [ ] Version the model and connect the prediction endpoint and qualified UI explanation.
- [ ] Re-test the deployed workflow and document monitoring/retraining triggers.

**Dependencies:** agreed measurable labels and decision cutoff, sufficient real historical data, earlier phases, and model review. **Deliverable:** reproducible model report and qualified coach-facing estimate if supported. **Complete when:** later-season evaluation supports the intended use and the UI conveys limitations. If evidence is inadequate, retain the prediction-unavailable state.

## Immediate next steps

1. Define how to measure “player plays better” and “team improves,” and choose the outcome horizon; the post-tournament input cutoff is set.
2. Test men's DI candidate and historical records across 2022–23 to 2026–27 with authorized access; remediate the exposed credential.
3. Then review the smallest Phase 2 schema exercise together before implementation.
