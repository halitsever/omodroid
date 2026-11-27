# AGENTS.md

omodroid is a planned Android launcher and overlay for the Omoda 5 (2023) infotainment head unit, for owners who want to customize it. The repo has no source code yet, only docs, license and CI.

## Verify a change

- CI (`.github/workflows/ci.yml`) runs one check: `npx -y prettier@3.6.2 --check .`
- Prettier reads `.prettierrc` (`printWidth: 180`) and covers Markdown and YAML too. Run `npx -y prettier@3.6.2 --write <file>` on every file you add or edit before pushing.

## Docs site

- The project website is a VitePress site in `docs/`, published to https://halitsever.github.io/omodroid/ by `.github/workflows/docs.yml`.
- Build it with `cd docs && npm ci && npm run build`. `npm run dev` starts a local server.
- The site follows the same rule as the README: it says the project is planned and lists no features, install steps or head unit details.

## Gotchas

- Describe only what the repo contains. Until code lands, README and docs say the project is at an early stage and list no features.

## Conventions

- Commit subjects in conventional-commit style, in English, subject line only: no body, no trailer.
- Work on a branch and open a PR against `main`. The owner merges.
- Write new text without emoji. Keep code comments short, one line where possible, and say why.
- The README follows the owner's template. Keep every image served from `halitsever-api.vercel.app` byte-for-byte; only the `title=` value of `api/repo-title` and the issue wrapper link may be corrected.
- Leave version bumps and releases to the owner.
