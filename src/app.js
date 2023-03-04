const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const StudentRouter = require('./router/Student');
const PORT = process.env.PORT || 3000;
require('./db/db');

app.use(cors());
app.options('*', cors())
app.use(bodyParser.json());
app.use(StudentRouter);



app.listen(PORT, () => {
  console.log('Example app listening on port', PORT);
});