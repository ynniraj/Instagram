const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({


    image: {
        type: String,
        required: true
    },
    caption: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }


}, { timestamps: true, versionKey: false })

module.exports = mongoose.model('Post', postSchema);