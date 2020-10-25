var mongoose = require('mongoose')
const dummy = require('mongoose-dummy');
const ignoredFields = ['_id','created_at', '__v', /detail.*_info/];

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


let visits = mongoose.model('visits', VisitSchema);
let randomObject = dummy(visits, {
    ignore: ignoredFields,
    returnDate: true
})

console.log(randomObject);
module.exports = visits
