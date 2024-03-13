const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema({
   username:{
    type:String,
    required:true
 },
 password:{
    type:String,
    required:true
 },
 
});

const Loginschema = mongoose.model('registerschema', registerSchema)

module.exports = Loginschema