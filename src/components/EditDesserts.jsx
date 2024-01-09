import React, { useState, useEffect  } from 'react';
import DeleteDessert from './DeleteDessert';

export default function EditDesserts(props) {

    const { dessert, index, editDessert, deleteDessert, desserts } = props
    const [isEditing, setIsEditing] = useState(false)
    const [editedDessert, setEditedDessert] = useState(dessert)

    useEffect(() => {
        setEditedDessert(dessert);
    }, [dessert]);

    const handleChange = (e) => {
        setEditedDessert(e.target.value)
    }

    const handleEdit = () => {
        setIsEditing(true)
    }

    const handleSave = () => {
        if (editedDessert.trim() !== '') {
            editDessert(index, editedDessert)
            setIsEditing(false)
        }
    }

    const handleCancel = () => {
        setIsEditing(false);
        setEditedDessert(dessert);
    }

    // return (
    //     <li className='list_dessert' style={{ display: 'flex', alignItems: 'center' }}>
    //         {
    //             isEditing ? (
    //                 <div style={{ flex: 1 }}>
    //                     <input
    //                         type="text"
    //                         value={editedDessert}
    //                         onChange={handleChange}
    //                         placeholder="Edit dessert"
    //                     />
    //                     <button onClick={handleSave}>Save</button>
    //                 </div>
    //             ) : (
    //                     <div style={{ flex: 1 }}> 
    //                         {dessert}
    //                         <button className='button_edit' onClick={handleEdit}>Edit</button>
    //                         <DeleteDessert onDelete={deleteDessert} />
    //                     </div>
    //                 )
    //         }
    //     </li>
    // )
    return (
        <li className='list_dessert'>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ width: '60%' }}>
                {dessert}
                </div>
                {isEditing ? (
                <div>
                    <input
                    className='input_edit'
                    type="text"
                    value={editedDessert}
                    onChange={handleChange}
                    placeholder="Edit dessert"
                    />
                    <div className='buttons_edit'>
                        <button className='button_save' onClick={handleSave}>Save</button>
                        <button className='button_cancel' onClick={handleCancel}>Cancel</button>
                    </div>
                    
                </div>
                ) : (
                <div className='button_options'>
                    <button className='button_edit' onClick={handleEdit}>Edit</button>
                    <DeleteDessert onDelete={deleteDessert} index={index}/>
                </div>
                )}
            </div>
        </li>
    )
}
