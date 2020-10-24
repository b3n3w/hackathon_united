var mongoose = require('mongoose')

const EventSchema = new mongoose.Schema({
    matchID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    timeStamp: {
        type: Date.timeStamp
    }
})