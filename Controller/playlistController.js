const express = require('express');
const playlistSchema = require('../Models/playlistSchema');

const playlistController = {
    addPlaylist: (req, res) => {
        const { playlistName, playlistItems } = req.body;

        // Create an array of objects with the 'template' field
        const itemsToAdd = playlistItems.map(item => ({ template: item.imageName }));

        // Create a new playlist using Mongoose model
        const newPlaylist = new playlistSchema({
            playlistName: playlistName,
            add: itemsToAdd // Assign the array of objects to 'add'
        });

    
        newPlaylist.save()
            .then(result => {
                console.log('Playlist added successfully:', result);
                res.status(201).json({ message: 'Playlist added successfully', playlist: result });
            })
            .catch(err => {
                console.log('Error occurred:', err);
                res.status(500).json({ error: err });
            });
    },
    getPlaylist: async (req, res) => {
        try {
          const data = await playlistSchema.find();
          res.status(200).json(data);
        } catch (err) {
          res.status(500).json(err);
        }
      },

     deletePlaylist :async(req,res) => {
      const id = req.params.id;
      const delPlaylist = await playlistSchema.findByIdAndDelete(id)
      .then((data) => {
        res.status(200).json({data,message:'deleted'});
        console.log('deleted successfully')
      })
      .catch((err) => {
        console.log(err)
      })
     },
    
};
 module.exports = playlistController