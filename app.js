const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
var auth = require('./routes/auth');
var user = require('./routes/user');


app.use(cors())
app.use(bodyParser.json());


app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Headers', 'Authorization');
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/auth', auth);
app.use('/user', user);

module.exports = app;
