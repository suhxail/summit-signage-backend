const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const registerSchema = require('../Models/loginschema');
const AdmincreatedmemberSchema = require('../Models/AdmincreateduserSchema');

const loginController = {
   
    // createUser: async (req, res) => {
    //     const { username, password } = req.body;

    //     try {
          
    //         const existingUser = await adminSchema.findOne({ username });

    //         if (existingUser) {
    //             return res.status(400).json({ message: "Username already exists" });
    //         }

          
    //         const newUser = new adminSchema({ username, password });
    //         await newUser.save();

    //         res.status(201).json({ message: "User created successfully" });
    //     } 
    //     catch (error) {
    //         console.error(error);
    //         res.status(500).send('Error');
    //     }
    // },

    // Login functionality
    login: async (req, res) => {
      
        const { username, password } = req.body;

        try {
      
            const admin = await registerSchema.findOne({ username });
            
            const user = await AdmincreatedmemberSchema.findOne({username});
            // console.log({ memberusername: username})
           console.log(password)

            const passwordMatch = await bcrypt.compare(password ,admin.password)
            console.log(password, admin.password, 'hiii') 

            if (passwordMatch) {
                return res.status(401).json({ message: 'Invalid username or password' });
              }

             if (admin || user) {
            
                const token = jwt.sign({ userId: user ? user._id : admin._id }, 'secret');

                console.log(token)

                if (token) {
                    res.status(200).json({ token ,isAdmin: !!admin });
                } else {
                    res.status(500).json({ message: "Token generation failed" });
                }
            } else {
                res.status(401).json({ message: "Invalid username or password" });
            }
        } catch (error) {
            console.error(error);
            res.status(500).send('Error');
        }
    }
};

module.exports = loginController;
