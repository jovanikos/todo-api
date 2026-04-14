# Coding Conventions

## Language
Plain JavaScript (CommonJS modules, no TypeScript).

## Patterns
- Routes live in `src/routes/`, one file per resource.
- Business logic and data access live in `src/models/`, one file per resource.
- Routes call model functions directly — no service layer yet.
- Always parse `:id` params as `Number(req.params.id)`.
- Return `404` with `{ error: 'Not found' }` when a resource doesn't exist.
- Return `400` with `{ error: '<reason>' }` for bad input.
- Use `res.status(201)` for POST (creation), `204` for DELETE (no body).

## Patterns to Avoid
- Don't put data logic inside route handlers.
- Don't use `parseInt` — use `Number()` for id parsing.
