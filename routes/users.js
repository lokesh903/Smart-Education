var mongoose = require('mongoose') 
mongoose.connect("mongodb://localhost/SmartEducation")
/* GET users listing. */
const userSchema = new mongoose.Schema({

heading: {
    type:String,
    unique:true
},
value: Number,
region:String,
about:String,
deadline:String,
eligibilityCard: String,
eligibilityPage: Array,
desirableQualifications: Array,
benifits:String,
documents:Array,
link:String,
tags:Array,
})
const scholarship= mongoose.model("scholarship",userSchema)
module.exports = scholarship;
