const mongoose = require('mongoose');
const { Schema } = mongoose;

const SavedListSchema = new Schema({
    // Name, Img, Genre, Release Date
    name: {
        type: String,
        required: true
    },

    company: {
        type: String,
        default: ""
    },
    genre: {
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
    }


})

const SavedList = mongoose.model("SavedList", SavedListSchema);

module.exports = SavedList;