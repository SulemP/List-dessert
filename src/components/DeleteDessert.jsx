import React from 'react';

export default function DeleteDessert(props){
    const { onDelete } = props
    const handleDelete = () => {
        onDelete()
    }

    return (
        <button onClick={handleDelete}>Delete</button>
    )
}
