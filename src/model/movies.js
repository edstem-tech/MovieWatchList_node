const mongoose = require('mongoose')

const schema = mongoose.Schema

const movieSchema = new schema({
    title: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    summary: {
        type: String,
        required: true
    },
    language: {
        type: String,
        required: true
    },
    genre: {
        type: [String],
        required: true
    },
    duration: {
        type: String,
        required: true
    },

    released: {
        type: String,
        required: true
    },
    writer: {
        type: String,
        required: true
    },
    cast: {
        type: String,
        required: true
    },
    image: {
        type: String
    }



})

const movie = new mongoose.model("movie", movieSchema)

module.exports = movie;
