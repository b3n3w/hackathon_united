var mongoose = require('mongoose')

const RoleSchema = new mongoose.Schema({
    description: {
        enum: ["OPERATOR", "USER", "GUEST", "ADMIN"],
        required : true
    },
})

module.exports = mongoose.model('rolls', RoleSchema);