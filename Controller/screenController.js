const express = require('express');
const screenSchema = require('../Models/screenSchema');
const multer = require('multer');
const path = require('path');
const AdmincreatedmemberSchema = require('../Models/AdmincreateduserSchema');
const adminSchema = require('../Models/loginschema');
const screenController = {
  addscreen: async (req, res) => {
    const storage = multer.diskStorage({
        destination: "uploads",
        filename: (req, file, cb) => {
            cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname));
        },
    });

    const upload = (req, res) => {
        return new Promise((resolve, reject) => {
            const uploadMiddleware = multer({ storage: storage }).single('LiveSnapshot');
            uploadMiddleware(req, res, (err) => {
                if (err) reject(err);
                resolve();
            });
        });
    };

    try {
        await upload(req, res);
        const { ScreenName, ID, Status, Captured, ContentType, ContentName } = req.body;
        const createdBy = req.userId;
        console.log(req.userId);
        const newScreen = new screenSchema({
            ScreenName: ScreenName,
            ID: ID,
            Status: Status,
            Captured: Captured,
            ContentType: ContentType,
            ContentName: ContentName,
            LiveSnapshot: req.file ? req.file.filename : null,
            createdBy: createdBy
        });

        const result = await newScreen.save();
        res.send(result);
        console.log(result);
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
},

  getscreen: async (req, res) => {
    try {
      const data = await screenSchema.find({createdBy: req.userId});
      console.log({createdBy:req.userId})
      console.log(data)
      res.status(200).json(data);
      console.log(data)
    } catch (err) {
      res.status(500).json(err);
      console.log(err)
    }
  },


  updateScreen: async (req, res) => {
    const id = req.params.id;
    try {
      const updateSchedule = await screenSchema.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: 'Schedule updated successfully', data: updateSchedule });
      console.log(updateSchedule)
    } catch (err) {
      res.status(500).json({ message: 'Error updating schedule', error: err });
    }
  },

// updateScreen: async (req, res) => {
//   const id = req.params.id;

//   try {
//     const updatedData = req.body;

//     // Check if a file was uploaded
//     if (req.file) {
//       // Update the document in the database with the file path
//       updatedData.LiveSnapshot = req.file.path;
//     }

//     // Update the document in MongoDB
//     const updatedScreen = await screenSchema.findByIdAndUpdate(id, updatedData, { new: true });

//     res.status(200).json({ data: updatedScreen });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Error in updating data' });
//   }
// },




Particularscreen :async(req,res)=>{
  const id = req.params.id;
  const data =  screenSchema.findById(id)
  .then((data)=>{
      res.status(200).json(data)
  })
  .catch((err)=>{
      res.status(500).json(err)
  })


},
deleteScreen : async(req,res) => {
  const id = req.params.id;
  const delemployee = await screenSchema.findByIdAndDelete(id)
  .then((data)=>{
      res.status(200).json({data})
  // res.send('Deleted Successfully')
  })
  .catch((err)=>{
      res.status(500).json({message:"error in delete data"})
  })
},
////admin or memeber routes////////////

// getAdminormember: async (req, res) => {
//   // console.log(req);
//   try {
//     const userId = req.user.userId; // Assuming user is stored in req.user after authentication
//     const userMember = await AdmincreatedmemberSchema.find({userId });
  
//     res.json(userMember);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// }
};

module.exports = screenController;
