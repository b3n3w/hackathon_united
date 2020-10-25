const e = require('express');
const path = require('path');
const Business = require('../model/Business');
const User = require('../model/User');


exports.createBusiness = async function (req, res) {
    if (req.params.business) {
        User.findOne({
            '_id': req.params.id
        }).select().exec().then(user => {
            if (!user) {
                res.status(200).json({
                    success: true,
                    message: 'Sorry, no User with this id found.',
                    business: {}
                }
                )
            } else {
                Business.create({
                    infoURLs: {},
                    description: business.description,
                    slotDuration: business.duration,
                    image: business.image,
                    email: business.image,
                    opening_hours: {},
                    visitis: {}
                },
                    function (err, newBusiness) {
                        if (err) {

                        } else {
                            user.businesses = user.businesses || [];
                            user.businesses.push(newBusiness._id);
                            user.save();
                        }
                    });
            }
        });

    } else {
        res.status(400).json({
            success: true,
            message: 'No valid Data provided',
            business: {}

        });
    }
}


exports.updateBusiness = async function (req, res) {
    if (Business.findById(req.params.id)) {

    } else {
        res.status(200).json({
            success: true,
            message: 'Sorry, No such Business found',
            business: {}

        });
    }
}




exports.visitBusiness = async function (req, res) {
    Business.findOne({
        '_id': req.body._BusinessId
    }).select().exec().then(business => {
        if (!business) {
            res.status(200).json({
                success: true,
                message: 'Sorry, no Business with this id found.',
                business: {}
            });
        } else {

            if (User.findById(req.body._userID)) {
                Visit.create({
                    matchID: req.body._userID,
                    timeStamp: Date.now()
                },
                    function (err, newVisit) {
                        if (err) {

                        } else {
                            business.visits = business.visits || [];
                            business.visits.push(newVisit._id);
                            business.save();
                        }
                    });
            } else {
                let guestUserID = userRouter.createGuestUser(req, res);
                Visit.create({
                    matchID: guestUserID,
                    timeStamp: Date.now()
                },
                    function (err, newVisit) {
                        if (err) {

                        } else {
                            business.visits = business.visits || [];
                            business.visits.push(newVisit._id);
                            business.save();
                        }
                    });
            }
        }
    });
};


exports.getCurrentVisits = async function (req, res) {
    Business.findOne({
        '_id': req.params.id
    }).select().exec().then(business => {
        if (!business) {
            res.status(200).json({
                success: true,
                message: 'Sorry, no business with this id found.',
                business: {}
            });
        } else {
            business.find({
                'visitors.matchID': matchID
            }, 'visitors'
                , function (err, docs) {
                    if (err || !docs) {
                        console.log("No Visits in Timeintervall found");
                    } else {
                        res.send(docs);
                    };
                })
        }
    });
}

exports.getVisitsinIntervall = async function (req, res) {

    let from = req.body.fromTime;
    let to = req.body.toTime;

    let allVisits = Business.find({
        "visits.createdAt:": { $gt: from },
        "visits.createdAt:": { $lt: to }
    }, function (err, docs) {
        if (err || !docs) {
            console.log("No Visits in Timeintervall found");
        } else {
            return docs;
        };
    })
}


/*
 
[
 { 
   start: 9h00,
   end: 11h00
 },
 { 
   start: 13h00,
   end: 18h00
 }
]
*/

// get business by busness id
exports.getBusinessParams = async function (req, res) {
    Business.findOne({
        '_id': req.params.id
    }).select().exec().then(business => {
        if (!business) {
            res.status(200).json({
                success: true,
                message: 'Sorry, no business with this id found.',
                business: {}
            });
        } else {
            res.status(200).json({
                success: true,
                business: business
            });
        }
    })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                success: false,
                message: 'Error while fetching the business from the database.'
            });
        });
};
