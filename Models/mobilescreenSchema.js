const mongoose = require('mongoose');

const mobilescreenSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    }
})

const mobileModel = mongoose.model('mobilescreenSchema', mobilescreenSchema);

module.exports = mobileModel