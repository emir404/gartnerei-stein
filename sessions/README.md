# sessions/ — raw build-session capture

Records how a site actually gets built in this repo, turn by turn, so the human-driven
workflow can be analyzed and progressively automated.

| File | What it is | Written by |
|------|------------|-----------|
| `raw-session.md` | Human-readable, append-only log of every operator prompt (verbatim). | `UserPromptSubmit` hook → `.claude/hooks/record-prompt.sh` |
| `transcript-<id>.jsonl` | Complete unedited transcript for session `<id>` — every message, tool call, and tool result. Refreshed after each turn. | `Stop` hook → `.claude/hooks/snapshot-transcript.sh` |

Both hooks are registered in `.claude/settings.json`, are best-effort (they never block a
session), and write only inside this directory.

**Note:** `transcript-*.jsonl` files are full session dumps — they can be large and may
contain pasted secrets or file contents. Decide per-repo whether to commit them or add
`sessions/transcript-*.jsonl` to `.gitignore`. `raw-session.md` is safe and intended to be
committed.
