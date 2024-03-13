const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({
    schedulename:{
        type:String,
        required:true
    },
    contenttype:{
        type:String,
        required:true
    },
    startingdate:{
        type:String,
        required:true
    },
    endingdate:{
        type:String,
        required:true
    }

   
})

const scheduleModel = mongoose.model('schedule',scheduleSchema)

module.exports= scheduleModel