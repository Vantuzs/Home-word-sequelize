const express = require('express');
const router = require('./routers/index');
const { errorHandelr } = require('./middleware/errorHandler.mv');


const app = express();

app.use(express.json());
app.use('/api',router);
app.use(errorHandelr)


module.exports = app;