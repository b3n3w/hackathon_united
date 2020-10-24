var mongoose = require('mongoose')

const EventSchema = new mongoose.Schema({
    ownerID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'properties'
    },
    date: {
        type: Date
    },
    matches:
        [
            {
                matchID: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'users'
                },
                timeStamp: {
                    type: Date.timeStamp
                }
            }
        ]
})