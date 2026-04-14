# Architecture & File Map

## Stack
- **Runtime:** Node.js
- **Framework:** Express 4.x
- **Storage:** In-memory (no database)

## Folder Structure
```
src/
├── app.js           # Express app setup, mounts routes, starts server
├── routes/
│   └── todos.js     # REST handlers for /todos — GET, POST, PATCH, DELETE
└── models/
    └── todo.js      # In-memory CRUD for todos (array + nextId counter)
```

## API Endpoints
| Method | Path         | Description          |
|--------|--------------|----------------------|
| GET    | /todos       | List all todos       |
| GET    | /todos/:id   | Get one todo         |
| POST   | /todos       | Create a todo        |
| PATCH  | /todos/:id   | Update a todo        |
| DELETE | /todos/:id   | Delete a todo        |
| GET    | /health      | Health check         |

## Data Shape
```json
{ "id": 1, "title": "Buy milk", "done": false }
```
