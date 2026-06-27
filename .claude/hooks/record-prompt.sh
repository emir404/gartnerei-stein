#!/usr/bin/env bash
# UserPromptSubmit hook — append each verbatim user prompt to the raw session log.
#
# Part of the autonomous website-build pipeline: this captures the human-in-the-loop
# signal (every instruction/decision the operator gives) so the workflow can later be
# distilled into an autonomous one.
#
# Best-effort by design: it must NEVER block or interfere with the session, so it
# swallows its own errors and always exits 0. Writes nothing to stdout (stdout from a
# UserPromptSubmit hook would be injected into the model's context).

root="${CLAUDE_PROJECT_DIR:-$PWD}"
log_dir="$root/sessions"
log="$log_dir/raw-session.md"

input="$(cat)"
mkdir -p "$log_dir" 2>/dev/null

prompt="$(printf '%s' "$input"  | jq -r '.prompt // ""'          2>/dev/null)"
session="$(printf '%s' "$input" | jq -r '.session_id // "?"'     2>/dev/null)"
ts="$(date -u +'%Y-%m-%dT%H:%M:%SZ' 2>/dev/null)"

if [ -n "$prompt" ]; then
  {
    printf '\n\n## ⟶ user · %s · session %s\n\n' "$ts" "${session:0:8}"
    printf '%s\n' "$prompt"
  } >> "$log" 2>/dev/null
fi

exit 0
