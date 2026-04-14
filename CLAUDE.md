# todo-api — Project Context

> Auto-loaded by Claude Code every session. Keep this up to date.

## What this project does
A simple in-memory Todo REST API built with Node.js + Express.
Used as a practice project for PR review workflows.

## Quick Reference
- [Architecture & File Map](.claude/project-index/architecture.md)
- [Coding Conventions](.claude/project-index/conventions.md)
- [Common Commands](.claude/project-index/commands.md)
- [Known Issues & Gotchas](.claude/project-index/known-issues.md)
- [PR History](.claude/project-index/pr-history.md)

## PR Review Workflow

When I ask you to **review a PR**, do the following:
1. Read the project-index files above for context.
2. Fetch the PR with `gh pr view <number>` and `gh pr diff <number>`.
3. Check for: logic bugs, missing validation, inconsistent patterns, security issues.
4. Post inline review comments with `gh pr review`.

When I ask you to **update the index after a merge**, do the following:
1. Read the merged PR diff with `gh pr diff <number>`.
2. Update the relevant project-index files (architecture, known-issues, etc.).
3. Append a summary entry to `pr-history.md`.
