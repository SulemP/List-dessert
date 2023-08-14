import React, {useState} from "react"
import './../styles/desserts.css'
import derretido from './../asset/derretido.png'
import tartas from './../asset/tartasinfondo.png'

import EditDesserts from './EditDesserts'
import './../styles/desserts.css'
import './../styles/global.css'

export default function Desserts () {

    const [desserts, setDesserts] = useState([])
    const [newDessert, setNewDessert] = useState('')

    const addDessert = () => {
        if (newDessert.trim() !== '') {
            setDesserts([...desserts, newDessert]);
            setNewDessert('');
        }
    }

    const editDessert = (index, editedDessert) => {
        const newDessert = [...desserts]
        newDessert[index] = editedDessert
        setDesserts(newDessert)
    }

    const handleChange = (e) => {
        setNewDessert(e.target.value)
    }
        
    const deleteDessert = (index) => {
        const newDesserts = [...desserts]
        newDesserts.splice(index, 1)
        setDesserts(newDesserts)
    }

    return (
        <>
            <div className='dessert'>
                <div>
                    <img src={derretido} alt='derretido' className='dessert_derretido'></img>
                </div>

                <div className='dessert_octagono'>
                </div>

                <div className='dessert_titulo'>
                    <span>Desserts</span>
                </div>

                <div>
                    <img src={tartas} alt='tartas' className='dessert_tartas'></img>
                </div>

                <div className='dessert_cuadro_agregar'>
                    <div className="dessert_form">

                        <h1>Do you like desserts?</h1>

                        <p>Tell me which desserts do you prefer</p>

                        <form className="form_dessert" onSubmit={(e) => { e.preventDefault(); addDessert()}}>
                            <input
                                className="form_input"
                                type="text"
                                value={newDessert}
                                onChange={handleChange}
                                placeholder="Enter a new dessert"
                            />
                            <div className="box-canvas" onClick={addDessert}>
                                <div className="wrapper"></div>
                                <div className="topping"></div>
                                <div className="topping-middle"></div>
                                <div className="topping-top"></div>
                                <div className="cherry"></div>
                            </div>
                            {/*<button className="cookie-button" type="submit">Add Dessert</button>*/}
                        </form>
                    </div>
                </div>
                    
                
                <div className='dessert_cuadro_list'>
                    <ul>
                        {
                            desserts.map((dessert, index) => (
                                <EditDesserts key={index} dessert={dessert} index={index} editDessert={editDessert} deleteDessert={deleteDessert}/>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}
