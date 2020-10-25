var express = require('express');
var router = express.Router();
const path = require('path');
var userRoute = require('./user');
var businessRoute = require('./business');
var visitRoute = require('./visit');
var bodyParser = require('body-parser')
// create application/json parser
var jsonParser = bodyParser.json()



router.get('/api/user/:id', (req, res) => {
    userRouter.getUserParams(req, res);
});

router.get('/api/business/:id', (req, res) => {
    businessRouter.getBusinessParams(req, res);
});

router.get('/api/visit/:id', (req, res) => {
    visitRouter.getVisitParams(req, res);
});


//Post after Handshake between User and Business
router.post('/api/business/visit', (req, res) => {
    visitRouter.visitBusiness(req, res);
});