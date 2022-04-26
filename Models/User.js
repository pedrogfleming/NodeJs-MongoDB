const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
        username:{
            type:String,
            required:true,
            min:3,
            max:20,
            unique:true
        },
        email:{
            type:String,
            required:true,
            max:50,
            unique:true
        },
        password:{
            type:String,
            required:true,
            min:6,
        },
        profilePicture:{
            type:String,
            default: ""
        },
        coverPicture:{
            type:String,
            default: ""
        },
        followers:{
            type:Array,
            default: []
        },
        following:{
            type:Array,
            default: []
        },
        isAdmin:{
            type:Boolean,
            default: false
        }
    },
    //Whenever we create a new user or update, its gonna automatically update our timestamp
    {timestamp:true}
    );
    module.exports = mongoose.model('User',UserSchema);