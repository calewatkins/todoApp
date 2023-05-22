const express = require('express');
const app = express();
const bodyParser = require('body-parser');
//grab config folder will grab the index.js
const mongoose = require('mongoose');
const config = require('./config');
const router = require('./routes/index');

var port = process.env.port || 3000;

//set up namespace
app.use('/assets', express.static(__dirname + '/public'));

//app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//create database connection
mongoose.connect(config.getDbConnectionString());

app.use('/', router);

app.listen(port);

