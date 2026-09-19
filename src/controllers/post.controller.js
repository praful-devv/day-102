const postModel = require("../models/post.model")

const imageKit = require("@imagekit/nodejs")
const {toFile} = require("@imagekit/nodejs")
const ImageKit = new imageKit({
    privateKey:process.env.IMAGE_KIT_PRIVATE_KEY
})

const createpostController = async(req,res)=>{
    

    const file = await ImageKit.files.upload({
        file: await toFile(Buffer.from(req.file.buffer),'file'),
        fileName:"xyz"
    })

    res.send(file)
}

module.exports = {createpostController}