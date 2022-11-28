const express = require('express');

const app = express();

const Port = 4200;

app.get('/', (req, res) => {
    res.send("hello world")
})

app.listen(Port, () => {
    console.log(`listening on port ${Port}...`)
}) 