const mongoose = require("mongoose");


const authorSchema = new mongoose.Schema({
fname:{
    type:String,
    required:true
},
lname:{
    type:String,
    required:true
},
Title:{
    type:String,
    required:true,
    enum:["Mr","Mrs","Miss"]
},
Emailaddress:{
    type:String,
    required:true,
    unique:true
},
Password:{
    type:String,
    required:true
}

},{timestamps:true});


module.exports = mongoose.model("Author",authorSchema);