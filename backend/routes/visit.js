
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
        }
    });
};

