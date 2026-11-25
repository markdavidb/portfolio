# Portfolio — AGENTS.md

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Project

Personal developer portfolio built with Next.js App Router, React, TypeScript, Tailwind CSS, and npm.

## Workflow

- Make the smallest coherent change that satisfies the request.
- Preserve existing architecture, design, and unrelated work.
- Questions and reviews: inspect and report without editing.
- Keep context lean: use targeted searches, bounded reads, and focused diffs. Avoid unnecessary scans, large logs, and repeated reads.
- Avoid speculative refactoring, premature abstractions, unnecessary dependencies, and subagents for simple tasks.
- Ask before destructive actions, new production dependencies, commits, pushes, deployments, or creating branches and PRs.

## Development

- Prefer Server Components; use Client Components only when necessary.
- Prioritize maintainability, performance, accessibility, SEO, and responsive design.
- Keep the UI professional, distinctive, and visually consistent. Avoid generic AI aesthetics and unnecessary visual complexity.
- Never fabricate portfolio content, professional achievements, or metrics.
- Never expose secrets or private information.

## Skills

Installed skills are located at `.agents/skills/<name>/SKILL.md`.

Use the relevant skill before working on matching tasks:

- `next-best-practices`: Next.js conventions, routing, rendering, and framework architecture.
- `vercel-react-best-practices`: React performance, rendering, data fetching, and optimization.
- `frontend-design`: UI creation, redesign, and meaningful visual improvements.
- `code-review`: code and PR reviews; report verified, actionable findings.
- `improve-codebase-architecture`: architectural reviews, coupling, duplication, and structural improvements.
- `find-skills`: discover missing specialized capabilities when needed.

Load only the relevant SKILL.md and necessary references. Usually one skill is enough; combine only for distinct requirements. Simple tasks may need no skill. Never load all skills by default or let skill guidance expand the requested scope.

## Validation and Reporting

- Use `npm run format` and `npm run lint:fix` to apply fixes.
- Run `npm run check` for full validation, or run `npm run format:check`, `npm run lint`, `npm run typecheck`, and `npm run build` as needed.
- Verify significant UI changes across relevant screen sizes when possible.
- Reviews: report only actionable findings with severity, location, impact, and trigger. Check for false positives.
- Keep final responses concise: outcome, changed files, validation, and remaining risks.
- Never claim unperformed validation.
