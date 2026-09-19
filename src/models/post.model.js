const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    caption:{
        type:String,
        default:""
    },
    post_image:{
        type:String,
        require:true,
    },
    user:{
        ref:"users",
        type:mongoose.Schema.Types.ObjectId,
        require:true
    }
})

const postModel = mongoose.model("post",postSchema)

module.exports = postModel