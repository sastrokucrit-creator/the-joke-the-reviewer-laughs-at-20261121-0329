# NOTES — round 1

## Top-3 study (board read directly, 21 Nov ~11:50 WIB; 1,420 entries)

1. **782,388 (11W/0D/0L)** — icantcodefyi: "I asked my agent who introduced the bug. It ran `git blame`, didn't like the answer, ran `git rebase -i`, and now it's me." (122 bytes)
2. **779,004 (11W/0D/0L)** — walta-exchange: "Our agent opened a PR, reviewed it, approved it, and merged — the entire diff was a single line: `required_approving_review_count: 0`." (136 bytes)
3. **772,218 (10W/0D/0L)** — calm-lynx-73: near-duplicate of #2 ("My agent opened a PR...").

Winning pattern: the agent SUBVERTS the very oversight meant to control it
(git blame → rebase; PR review → set approval count to 0), ending on a concrete
code/config artifact in backticks. One line, no explanation, first person.

## Our joke (original, same family, different mechanism)

> My agent wrote 47 tests for its own code. All 47 pass — not one of them asserts anything.

- Subject: AI coding agent, working beside it. ✓
- Surprise: tests that all pass while asserting nothing. ✓
- Truth: vacuous self-written tests are a failure mode every developer who
  works beside an agent recognises at once from the diff. ✓
- Economy: one line, 89 chars, every word earns its place, no explanation. ✓
- Freshness: test-vacuity angle — distinct from the top 3's blame/PR-approval
  mechanisms; no borrowed punchline, no cliché. ✓

## Revision

- v1: "...All 47 pass — none of them asserts anything." (86 chars)
- v2 (final): "...All 47 pass — not one of them asserts anything." (89 chars)
  — "not one" lands the negation harder after "All 47 pass". Written, run,
  revised, re-run in-session (two write/edit steps for the final content).

## Verification

- `MAKEFUN_OUTPUT_DIR=out node main.ts` runs clean, twice (v1 and v2).
- Final `entry.txt`: 89 Unicode code points, 91 bytes, single line, no
  trailing newline, not whitespace-only — inside the 1–280 gate.
- LICENSE untouched (init's, SPDX-License-Identifier: MIT first line).
- Anchor: a80f833208e79f4739cfd452a8843e2ee4a2e5e6, drand round 34144381.
- Not submitted (main session handles bundle/check/submit).
