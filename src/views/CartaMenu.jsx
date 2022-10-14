import "../assets/CartaMenu.css"; //importación css desde assets
import ContextAPI from "../ContextAPI "; //importación de datos de API
import {useContext } from 'react'; //importacion de hooks
import { useNavigate } from "react-router-dom"; //importación de useNavigate para redireccion a detalles
import { Card } from "react-bootstrap"; // importación de componentes de bootstrap
//import Detalles from './Detalles';


const CartaMenu = () => {

    const navigate = useNavigate();

    const { pizzas} = useContext(ContextAPI);

   

    return (
        <div className="container my-4">
            <div className="row row-cols-md-auto justify-content-center">
                {pizzas.map((pizza) => (
                    <Card key={pizza.id}
                        className='m-3'
                        style={{ width: '20rem' }}>
                        <img
                        className="bg-image"
                            variant="top"
                            alt={pizza.name}
                            src={pizza.img} />
                       
                        <Card.Body>
                            <Card.Title className="text-capitalize text-success"><h2>{pizza.name}</h2></Card.Title>
                            <ul className="text-start border-top">
                                <h4>Ingredientes:</h4>
                                {pizza.ingredients.map((i) => (
                                    <li className="list-group-item">🍕  {i}</li>
                                ))}
                            </ul>
                            <h4 className="text-danger"> ${pizza.price}</h4>
                           
                                <button className="btn btn-success m-2" onClick={() => navigate(`/pizza/${pizza.id}`)}>Ver Más 👀</button>
                                <button className="btn btn-danger m-2" onClick={() => console.log(pizza.id)}>Añadir 🛒</button>
                              
                        </Card.Body>
                    </Card>
                ))
                }

            </div>
        </div>

    )
}

export default CartaMenu