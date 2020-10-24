var mongoose = require('mongoose')

const EventTypeSchema = new mongoose.Schema({
    description: {
        enum: ["BUSINESS", "PRIVATE", "MAJOREVENT"],
        required : true
    },
})

module.exports = mongoose.model('eventtypes', RoleSchema);