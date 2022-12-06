const express = require('express');
const movielistDB = require("./db/connect")

const app = express();

const userRoute = require('./src/routes/routes')

const Port = 4200;


app.use(express.json());
app.use('/api/v1', userRoute);

// app.get('/', (req, res) => {
//     res.send("hello world")
// })

const start = async () => {
    try {
        await movielistDB()
        app.listen(Port, console.log(`listening on port ${Port}`))
    } catch (error) {
        console.log(error)
    }
}

start();
