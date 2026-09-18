const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    caption:{
        type:String,
        default:""
    },
    post_image:{
        type:String,
        require:true,
        
    }
})