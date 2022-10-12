import "../assets/CartaMenu.css";
import ContextAPI from "../ContextAPI ";
import { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import Detalles from './Detalles';


const CartaMenu = () => {

    const navigate = useNavigate();

    const { pizzas, setPizzas } = useContext(ContextAPI);

    const formatoPrecio = (price) => {
        return (price.toLocalString('es-CL'))
    }

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
                                <button className="btn btn-danger m-2" onClick={() => console.log('aquí va el carrito de compras')}>Añadir 🛒</button>
                           
                        </Card.Body>
                    </Card>
                ))
                }

            </div>
        </div>

    )
}

export default CartaMenu