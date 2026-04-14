let todos = [];
let nextId = 1;

function getAll() {
  return todos;
}

function getById(id) {
  return todos.find(t => t.id === id) || null;
}

function create(title) {
  const todo = { id: nextId++, title, done: false };
  todos.push(todo);
  return todo;
}

function update(id, changes) {
  const todo = getById(id);
  if (!todo) return null;
  Object.assign(todo, changes);
  return todo;
}

function remove(id) {
  const idx = todos.findIndex(t => t.id === id);
  if (idx === -1) return false;
  todos.splice(idx, 1);
  return true;
}

module.exports = { getAll, getById, create, update, remove };
