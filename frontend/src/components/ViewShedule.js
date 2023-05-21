import React, {useState,useEffect,Fragment,useRef} from 'react';
import axios from 'axios';
import SheduleHeader from './SheduleHeader';
import ViewSheduleTable from './ViewSheduleTable';
import EditShedule from './EditShedule';
import { useReactToPrint } from "react-to-print";
import {FiPrinter} from 'react-icons/fi';

export default function ViewShedule(){

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    const [shedules,setShedules] = useState([]);
    const [q, setQ] = useState("");

    useEffect(() =>{

        function getShedules() {
            axios.get("http://localhost:5000/shedule/view").then((res) => {

            setShedules(res.data);
            }).catch((err) => {

                alert(err.message);
            })
        }

        getShedules();

    }, [])

    const [editFormData, setEditFormData] = useState({
        trainName:"",
        startFrom:"",
        departure:"",
        destination:"",
        arival:"",
        frequency:"",
        status:"",
          
    })


    const handleEditFormChange = (e) => {
        e.preventDefault();

        const fieldName = e.target.getAttribute("name");
        const fieldValue = e.target.value;

        const newFormData = {...editFormData};
        newFormData[fieldName] = fieldValue;

        setEditFormData(newFormData);
    }


    function updateData(e){
        e.preventDefault();
        
        const updateShedule ={
            id: editShedule,
            destination: editFormData.destination,
            department: editFormData.department,
            arival: editFormData.arival,
            status: editFormData.status,
            
        }

        axios.put("http://localhost:5000/shedule/update/:id",updateShedule).then(() =>{
            alert("Shedule updated");
            window.location.reload();
        }).catch((err) =>{
            alert(err)
        })


    }


    const [editShedule,setEditShedule] = useState(null);

    const handleEditClick = (e, shedule)=> {
        e.preventDefault();
        setEditShedule(shedule._id)

        const formValues = {
          trainName:shedule.trainName,
          startFrom:shedule.startFrom,
          departure:shedule.departure,
          destination:shedule.destination,
          arival:shedule.arival,
          frequency:shedule.frequency,
          status:shedule.status,
          
        }

        setEditFormData(formValues);
    }

    const handleCancelClick = () => {
        setEditShedule(null);
    }


   const handleDeleteClick = (id) => {
       
    axios.delete('http://localhost:5000/shedule/delete/'+id).then(() =>{
        window.location.reload();
    }).catch((err) =>{
        alert(err)
    })
  
}

       
//crerate contribution and add the values in that 
    return(
        <>
            <SheduleHeader/>
            <div className="container">
            
        
           <input type="text" placeholder="Search..." value={q} onChange={(e)=> setQ(e.target.value)}/>

           <div ref={componentRef}>
           <form onSubmit={updateData}>
               <table className='table'>
                   <thead>
                       <tr>
                             <th>Train No</th>
                             <th>Train Name</th>
                             <th>Start From</th>
                             <th>Departure</th>
                             <th>Destination</th>
                             <th>Arrival</th>
                             <th>Frequency</th>
                             <th>Special Notice</th>
                             
                             <th>Actions</th>
                       </tr>
                   </thead>

                   <tbody>
                       {shedules.filter((shedule)=> {
                           if(q == ""){
                               return shedule
                           }else if(shedule.trainName.toLowerCase().includes(q.toLowerCase())) {
                               return shedule
                           }
                       }).map((shedule)=> (
                           <Fragment>

                               {editShedule === shedule._id ? (
                                   <EditShedule 
                                       editFormData={editFormData} 
                                       handleEditFormChange={handleEditFormChange}
                                       handleCancelClick={handleCancelClick}
                                   />
                                ) : (
                                   <ViewSheduleTable 
                                       shedule={shedule}
                                       handleEditClick={handleEditClick}
                                       handleDeleteClick={handleDeleteClick}
                                   />
                                )}
                                
                           </Fragment>
                           
                       ))}
                   </tbody>

               </table>
           </form>
           </div>
           
           <button onClick={handlePrint} className="print__button btn btn2"><FiPrinter/> Print </button>
       </div>
        </>
    );
}