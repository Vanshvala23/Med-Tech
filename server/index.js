const express = require('express');
const bodyParser = require('body-parser');
const authRouter = require('./routes/authRouter');
const callRouter=require('./routes/CallRouter')
const ConnectDB=require('./db/db');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/auth', authRouter);
app.use('/calls',callRouter);
ConnectDB();
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
