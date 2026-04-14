const express = require('express');
const router = express.Router();
const Todo = require('../models/todo');

const VALID_PRIORITIES = ['low', 'medium', 'high'];

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
  const { title, priority } = req.body;
  if (!title) return res.status(400).json({ error: 'title is required' });
  if (priority && !VALID_PRIORITIES.includes(priority)) {
    return res.status(400).json({ error: 'priority must be low, medium or high' });
  }
  res.status(201).json(Todo.create(title, priority));
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
