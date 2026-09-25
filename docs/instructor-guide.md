# Instructor Guide

## Goal of the exercise

Help learners experience the complete GitHub contribution flow, not just local coding.

## Recommended facilitation flow

1. Start with a short repository tour
2. Ask learners to explain the issue in their own words
3. Require them to run the baseline app, tests, and lint locally
4. Let them create their own branch and implement the feature
5. Use pull requests and review comments for feedback instead of direct fixes

## What the learner should discover

- where project expectations are documented
- how small code changes connect to tests and CI
- why pull requests are communication tools
- how GitHub Actions supports quality
- how professional review etiquette improves team work

## Hints you can give without solving the task

- "Which function already controls filtering?"
- "What does the unsupported filter error tell you about the missing behavior?"
- "What should happen when there are no completed tasks?"
- "Can you prove the CLI now supports the new filter?"

## Reset and reuse ideas

- Reuse the same repository for multiple learners by opening a fresh issue each time
- Reset the sandbox by asking learners to branch from `main`
- Keep the baseline starter branch unchanged so the first exercise remains available
- If you want to rerun the same scenario, revert or recreate only the learner feature branch

## Assessment guidance

Assess more than the final code.

Look for:

- clear branch naming
- focused commits
- meaningful tests
- ability to explain CI results
- professional review responses
- secure habits

## Suggested rubric

### Meets expectations

- completed the feature
- added tests
- passed local checks
- opened a clear pull request
- handled review feedback well

### Exceeds expectations

- anticipated edge cases without prompting
- improved documentation when appropriate
- used Copilot thoughtfully and could explain decisions
- helped another learner review a pull request
