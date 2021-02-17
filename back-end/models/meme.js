const mongoose = require('mongoose')

//Meme Model
const memeSchema = new mongoose.Schema({

    id: {
        type : Number
    },

    name:{
        type : String
    },

    url: {
        type : String
    },

    caption: {
        type : String
    }
})

module.exports = mongoose.model('meme',memeSchema)