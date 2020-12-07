const mongoose = require('mongoose')


const prisonSchema = new mongoose.Schema({

    name:{
        type: String,
        reqiured: true
    },

    state:{
        type: String,
        reqiured: true
    },

    popTested:{
        type: Number
        
    },

    popTestedPostitive:{
        type: Number
        
    },


    latitude:{
        type: Number
        
    },


    longitude:{
        type: Number
        
    },

    deaths:{
        type: Number
        
    },


    


})


module.exports = mongoose.model('Prison', prisonSchema)
