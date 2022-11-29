const mongoose = require('mongoose')


const schema = mongoose.Schema

const watchListSchema = new schema({
    userId:{
        type:schema.Types.ObjectId,
        ref:'user',
        required:true
    },
    movieId:{
        type:schema.Types.ObjectId,
        ref:'movie',
        required:true

    },
    watched:{
        type:Boolean,
        default:false
    }
    
},
{timestamp:true});

const watchlist = new mongoose.model("watchlist", watchListSchema)