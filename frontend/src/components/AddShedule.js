import React,{useState} from "react"
import axios from "axios";
import SheduleHeader from "./SheduleHeader";


export default function AddShedule(){

    
  const [trainName, setName] = useState("");
  const [startFrom, setStartStaion] = useState("");
  const [departure, setDeparture] = useState("");
  const [destination, setDestination] = useState("");
  const [arival, setArrival] = useState("");
  const [frequency, setFrequency] = useState("");
  const [status,setStatus]=useState("");
  


  function sendData(e){
      e.preventDefault();

      const newShedule={

          trainName,
          startFrom,
          departure,
          destination,
          arival,
          frequency,
          status
          

}
axios.post("http://localhost:5000/shedule/add/",newShedule).then(()=>{
  alert("Shedule Added")
  window.location.reload();
 
}).catch((err)=>{
  alert(err)
})
}


return(
      <>
          <SheduleHeader/>
      <div className="container">
      <form onSubmit={sendData}>
           <legend>Add Train shedule Details</legend>
      <div className="mb-3">
        <label for="exampleInputName" className="form-label">Train Name</label>
        <input type="text" className="form-control" id="exampleInputName" aria-describedby="NameHelp" 
        onChange={(e)=>{

            setName(e.target.value);
        }} />

       </div>

       <div className="mb-3">
        <label for="exampleInputStart" className="form-label">Start From</label>
        <select name="category" className="form-select" id="categorySelect"
          onChange={(e)=>{

            setStartStaion(e.target.value);
          }}                   >
                            <option>Choose...</option>
                            <option>Colombo Port</option>
                            <option>Badulla</option>
                            <option>Matale</option>
                            <option>Kandy</option>
                            <option>Jafna</option>
                        </select>
       </div>

  

       <div className="form-group">
        
        <label>Departure: </label>
        <input
          type="datetime-local"
          required
          className="form-control"
          value={departure}
          onChange={({ target: { value } }) => { setDeparture(value); setDeparture(value); }}
        
        />
      </div>
<br></br>
<div className="mb-3">
        <label for="exampleInputDestination" className="form-label">Destination</label>
        <select name="category" className="form-select" id="categorySelect"
          onChange={(e)=>{

            setDestination(e.target.value);
          }}                   >
                            <option>Choose...</option>
                            <option>Colombo Port</option>
                            <option>Badulla</option>
                            <option>Matale</option>
                            <option>Kandy</option>
                            <option>Jafna</option>
                        </select>
       </div>

       <div className="form-group">
        
        <label>Arrival: </label>
        <input
          type="datetime-local"
          required
          className="form-control"
          value={arival}
          onChange={({ target: { value } }) => { setArrival(value); setArrival(value); }}
        
        />
      </div>
      <br></br>

      <div className="mb-3">
        <label for="exampleInputFrequency" className="form-label">Frequency</label>
        <select name="category" className="form-select" id="categorySelect"
          onChange={(e)=>{

            setFrequency(e.target.value);
          }}                   >
                            <option>Choose...</option>
                            <option>Daily Runs Via Kandy</option>
                            <option>Monday to Friday</option>
                            <option>Daily</option>
                            <option>Weekend</option>
                            </select>
       </div>

       <div className="mb-3">
        <label for="exampleInputStatus" className="form-label">Special Notice</label>
        <input type="text" className="form-control" id="exampleInputStatus" aria-describedby="EmergencynameHelp"
          onChange={(e)=>{

            setStatus(e.target.value);
          }} />
       </div>

       

     
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    </div>
      </>


  )
}