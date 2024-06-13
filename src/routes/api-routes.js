const { Router } = require('express');
const todosRoutes = require('./todos.routes');

const apiRoutes = Router();

apiRoutes.use('/todos', todosRoutes);
apiRoutes.get('/', (req, res) => {
  res.status(200).json({
    msg: 'sample api route',
  });
});

module.exports = apiRoutes;
