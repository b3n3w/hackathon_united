var express = require('express');
var router = express.Router();
const path = require('path');
var userRouter = require('./user');
var businessRouter = require('./business');
var visitRouter = require('./visit');
var bodyParser = require('body-parser')

// create application/json parser



router.get('/api/user/:id', (req, res) => {
    userRouter.getUserParams(req, res);
});


/**
 * Getter for Business Collection 
 */

router.get('/api/business/:id', (req, res) => {
    businessRouter.getBusinessParams(req, res);
});

router.get('/api/business/curr_visitors/:id', (req, res) => {
    businessRouter.getCurrentVisits(req, res);
});

router.get('/api/business/time_visitors/:id', (req, res) => {
    businessRouter.getVisitsinIntervall(req, res);
});


/**
 * Getter for Users Collection
 */

router.get('/api/user/visited', (req, res) => {
    userRouter.getVisitedBusinesses(req, res);
})

router.get('/api/user/connectedUsers', (req, res) => {
    userRouter.getConnectedUsers(req, res);
})


router.get('/api/visit/:id', (req, res) => {
    visitRouter.getVisitParams(req, res);
});



/**
 * Posts for Users Collection
 * @function register
 * @function login
 * @function logout
 */

router.post('/api/user/register', (req, res) => {
    userRouter.registerUser(req, res);
})

router.post('/api/user/login', (req, res) => {
    userRouter.loginUser(req, res);
})

router.post('/api/user/logout', (req, res) => {
    userRouter.logoutUser(req, res);
})


/**
 * Posts for Business Collection
 * @function createBusiness
 * @function updateBusiness
 * @function deleteBusiness
 * @function visitBusiness
 
 */

router.post('/api/business/create', (req, res) => {
    businessRouter.createBusiness(req, res);
});

router.post('/api/business/update', (req, res) => {
    businessRouter.updateBusiness(req, res);
});

//Post after Handshake between User and Business
router.post('/api/business/visit', (req, res) => {
    businessRouter.visitBusiness(req, res);
});



module.exports = router;
