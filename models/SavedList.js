const mongoose = require('mongoose');
const { Schema } = mongoose;

const SavedListSchema = new Schema({
    // Name, Img, Genre, Release Date
    user_id: {
        type: String,
        required: true,
    },

    name: {
        type: String,
        required: true
    },

    genre: {
        type: String,
        default: ""
    },

    company: {
        type: String,
        default: ""
    },

    releaseDate: {
        type: String,
        default: null
    },

    isReleased: {
        type: Boolean,
        default: false,
        required: true
    },

    cover: {
        type: String
    }
})

const SavedList = mongoose.model("SavedList", SavedListSchema);

module.exports = SavedList;