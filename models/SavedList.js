const mongoose = require('mongoose');
const { Schema } = mongoose;

const SavedListSchema = new Schema({
    // Name, Img, Genre, Release Date
    name: {
        type: String,
        required: true
    },

    genre: {
        type: Array,
        default: ""
    },

    releaseDate: {
        type: Array,
        default: null
    },

    isReleased: {
        type: Boolean,
        default: false,
        required: true
    },

    company: {
        type: Array
    }
})

const SavedList = mongoose.model("SavedList", SavedListSchema);

module.exports = SavedList;