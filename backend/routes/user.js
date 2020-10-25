
var bcrypt = require('bcryptjs');
const path = require('path');
const User = require('../model/User');




exports.getUserID = async function (req, res) {
    return userID;
}

exports.registerUser = async function (req, res) {

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(
        req.body.password,
        salt
    );
    console.log(hashedPassword);
    try {
        let user = await User.findOne({
            username: req.body.username
        });
        if (user) {
            return res.status(400).json({
                msg: "User Already Exists"
            });
        }
        user = new User({
            username: req.body.username,
            password: hashedPassword,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            role: req.body.role,
            phonenumber: req.body.phone,
            businesses: {},
            connectedMatches: {}
        });;

        await user.save();

    } catch (err) {
        console.log(err.message);
        res.status(500).send("Error in Saving UserData");
    }
}


exports.loginUser = async function (req, res) {
    try {
        let user = await User.findOne({
            username
        });
        if (!user)
            return res.status(400).json({
                message: "User Not Exist"
            });

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({
                message: "Incorrect Password !"
            });
        } else {
            req.session.key = req.body.username;
            res.end('done');
        }
    } catch (e) {
        console.error(e);
        res.status(500).json({
            message: "Server Error"
        });
    }
}

exports.logoutUser = async function (req, res) {
    try {
        req.session.destroy(function (err) {
            if (err) {
                console.log(err);
            } else {
                res.redirect('/');
            }
        });
    } catch (e) {
        console.error(e);
        res.status(500).json({
            message: "Server Error"
        });
    }
}

exports.createGuestUser = async function (req, res) {

    if (req.params.phone != null && User.findOne({ 'phone': req.params.phone })) {
        //Guest User mit dieser Rufnummer gefunden -> Möchte User Registrierung abschließen
    } else {
        try {
            const currUser = new User({
                firstname: req.params.firstname,
                lastname: req.params.lastname,
                phone: req.params.phone,
                role: "GUEST",
                qrCode: "Testblas"
            })
            await currUser.save();

        } catch (err) {
            console.log(err.message);
            res.status(500).send("Error in Saving UserData");
        }
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
