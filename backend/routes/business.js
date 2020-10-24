const path = require('path');
const Business = require('../model/Business');

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
