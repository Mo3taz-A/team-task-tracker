# Contributing to Team Task Tracker

Thank you for contributing. This repository is a training sandbox, so the workflow is intentionally explicit.

## Work from an issue first

Why this matters: starting from an issue keeps the problem clear and makes it easier to review your change later.

1. Read the assigned issue
2. Confirm the acceptance criteria
3. Ask questions in the issue if anything is unclear
4. Create a branch only after you understand the work

If GitHub Issues are not available in your exercise, use the repository issue documents in `docs/issues/`.

## Branch naming

Use short, descriptive branch names:

- `feature/12-completed-task-filter`
- `fix/18-summary-count-bug`
- `docs/update-setup-steps`
- `test/add-empty-state-coverage`

## Commit expectations

Why this matters: focused commits are easier to review and safer to revert.

- Keep commits small and related to one purpose
- Write commit messages in the imperative mood
- Review `git diff` before committing

Good examples:

- `Add completed task filter`
- `Cover empty completed list in tests`
- `Clarify setup steps in README`

## Pull requests

Every change should arrive through a pull request.

Your pull request should:

- explain the problem
- summarize the code or documentation changes
- list testing performed
- link the issue when possible
- stay focused on one topic

Use the pull request template in `.github/pull_request_template.md`.

## Review etiquette

Why this matters: code review is a collaboration tool, not a gatekeeping tool.

- Assume good intent
- Respond to feedback professionally
- Ask for clarification instead of guessing
- Thank reviewers when they help improve the change
- Resolve conversations only after addressing them

## Testing

Before opening or updating a pull request:

```bash
npm test
npm run lint
```

If you change behavior, update or add tests to show the expected result.

## Merge expectations

This repository is meant to model a protected `main` branch workflow.

- Do not commit directly to `main`
- Wait for passing checks
- Wait for review approval
- Prefer squash merging for beginner exercises unless the instructor asks otherwise

## Responsible Copilot use

GitHub Copilot can help you learn faster, but you remain responsible for:

- verifying correctness
- checking for security issues
- avoiding secrets in prompts or commits
- making sure tests explain the expected behavior
