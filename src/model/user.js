const mongoose = require('mongoose')

const schema = mongoose.Schema

const userSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    emailId:{
        type: string,
        required:true
    },
    username:{
        type:string,
        required:true
    },
    age:{
        type:number,
        required:true
    },
    gender:{
        type:string,
        required:true
    },
    password:{
        type:string,
        required:true
    }
    
})

const userProfile = new mongoose.model("User", userSchema)

module.export = userProfile;