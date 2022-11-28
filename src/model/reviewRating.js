const mongoose = require('mongoose')

const schema = mongoose.Schema

const rrSchema = new Schema({
    User:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    Movie:{
        type:Schema.Types.ObjectId,
        ref:'Movie',
        required:true
    },
    Rating:{
        type:Float,
        min:1, max:5,
        required:true
    },
    Review:{
        type:string,
        ref:'User',
        trim:true
    }

})
    
const reviewRating = new mongoose.model("Review", rrSchema);