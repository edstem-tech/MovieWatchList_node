const mongoose = require('mongoose')

const schema = mongoose.Schema

const movieSchema = new schema({
    title:{
        type: String,
        required:true
    },
    director:{
        type:String,
        required:true
    },
    summary:{
        type:Number,
        required:true
    },
    language:{
        type:String,
        required:true
    },
    genre:{
        type:[],
        required:true
    },
    duration:{
        type:String,
        required:true
    },
    image: String,

    
    
})

const movie = new mongoose.model("movie", movieSchema)
module.exports = movie;