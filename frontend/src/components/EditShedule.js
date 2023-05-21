import React from 'react';

const EditShedule = ({editFormData, handleEditFormChange, handleCancelClick}) => {
    return (
        <tr>
            <td>
                
            </td>
            <td>
                
            </td>
            <td>
                
            </td>
            <td>
           
            </td>

            <td>
            <input type="text" required="required" placeholder='Enter address...' name="destination" value={editFormData.destination} onChange={handleEditFormChange}/> 
            </td>

            <td>
                <input type="text" required="required" placeholder='Enter department...' name="arival" value={editFormData.arival} onChange={handleEditFormChange}/>
            </td>
    
            <td>
            
            </td>

            <td>
            <input type="var" required="required" placeholder='Enter emergencynumber...' name="status" value={editFormData.status} onChange={handleEditFormChange}/> 
            </td>

            <td>
            <button type="submit">Save</button>
                <button type="button" onClick={handleCancelClick}>Cancel</button>
            </td>

            
        </tr>
    )
}

export default EditShedule;