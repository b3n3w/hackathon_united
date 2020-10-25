
const path = require('path');
const User = require('../model/User');




exports.getUserID = async function (req, res) {

    return userID;

}

exports.createGuestUser = async function (req, res) {

    if (req.params.phone != null && User.findOne({ 'phone': req.params.phone })) {
        //Guest User mit dieser Rufnummer gefunden -> Möchte User Registrierung abschließen
    } else {
        const currUser = User.create({
            firstname: req.params.firstname,
            lastname: req.params.lastname,
            phone: req.params.phone,
            role: "GUEST",
            qrCode: "Testblas"
        }
        )
    }
    return currUser._id;
}

// get user information by user id
exports.getUserParams = async function (req, res) {

    User.findOne({
        '_id': req.params.id
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
};
