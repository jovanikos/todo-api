const express = require('express');
const router = express.Router();
const Todo = require('../models/todo');

// GET /todos
router.get('/', (req, res) => {
  res.json(Todo.getAll());
});

// GET /todos/:id
router.get('/:id', (req, res) => {
  const todo = Todo.getById(Number(req.params.id));
  if (!todo) return res.status(404).json({ error: 'Not found' });
  res.json(todo);
});

// POST /todos
router.post('/', (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ error: 'title is required' });
  res.status(201).json(Todo.create(title));
});

// PATCH /todos/:id
router.patch('/:id', (req, res) => {
  const todo = Todo.update(Number(req.params.id), req.body);
  if (!todo) return res.status(404).json({ error: 'Not found' });
  res.json(todo);
});

// DELETE /todos/:id
router.delete('/:id', (req, res) => {
  const ok = Todo.remove(Number(req.params.id));
  if (!ok) return res.status(404).json({ error: 'Not found' });
  res.status(204).send();
});

module.exports = router;
