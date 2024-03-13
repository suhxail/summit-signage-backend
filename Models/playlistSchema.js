const mongoose = require('mongoose');
const playlistSchema = new mongoose.Schema({

playlistName:{
    type:String,
    required:true
},
add:[
    {
    template:{
        type:String,
        required:true
    }
}
]
})

const playlistModel = mongoose.model('Playlist',playlistSchema);

module.exports = playlistModel;