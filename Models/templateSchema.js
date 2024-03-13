const mongoose = require('mongoose');

const templateSchema = new mongoose.Schema({

    content: {
        type: Object,
        required: true
    }


})

const templatemodel = mongoose.model('templateSchema', templateSchema);


module.exports = templatemodel;