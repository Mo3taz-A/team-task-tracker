# Practice Issue: Add a filter to show only completed tasks

This file can be copied into a real GitHub issue if the Issues feature is available.

## Suggested issue title

`Add a filter to show only completed tasks`

## Background

The Team Task Tracker starter app can list all tasks and open tasks, but it does not yet support filtering the list down to only completed tasks.

Your task is to add that behavior in a beginner-friendly, well-tested way.

## Acceptance criteria

- `completed` is accepted as a valid filter
- only completed tasks are returned for the completed filter
- the CLI can display completed tasks without error
- tests cover normal behavior and at least one edge case
- existing `all` and `open` filters continue to work

## Hints

- Start by reading `src/tasks.js`
- Search for the unsupported filter error
- Update tests before or alongside the code change
- Think about what should happen when no tasks are completed
- Run `npm test` and `npm run lint` before opening a pull request

## Learner comment prompt

Before coding, add a short comment like:

> I’m working on this issue. I plan to add support for the completed filter in the task logic, update the CLI behavior if needed, and add tests for the completed and empty-list cases.

## Definition of done

- code is updated
- tests pass locally
- lint passes locally
- pull request clearly explains what changed and how it was validated
