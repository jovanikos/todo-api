# Common Commands

## Development
```bash
npm install       # install dependencies
npm run dev       # start with nodemon (auto-restart)
npm start         # start without nodemon
```

## Testing the API
```bash
curl http://localhost:3000/health
curl http://localhost:3000/todos
curl -X POST http://localhost:3000/todos -H "Content-Type: application/json" -d '{"title":"Buy milk"}'
curl -X PATCH http://localhost:3000/todos/1 -H "Content-Type: application/json" -d '{"done":true}'
curl -X DELETE http://localhost:3000/todos/1
```

## GitHub / PR
```bash
gh pr list                  # list open PRs
gh pr view <number>         # view PR details
gh pr diff <number>         # see PR diff
gh pr merge <number>        # merge a PR
```
