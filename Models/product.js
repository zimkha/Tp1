const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
   name :{
        type: string,
        required: true,
        unique : true,
        trim: true,
        minlength: 3

   },
   price : {
       type : int,
       required: true,
   },
   category: {
    type: string,
    required: true,
    unique : true,
    trim: true,
    minlength: 3
   },
   stock : {
    type : int,
    required: true,
   }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;