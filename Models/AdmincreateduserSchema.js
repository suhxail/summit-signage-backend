const mongoose = require('mongoose');

const AdmincreatedmemberSchema = new mongoose.Schema(
    {
        username:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        },
        allowupdatescreen:{
            type:Boolean,
            required:true
        },
        allownewtemplate:{
            type:Boolean,
            required:true
        },
        alloweditplaylist:{
            type:Boolean,
            required:true
        },
        alloweditschedule:{
            type:Boolean,
            required:true 
        },
        allowuploadtolibrary:{
            type:Boolean,
            required:true 
        },
        allowreports:{
            type:Boolean,
            required:true 
        },
        allownewscreen:{
            type:Boolean,
            required:true   
        },
        allowdeletescreen:{
            type:Boolean,
            required:true   
        },
        
        allownewplaylist:{
            type:Boolean,
            required:true   
        },
        allownewschedules:{
            type:Boolean,
            required:true
        },
        
        allowlibrary:{
            type:Boolean,
            required:true 
        },
        allowdeletelibrary:{
            type:Boolean,
            required:true 
        }
    }
);

const AdmincreatedModel = mongoose.model('AdmincreatedSchema', AdmincreatedmemberSchema);

module.exports = AdmincreatedModel;
