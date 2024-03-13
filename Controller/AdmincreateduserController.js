const express = require('express');
const AdmincreatedmemberSchema = require('../Models/AdmincreateduserSchema');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const AdminCreateduserController = {
    admin: async (req, res) => {
        const {
            username, password, 
            
            allowupdatescreen, allownewtemplate, alloweditplaylist, alloweditschedule,
            allowuploadtolibrary, allowreports, allownewscreen, allowdeletescreen, allownewplaylist, allownewschedules,
            allowlibrary, allowdeletelibrary
        } = req.body;
        try {
            const existingUser = await AdmincreatedmemberSchema.findOne({ username: username })
            if (existingUser) {
                return res.status(401).json({ message: "username already exists" })
            }
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
    
            const newAdmin = new AdmincreatedmemberSchema({
                username: username,
                password: hashedPassword,
                allowupdatescreen: allowupdatescreen,
                allownewtemplate: allownewtemplate,
                alloweditplaylist: alloweditplaylist,
                alloweditschedule: alloweditschedule,
                allowuploadtolibrary: allowuploadtolibrary,
                allowreports: allowreports,
                allownewscreen: allownewscreen,
                allowdeletescreen: allowdeletescreen,
                allownewplaylist: allownewplaylist,
                allownewschedules: allownewschedules,
                allowlibrary: allowlibrary,
                allowdeletelibrary: allowdeletelibrary
            });
    
            newAdmin.save()
                .then((result) => {
                    console.log('Member Added Successfully', result);
                    // const token = jwt.sign({userId:result._id},'secret')
                    return res.status(201).json({ message: "member Added successfully", data: result });
                })
                .catch((err) => {
                    console.log(err);
                    return res.status(500).json({ message: "Error Adding Member" });
                })
    
        } catch (err) {
            console.log(err)
        }
    },
    
    getMember:async(req,res) => {
        try {
            const data = await AdmincreatedmemberSchema.find();
            res.status(200).json({message:"member fetched successfully",data})
        }
        catch(err) 
        {
            res.status(500).json({message:"Error fetched data",err})
        }
    },
    updateMember:async(req,res) => {
        const id = req.params.id;
        try {
          const updateMember = await AdmincreatedmemberSchema.findByIdAndUpdate(id, req.body);
          res.status(200).json({ message: 'member updated successfully', data: updateMember });
          console.log(updateMember)
       
        } catch (err) {
          res.status(500).json({ message: 'Error updating member', error: err });
          console.log(err)
        }
    },
    deleteMember:async(req,res) => {
        const id = req.params.id;
        try{
            const deleteMember = await AdmincreatedmemberSchema.findByIdAndDelete(id);
            res.status(200).json({message:"member deleted Successfully", data:deleteMember});
        }
        catch(err)
        {
            res.status(500).json(({messgae:"member deleted successfully", error:err}));
        }
    }
}
module.exports = AdminCreateduserController;