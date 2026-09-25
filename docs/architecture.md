# Architecture and File Guide

## Purpose

The repository is intentionally small so learners can understand both the code and the GitHub workflow around it.

## Application structure

### `src/tasks.js`

Contains the core task logic:

- sample task data
- task creation
- marking a task as complete
- filtering task lists
- summary counts
- formatting tasks for display

This is the main file learners will change during the first exercise.

### `src/app.js`

A small command-line entry point that:

- reads simple commands
- calls the task helpers
- prints output for the learner

This keeps the project runnable without adding a web framework.

## Test structure

### `tests/tasks.test.js`

Unit tests for task logic and edge cases.

### `tests/app.test.js`

Integration-style tests for the command-line behavior.

## GitHub collaboration files

- `.github/workflows/ci.yml` — runs install, test, and lint checks
- `.github/pull_request_template.md` — guides clear pull request descriptions
- `.github/ISSUE_TEMPLATE/` — helps learners write better issues
- `.github/dependabot.yml` — models dependency maintenance

## Training documents

- `docs/training-scenario.md` — full virtual exercise
- `docs/learner-checklist.md` — task-by-task learner checklist
- `docs/instructor-guide.md` — facilitation notes
- `docs/issues/12-completed-task-filter.md` — first practice issue
