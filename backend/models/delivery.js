const mongoose = require('mongoose');
//Add schema
//import mongoose package
const Schema = mongoose.Schema;

const deliverySchema = new Schema({


    driverName : {
        type : String,
        required : true
    },
   
    vehicleNumber : {
        type : String,
        required : true
    },
    nic : {
        type : String,
        required : true
    },
    contactNumber : {
        type : String,
        required : true
    },
    deliveryStatus : {
        type : String,
        required : true
    },
    date:{
        type : Date,
        required : true
    },
    deliverID : {
        type : String
    },
    cusName : {
        type : String
    },
    address : {
        type : String
    }

    
})
//move the details in scheema to data base
const Delivery = mongoose.model("Delivery",deliverySchema);

 // use you logic to generate the _id
module.exports = Delivery;