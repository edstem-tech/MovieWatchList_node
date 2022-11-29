const mongoose = require('mongoose')

const schema = mongoose.Schema

const userSchema = new schema({
    name:{
        type:String,
        required:true
    },
    emailId:{
        type: String,
        required:true
    },
    userName:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
    
})

const userProfile = new mongoose.model("user", userSchema)

module.export = userProfile;