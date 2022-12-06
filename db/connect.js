const mongoose = require('mongoose');

const movielistDB = () => mongoose.connect("mongodb://localhost:27017/UserWatchList", { useNewUrlParser: true }).then(() => {
    console.log("connected to db");
}).catch((err) => {
    console.log(err)
})
module.exports = movielistDB