const mongoose = require('mongoose')

const schema = mongoose.Schema

const rrSchema = new schema({
    user: {
        type: schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    movie: {
        type: schema.Types.ObjectId,
        ref: 'movie',
        required: true
    },
    rating: {
        type: Float,
        min: 1, max: 10,
        required: true
    },
    review: {
        type: String,
        trim: true
    }

})

const reviewRating = new mongoose.model("review", rrSchema);