# Security Policy

This repository is a training sandbox, but secure habits still matter.

## No secrets in commits

Never commit:

- passwords
- API keys
- access tokens
- private certificates
- copied production data

If a secret is added by mistake, remove it immediately and notify the instructor or repository owner.

## Reporting security concerns

If you find a security issue in the training content or code:

1. Do not post sensitive details publicly in an issue
2. Contact the repository owner directly
3. Describe what you found, where it exists, and how it can be reproduced safely

## Dependency and security practices

- Keep dependencies minimal
- Prefer well-known packages
- Review dependency updates before merging
- Run tests and lint after updating dependencies
- Pay attention to Dependabot pull requests and alerts

## Responsible GitHub Copilot use

Use Copilot to assist, not to replace review.

- Do not paste secrets or private data into prompts
- Read every suggestion before accepting it
- Run tests after using generated code
- Check generated code for security, correctness, and unnecessary complexity

## Safe training habits

- Work in branches, not directly on `main`
- Keep pull requests small
- Use GitHub Actions results to confirm the change is safe
- Ask for review when unsure
