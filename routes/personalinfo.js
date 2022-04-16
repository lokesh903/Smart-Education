var mongoose = require('mongoose') 

/* GET users listing. */
const personalSchema = new mongoose.Schema({

    fname: String,
    lname: String,
    email: String,
    mnum: Number,
    dob: Date,
    wnum: Number,
    gender:String,
    state: String,
    district:String,
    religion:String,
    class:String,
    course:String,
    income:Number,
    pc:String
})
const pinfo= mongoose.model("pi",personalSchema)
module.exports = pinfo;
