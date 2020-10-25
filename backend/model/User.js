var mongoose = require('mongoose')

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
    date: {
        type: Date,
        default: Date.now
    },
    qrCode: {
        type: String,
        reqired: true
    },
    properties: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'properties'
        }
    ],
    connectedMatches: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'users'
        }
    ],
    events: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'events'
        }
    ]
});

module.exports = mongoose.model('users', UserSchema);