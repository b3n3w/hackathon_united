
const path = require('path');
const User = require('../model/User');
const jwt = require("jsonwebtoken");
const { timeStamp } = require('console');

exports.getUserName('/api/user/:username'){

}


exports.getUserID = async function (req, res) {

    return userID;

}



exports.getUserParams = async function (req, res) {

    User.findOne({
        '_id': req.id
    }).select().exec().then(user => {
        if (!user) {
            res.status(200).json({
                success: true,
                message: 'Sorry, no user with this id found.',
                user: {}
            });
        } else {
            res.status(200).json({
                success: true,
                user: user
            });
        }
    })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                success: false,
                message: 'Error while fetching the user from the database.'
            });
        });
});



