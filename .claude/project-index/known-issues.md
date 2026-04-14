# Known Issues & Gotchas

## Active Issues
| Issue | File | Description |
|-------|------|-------------|
| In-memory only | `src/models/todo.js` | Data is lost on server restart — no persistence yet |

## Gotchas
- `nextId` counter never resets, even after deletes. IDs are not reused.
- No authentication — all endpoints are public.

## Technical Debt
- No test suite yet.
- No input sanitization beyond checking `title` presence.
