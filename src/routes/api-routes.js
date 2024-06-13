const { Router } = require('express');
const todosRoutes = require('./todos.routes');

const apiRoutes = Router();

const todos = [
  {
    id: 1,
    title: 'Write code',
    completed: false,
  },
];

apiRoutes.use('/todos', todosRoutes);
apiRoutes.get('/', (req, res) => {
  res.status(200).json({
    msg: 'sample api route',
  });
});

module.exports = apiRoutes;
