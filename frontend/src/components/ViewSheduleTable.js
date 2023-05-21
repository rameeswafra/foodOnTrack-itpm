import React from 'react';
import './DownloadInvoice.css'

const ViewSheduleTable = ({shedule , handleEditClick, handleDeleteClick}) => {
    return(
        <tr>
            <td className='td'>{shedule.trainNo}</td>
            <td className='td'>{shedule.trainName}</td>
            <td className='td'>{shedule.startFrom}</td>
             <td className='td'>{shedule.departure}</td>
             <td className='td'>{shedule.destination}</td>
             <td className='td'>{shedule.arival}</td>
             <td className='td'>{shedule.frequency}</td>
             <td className='td'>{shedule.status}</td>
             
             <td>
                <button type="button" onClick={(e) => handleEditClick(e,shedule)}>Edit</button>
                <button type="button" onClick={() => handleDeleteClick(shedule._id)}>Delete</button>
            </td>
        </tr>                        
    )
}

export default ViewSheduleTable;