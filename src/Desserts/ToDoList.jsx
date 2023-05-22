import './Styles/desserts.css'
import dessert from './tartas.png'
import figura from './image 6.png'
import elipse from './elipse.png'

export default function Desserts () {
    return(
        <>
        <div className='container'>

            <div className='row toDo'>

                <div className='col-xl-4 toDo_izquierda'>
                    <div className='toDo_encabezado'>
                        <img src={figura} className="figura" alt="logo" />
                        <img src={elipse} className="elipse" alt="" />
                        <span>Dulce pastel</span>
                    </div>
                   

                    <div className='todo_tittle'>
                        <img src={dessert} className="tarta" alt="logo" />
                        <h1>Lista de postres</h1>
                    </div>
                </div>

                <div className='col-xl-8 toDo_list'>
                    <h1>Lista de postres</h1>
                </div>

            </div>

        </div>
            
        </>
    )
}