const express = require("express");
const app = express();
const create = require('./model/dbSetup');
const bodyParser = require('body-parser');
const myErrorLogger = require('./utilities/errorLogger');
const myRequestLogger = require('./utilities/requestLogger');
const router = require('../src/routes/routing');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());
app.use(myRequestLogger);
app.use('/', router);
app.use(myErrorLogger);

app.get('/setupDb', (req, res, next) => {
    create.setupDb().then((data) => {
        res.send(data)
    }).catch((err) => {
        next(err)
    })
})

app.listen(4050);
console.log("Serve is started");