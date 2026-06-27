#!/usr/bin/env bash
# Stop hook — snapshot the full raw session transcript (JSONL) into the repo.
#
# Runs whenever Claude finishes a turn, so sessions/transcript-<id>.jsonl always holds
# the complete, unedited record of the session (every message, tool call, and result) —
# the "raw session" backing the human-readable raw-session.md.
#
# Best-effort by design: always exits 0 so it can never block the session from stopping.

root="${CLAUDE_PROJECT_DIR:-$PWD}"
log_dir="$root/sessions"

input="$(cat)"
mkdir -p "$log_dir" 2>/dev/null

transcript="$(printf '%s' "$input" | jq -r '.transcript_path // ""' 2>/dev/null)"
session="$(printf '%s' "$input"    | jq -r '.session_id // "session"' 2>/dev/null)"

if [ -n "$transcript" ] && [ -f "$transcript" ]; then
  cp "$transcript" "$log_dir/transcript-${session:0:8}.jsonl" 2>/dev/null
fi

exit 0
