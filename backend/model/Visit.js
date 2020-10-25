var mongoose = require('mongoose')

const VisitSchema = new mongoose.Schema({
    matchID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    timeStamp: {
        type: Date.timeStamp
    },
    createdAt: {
        type: Date,
        expires: '11814400s',
        default: Date.now
    },
})

module.exports = mongoose.model('visits', UserSchema);