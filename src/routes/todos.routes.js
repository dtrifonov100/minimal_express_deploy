const { Router } = require('express');

const todosRoutes = Router();

const todos = [
  {
    id: 1,
    title: 'Write code',
    completed: false,
  },
];

const getAllTodos = (req, res) => {
  res
    .status(200)
    .json({ message: 'hello back to nodejs', name: process.env.NAME, todos });
};

const createTodo = (req, res) => {
  const { title = 'New ToDo' } = req.body;
  if (!title)
    return res.status(400).json({ error: 'Title is required for a todo.' });
  const newTodo = {
    id: todos.length + 1,
    title,
    completed: false,
  };
  todos.push(newTodo);

  res.status(201).json(newTodo);
};

todosRoutes.get('/', getAllTodos);
todosRoutes.get('/create', createTodo);
todosRoutes.post('/', createTodo);

module.exports = todosRoutes;
