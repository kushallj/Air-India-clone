const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    comment:{
        type:String,
        required:true,
        minlength: 15
    },
    flight:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Flight',
    },
    price:{
        type:Number,
        required:true
    }

},{timestamps: true});

const reviewModel = new mongoose.Model('Review',reviewSchema);

module.exports = reviewModel; 