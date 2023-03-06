const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');
const { logErrors, errorHandler } = require('./middlewares/error.handler');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
routerApi(app);

app.use(logErrors);
app.use(errorHandler);

//comando para iniciar el serve npm run dev
app.listen(port);
