const mongoose = require('mongoose');

const screenSchema = new mongoose.Schema({
 ScreenName:{
type:String,
required:true
 },
 ID:{
    type:String,
    required:true
 },
 Status:{
    type:String,
    required:true
 },
 LiveSnapshot:{
   type:String,
   required : true,
 },
 Captured:
 {
    type:String,
    required:true 
 },
 ContentType:{
    type:String,
    required:true 
 },
 ContentName:{
    type:String,
    required:true
 },
 
 createdBy: {
   type: mongoose.Schema.Types.ObjectId,
   ref: 'User',
   required: true
 }
});

const screenModel = mongoose.model('screenSchema', screenSchema)

module.exports = screenModel