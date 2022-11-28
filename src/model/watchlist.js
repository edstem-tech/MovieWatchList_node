const mongoose = require('mongoose')
import('./user')

const schema = mongoose.Schema

const watchListSchema = new Schema({
    userId:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    movieId:{
        type:Schema.Types.ObjectId,
        ref:'Movie',
        required:true

    },
    Title:{
        type:Schema.Types.ObjectId,
        ref:'Movie'
    },
    watched:Boolean,
    
},
{timestamps:true});

const watchlist = new mongoose.model("watchlist", watchListSchema)