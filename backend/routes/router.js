var express = require('express');
var router = express.Router();
const path = require('path');
var userRoute = require('./user');
var bodyParser = require('body-parser')
// create application/json parser
var jsonParser = bodyParser.json()



router.get('/api/user/')