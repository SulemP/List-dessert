import React from 'react';

export default function DeleteDessert(props){
    const { onDelete, index } = props
    const handleDelete = () => {
        onDelete(index)
    }

    return (
        <button className='button_delete' onClick={handleDelete}>Delete</button>
    )
}
