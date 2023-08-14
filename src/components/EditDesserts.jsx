import React, { useState } from 'react';
import DeleteDessert from './DeleteDessert';

export default function EditDesserts(props) {

    const { dessert, index, editDessert, deleteDessert } = props
    const [isEditing, setIsEditing] = useState(false)
    const [editedDessert, setEditedDessert] = useState(dessert)

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

    return (
        <li>
            {
                isEditing ? (
                    <div>
                        <input
                            type="text"
                            value={editedDessert}
                            onChange={handleChange}
                            placeholder="Edit dessert"
                        />
                        <button onClick={handleSave}>Save</button>
                    </div>
                ) : (
                        <div>
                            {dessert}
                            <button onClick={handleEdit}>Edit</button>
                            <DeleteDessert onDelete={deleteDessert} />
                        </div>
                    )
            }
        </li>
    )
}
