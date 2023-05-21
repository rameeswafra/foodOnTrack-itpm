//import router
const router = require("express").Router();

//import employees model
let shedule =require("../models/shedule");


router.route("/add").post(async(req,res)=>{

    

    
    const trainNo = req.body;
    const trainName = req.body.trainName;
    const departure=Date(req.body.departure);
    const startFrom=req.body.startFrom;
    const destination=req.body.destination;
    const arival=Date(req.body.arival);
    const frequency=(req.body.frequency);
    const status=req.body.status;
    
   

    const newshedule= new shedule({ 
        trainNo,
        trainName,
        departure,
        startFrom,
        destination,
        frequency,
        arival,
        status,
        
      


    })

    const totalNumberOfEmpInDb = await shedule.countDocuments()
// convert number to string, so we can concatenate 0s easily...
    let numberToString = totalNumberOfEmpInDb.toString()

    // If length of number string is less than 5 then add leading 0s in nuberToString
    if(numberToString.length < 5){
        for (let i = numberToString.length; i < 5; i++){
            numberToString = '0' + numberToString
        }
    }
    newshedule.trainNo = `TNO${numberToString}`

    newshedule.save().then(()=>{
      res.json("shedule added")
    }).catch((err)=>{
        console.log(err);
    }) 

})

router.route("/view").get((req,res)=>{

    shedule.find().then((shedules)=>{
        res.json(shedules)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/update/:id").put(async(req,res)=>{
    let trainNumber = req.body.id;
    const {arival} = req.body;
    const {status} = req.body;
    const {destination} = req.body;
    
   

    const Update = {
        arival,
        status,
        destination,
        
   
    }

    const update = await shedule.findByIdAndUpdate(trainNumber, Update).then(()=>{
        res.status(200).send({status: "shedule updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating shedules", error: err.message});
    })
})


router.route("/delete/:id").delete(async(req,res)=>{
    var trainNumber = req.params.id;

    await shedule.findByIdAndRemove(trainNumber).exec().then(()=>{
        res.status(200).send({status: "shedule deleted"})
        
    }).catch((err)=>{
        res.status(500).send({status: "Error with deleting shedule", error: err.message});
    })
})

module.exports = router;

