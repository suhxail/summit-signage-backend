const express = require('express');
const playlistRoutes = express('routes');
const playlistController = require('../Controller/playlistController');

playlistRoutes.post('/add',playlistController.addPlaylist);
playlistRoutes.get('/get-playlist',playlistController.getPlaylist);
playlistRoutes.delete('/delete-Playlist/:id',playlistController.deletePlaylist);
module.exports = playlistRoutes;