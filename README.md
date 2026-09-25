# Team Task Tracker

Team Task Tracker is a small Node.js project designed to teach a beginner what a healthy GitHub delivery workflow looks like from issue assignment to merge.

The repository is intentionally simple so learners can focus on:

- understanding an existing repository
- running an app and its tests
- creating a branch from an issue
- implementing a focused feature
- opening and updating a pull request
- reading GitHub Actions results
- responding to review feedback
- using Copilot responsibly

> Current learner exercise: implement a **completed task filter** by following `/home/runner/work/team-task-tracker/team-task-tracker/docs/issues/12-completed-task-filter.md`.

## Project overview

The app models a lightweight team task list with:

- sample task data
- task creation and completion helpers
- task summary reporting
- a command-line view of tasks
- baseline tests for current behavior

The starter implementation currently supports `all` and `open` task filters. The `completed` filter is left as the first hands-on learner task.

## Learning progression

1. **Foundation**: explore the repo, run the app, run tests, understand the issue
2. **Collaboration**: branch from the issue, commit clearly, open a pull request, reply to review
3. **Quality**: update tests, lint locally, read CI results
4. **Security and responsibility**: avoid secrets, review dependencies, use Copilot carefully
5. **Professional GitHub developer**: keep changes focused, communicate clearly, merge safely

## Prerequisites

- Node.js 20 or later
- npm 10 or later
- Git
- A GitHub account
- Optional: VS Code with GitHub Copilot enabled

## Setup

Why this matters: a good contributor proves the baseline works before changing it.

```bash
git clone https://github.com/Mo3taz-A/team-task-tracker.git
cd team-task-tracker
npm install
```

## Run the project

Why this matters: running the app helps you understand current behavior before you change it.

```bash
npm start
```

Useful variations:

```bash
npm start -- list open
npm start -- summary
```

## Test and lint

Why this matters: local checks catch problems before GitHub Actions does.

```bash
npm test
npm run lint
```

## Available scripts

- `npm start` — show the sample task list
- `npm start -- list open` — show only open tasks
- `npm start -- summary` — show counts for all tasks
- `npm test` — run the Node.js test suite
- `npm run lint` — run ESLint

## Repository workflow

1. Read the issue and confirm the expected outcome
2. Create a branch from `main`
3. Make a small change
4. Add or update tests
5. Run `npm test` and `npm run lint`
6. Commit with a clear message
7. Push the branch and open a pull request
8. Read GitHub Actions output
9. Respond to review comments
10. Merge after approval and passing checks

More detail lives in:

- `/home/runner/work/team-task-tracker/team-task-tracker/CONTRIBUTING.md`
- `/home/runner/work/team-task-tracker/team-task-tracker/docs/architecture.md`
- `/home/runner/work/team-task-tracker/team-task-tracker/docs/training-scenario.md`
- `/home/runner/work/team-task-tracker/team-task-tracker/docs/learner-checklist.md`

## Learner starting instructions

Start here if this is your first week as a GitHub developer:

1. Read this README
2. Read `CONTRIBUTING.md` and `SECURITY.md`
3. Run the app, tests, and lint commands
4. Read `/home/runner/work/team-task-tracker/team-task-tracker/docs/issues/12-completed-task-filter.md`
5. Create a branch such as `feature/12-completed-task-filter`
6. Implement the feature and add tests
7. Open a pull request using the template in `.github/pull_request_template.md`

## Repository structure

```text
.
├── src/
│   ├── app.js
│   └── tasks.js
├── tests/
│   ├── app.test.js
│   └── tasks.test.js
├── docs/
│   ├── architecture.md
│   ├── instructor-guide.md
│   ├── learner-checklist.md
│   ├── training-scenario.md
│   └── issues/
│       └── 12-completed-task-filter.md
└── .github/
    ├── ISSUE_TEMPLATE/
    ├── pull_request_template.md
    └── workflows/ci.yml
```
