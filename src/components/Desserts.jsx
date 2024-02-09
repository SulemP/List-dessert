import React, {useState} from "react"
import './../styles/desserts.css'
import derretido from './../asset/derretidoBlue.png'
import tartas from './../asset/tartasinfondo.png'

import EditDesserts from './EditDesserts'
import './../styles/desserts.css'
import './../styles/global.css'

export default function Desserts () {

    const [desserts, setDesserts] = useState([])
    const [newDessert, setNewDessert] = useState('')

    const contenedorEstilos = {
        backgroundImage: `url(${tartas})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '100vh',
        zIndex: -1,
    };

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
        // const newDesserts = [...desserts]
        // newDesserts.splice(index, 1)
        // setDesserts(newDesserts)
        const newDessertList = desserts.filter((_, i) => i !== index);
        setDesserts(newDessertList);
    }

    //Función para convertir la primer letra de cada lista en mayúscula
    const capitalizeFirstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1)
    }

    return (
        <>
            {/* <div className='col-xl-12 dessert' style={contenedorEstilos}> */}
            <div className='col-12 dessert'>
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

                <div className='col-12 dessert_cuadro_agregar'>
                    <div className="dessert_form">

                        <h1>Do you like desserts?</h1>

                        <p>Tell me which desserts do you prefer</p>

                        {/* <p className="add" onClick={addDessert}>ADD DESSERT</p> */}

                        <form className="col-xs-12 form_dessert" onSubmit={(e) => { e.preventDefault(); addDessert()}}>
                            <input
                                className="form_input"
                                type="text"
                                value={newDessert}
                                onChange={handleChange}
                                placeholder="Enter a new dessert"
                            />
                            <div className="box-canvas" onClick={addDessert}>
                                <span className="add" onClick={addDessert}>ADD DESSERT</span>
                                <div className="wrapper"></div>
                                <div className="topping"></div>
                                <div className="topping-middle"></div>
                                <div className="topping-top"></div>
                                <div className="cherry"></div>
                            </div>
                        </form>
                    </div>
                </div>
                    
                <div className='dessert_cuadro_list'>
                    <ul style={{ maxHeight: '100%', overflowY: 'auto' }}>
                        {/* overflowY: 'auto': Esto hace que aparezca una barra de desplazamiento vertical (auto) cuando el contenido de la lista excede la altura máxima */}
                        {desserts.map((dessert, index) => (
                            <li key={index}>
                                {/* 🍰
                <span>{capitalizeFirstLetter(dessert)}</span> */}
                                {/* <span style={{ position: 'absolute', left: '-20px' }}>🍰</span> {dessert} */}
                                <EditDesserts
                                    dessert={capitalizeFirstLetter(dessert)}
                                    index={index}
                                    editDessert={editDessert}
                                    deleteDessert={deleteDessert}
                                    // desserts={desserts}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}