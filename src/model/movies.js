const mongoose = require('mongoose')

const schema = mongoose.Schema

const movieSchema = new Schema({
    Title:{
        type: string,
        required:true
    },
    Director:{
        type:string,
        required:true
    },
    Summary:{
        type:number,
        required:true
    },
    Language:{
        type:string,
        required:true
    },
    Genre:{
        type:[],
        required:true
    },
    Duration:{
        type:string,
        required:true
    },
    Image: string,

    
    
})

const movie = new mongoose.model("Movie", movieSchema)
module.exports = movie;