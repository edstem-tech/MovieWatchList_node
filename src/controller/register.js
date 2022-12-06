const User = require('../model/users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const register =  (req, res) => {
     bcrypt.hash(req.body.password, 10, function (err, hashedPass) {
        if (err) {
            res.json({ message: "an error . .pls try again" })
        }
        let user = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashedPass
        })
        user.save()
            .then(user => {
                res.json({ message: 'user added successfully' })
            }).catch(error => {
                console.log(error)
                res.status(400).json({ message:"Error found"})
            })
    })
}
const login = (req, res, next) => {
    var username = req.body.username;
    var password = req.body.password;
    User.findOne({ email: username })
        .then(user => {
            if (user) {
                bcrypt.compare(password, user.password, function (err, result) {
                    if (err) {
                        res.json({ error: err })
                    }
                    if (result) {
                        token = jwt.sign({ name: user.name }, 'secret value', { expiresIn: '1h' });
                        res.json({
                            message: 'Login successful!!',
                            token: token
                        })
                    }
                })
            } else {
                res.json({ message: 'no user found' })
            }
        })
}
module.exports = {
    register, login
}