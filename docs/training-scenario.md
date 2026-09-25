# First Week as a GitHub Developer

This staged scenario teaches the end-to-end GitHub developer workflow in a safe repository.

## Stage 1: Repository orientation

**Goal:** understand what the project does and how the team works.

Actions:

1. Open the repository
2. Read `README.md`, `CONTRIBUTING.md`, and `SECURITY.md`
3. Review the file structure
4. Find the first practice issue in `docs/issues/12-completed-task-filter.md`

Checkpoint:

- learner can explain the app, the workflow, and the first task

Expected outcome:

- learner knows where to find requirements and team standards

## Stage 2: Local setup

**Goal:** confirm the project works before changing it.

Actions:

```bash
npm install
npm start
npm test
npm run lint
```

Checkpoint:

- learner can run the app and local quality checks

Expected outcome:

- learner sees the current app behavior and knows the baseline is healthy

## Stage 3: Understand the issue

**Goal:** translate the issue into a change plan.

Actions:

1. Read the acceptance criteria
2. Identify likely files to change
3. Decide what tests need to be added
4. Leave a short issue comment with your plan

Suggested learner comment:

> I will add support for the completed filter in the task logic, update the CLI behavior, and add tests for normal and empty completed-task cases.

Checkpoint:

- learner can explain the expected behavior before writing code

## Stage 4: Create a branch

**Goal:** work safely without touching `main`.

Example:

```bash
git checkout -b feature/12-completed-task-filter
```

Checkpoint:

- learner uses a clear, descriptive branch name

## Stage 5: Explore with Copilot responsibly

**Goal:** use AI as a helper, not as a substitute for judgment.

Example prompts:

- `Explain how task filtering works in src/tasks.js`
- `Suggest edge cases for a completed task filter`
- `How should I update tests for the new filter?`

Checkpoint:

- learner can describe why each accepted suggestion is correct

Expected outcome:

- learner understands responsible Copilot use

## Stage 6: Implement the feature

**Goal:** add support for the completed-task filter.

Likely code changes:

- update `src/tasks.js`
- update `src/app.js` if needed
- add or update tests in `tests/`

Checkpoint:

- learner makes a focused change instead of rewriting unrelated code

## Stage 7: Add and run tests

**Goal:** prove the new behavior works and old behavior still works.

Examples:

- completed tasks are returned when requested
- empty completed lists show a clear empty state
- unsupported filters still fail clearly

Checkpoint:

- learner can point to tests that describe the new behavior

## Stage 8: Commit and push

**Goal:** create a clear history that reviewers can understand.

Example:

```bash
git status
git diff
git add .
git commit -m "Add completed task filter"
git push origin feature/12-completed-task-filter
```

Checkpoint:

- learner writes a clear commit message and pushes only relevant files

## Stage 9: Open a pull request

**Goal:** communicate the change clearly.

Pull request content should include:

- summary of the change
- related issue
- testing performed
- any reviewer notes

Checkpoint:

- learner uses the repository template instead of a one-line description

## Stage 10: Observe GitHub Actions

**Goal:** understand automated quality checks.

What to look for:

- dependency installation
- test results
- lint results

If a check fails:

1. open the failing job
2. read the logs
3. fix the problem locally
4. push another commit

Checkpoint:

- learner can explain what failed and how they fixed it

## Stage 11: Review and feedback

**Goal:** respond professionally to reviewer comments.

Possible review requests:

- rename a function for clarity
- add an edge-case test
- update documentation

Expected response pattern:

1. thank the reviewer
2. make the change or ask a clarifying question
3. push updates
4. reply with what changed

Checkpoint:

- learner treats review as collaboration

## Stage 12: Conflict resolution

**Goal:** handle overlapping changes safely.

Practice:

1. pull the latest branch updates
2. resolve conflict markers carefully
3. rerun tests and lint
4. push the resolved branch

Checkpoint:

- learner can explain both sides of a conflict before resolving it

## Stage 13: Merge and cleanup

**Goal:** complete the workflow cleanly.

Actions:

1. confirm approval and passing checks
2. squash and merge
3. confirm the issue closes
4. delete the branch

Checkpoint:

- learner knows code is not "done" until it is reviewed, checked, and merged

## Stage 14: Broader GitHub platform habits

### Projects

- move the issue through backlog, in progress, review, and done

### Dependabot

- review update pull requests
- rerun tests before merging dependency changes

### Codespaces

- try running the exercise without local setup

### Security and responsible use

- avoid secrets
- review generated code
- prefer small pull requests

Checkpoint:

- learner connects development work to planning, security, and maintainability
