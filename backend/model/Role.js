var mongoose = require('mongoose')
const dummy = require('mongoose-dummy');
const ignoredFields = ['_id','created_at', '__v', /detail.*_info/];

const RoleSchema = new mongoose.Schema({
    description: {
        enum: ["OPERATOR", "USER", "GUEST", "ADMIN"],
        required : true
    },
})


let rolls = mongoose.model('rolls', RoleSchema);
let randomObject = dummy(rolls, {
    ignore: ignoredFields,
    returnDate: true
})

console.log(randomObject);
module.exports = rolls
