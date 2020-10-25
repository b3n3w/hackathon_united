var mongoose = require('mongoose')
// const dummy = require('mongoose-dummy');
const ignoredFields = ['_id','created_at', '__v', /detail.*_info/];
const URLSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
});



let urls = mongoose.model('urls', URLSchema);
// let randomObject = dummy(urls, {
//     ignore: ignoredFields,
//     returnDate: true
// })
//
// console.log(randomObject);
module.exports = urls
