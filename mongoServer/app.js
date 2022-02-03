var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var solicitudesRoutes = require('./routes/solicitudesRoutes');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const nodb = require("./models");
app.use(cors());

app.use('/users', usersRouter);
app.use('/', solicitudesRoutes);
module.exports = app;
