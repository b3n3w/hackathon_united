var mongoose = require('mongoose')
// const dummy = require('mongoose-dummy');
const ignoredFields = ['_id','created_at', '__v', /detail.*_info/];

const UserSchema = new mongoose.Schema({

    username: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    phonenumber: {
        type: String
    },
    role: {
        type: String
    },
    street: {
        type: String,
        required: true
    },
    postalcode: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    qrCode: {
        type: String,
        reqired: true
    },
    business: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'businesses'
        }
    ],
    connectedMatches: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'users'
        }
    ]
});






let users = mongoose.model('users', UserSchema);
// let randomObject = dummy(users, {
//     ignore: ignoredFields,
//     returnDate: true
// })
//
// console.log(randomObject);
module.exports = users
