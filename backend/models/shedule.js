//import mongoose package
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const sheduleSchema = new Schema({
    
    trainNo: {
        type:String
    },
    trainName : {
        type : String,
        required: true
    },
     startFrom:{
        type:String,
        required:true
    },
     
    departure:{
        type:Date,
        required:true
    },
    destination:{
        type:String,
        required:true
    },
    arival:{
        type:Date,
        required:true
    },
    frequency:{
        type:String,
        required:true
    },
   
    status:{
        type:String,
       
    }
   
   
})

//move the details in scheema to data base
const shedule = mongoose.model("shedule",sheduleSchema);

 // use you logic to generate the _id

module.exports = shedule;