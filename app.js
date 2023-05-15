const express = require('express');
const app = express();
const bodyParser = require('body-parser');
//grab config folder will grab the index.js
const mongoose = require('mongoose');
const config = require('./config');
const setupController = require('./controllers/setupController');
const apiConntroller = require('./controllers/apiController');

var port = process.env.port || 3000;

//set up namespace
app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

//create database connection
mongoose.connect(config.getDbConnectionString());
setupController(app);

apiConntroller(app);


app.listen(port);

