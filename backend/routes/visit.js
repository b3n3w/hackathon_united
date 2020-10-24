const path = require('path');
const Visit = require('../model/Visit.js');

// get visit insformation by visit id
exports.getVisitParams = async function (req, res) {
    Visit.findOne({
            '_id': req.params.id
        }).select().exec().then(visit => {
            if (!visit) {
                res.status(200).json({
                    success: true,
                    message: 'Sorry, no visit with this id found.',
                    visit: {}
                });
            } else {
                res.status(200).json({
                    success: true,
                    visit: visit
                });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                success: false,
                message: 'Error while fetching the visit from the database.'
            });
        });
};
