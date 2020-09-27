const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const categirySchema = new Schema({
  
    name :{
        type: string,
        required: true,
        unique : true,
        trim: true,
        minlength: 3
    },
   timestapes :true
});

const Category = mongoose.model('Category', categirieSchema);

module.exports = Category;  