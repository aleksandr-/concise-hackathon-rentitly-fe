const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const { apiRoutes } = require('./src/routes/index');
const helmet = require('helmet');
const expressStaticGzip = require("express-static-gzip")

const app = express();

// Use native ES6 Promises since mongoose's are deprecated.
mongoose.Promise = global.Promise


app.use(favicon(path.join(__dirname, 'static', 'favicon.ico')));
app.use(logger('dev'));

app.use(bodyParser.json({
    limit: '5MB'
}));
app.use(bodyParser.urlencoded({
    extended: false,
    limit: '5MB'
}));

app.use('/robots.txt', express.static(path.join(__dirname, 'dist/static/robots.txt')));
app.use(expressStaticGzip(path.join(__dirname, 'dist')));




module.exports = app;


console.log("App running on localhost:" + process.env.PORT)