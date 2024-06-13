const express = require('express');
const app = express();
const apiRoutes = require('./routes/api-routes');
require('dotenv').config();

const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRoutes);

app.get('/', (req, res) => {
  const date = new Date();
  res.send({
    date: date.toString(),
    iso: date.toISOString(),
    utc: date.toUTCString(),
  });
});
app.listen(PORT, () => {
  console.log(`Server is started on PORT=${PORT}`);
});
