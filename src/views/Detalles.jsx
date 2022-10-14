import React from 'react'
import { useContext } from "react";
import { useParams } from 'react-router-dom';


import ContextAPI from "../ContextAPI ";

const Detalles = () => {

  const { id } = useParams();


  const { pizzas } = useContext(ContextAPI)

  const elemento = pizzas.filter((e) => e.id === id)
  console.log(elemento)

  /*const seleccionarPizza = ({ id, price, img, name }) => {
    const productoEncontradoIndex = pizzas.findIndex((e) => e.id === id);
    console.log(productoEncontradoIndex)
  } */





  return (

    <div className="container m-4 mx-auto">
      <div class="card flex-row row-cols-md-auto">

        <img class="card-img-left example-card-img-responsive" alt={elemento[0].name}
          src={elemento[0].img} /> 

        <div class="card-body">
          <div class="card-title h5 h4-sm text-start"><h2>{elemento[0].name}</h2></div>
          <p class="card-text text-start">{elemento[0].desc}</p>

          <ul className="text-start border-top ">
            <h4 className="text-secondary text-start m-4">Ingredientes:</h4>
            {elemento[0].ingredients.map((i) => (
              <li className="list-group-item">🍕  {i}</li>
            ))}
          </ul>

          <div className="row">
            <h4 className="text-danger"> ${elemento[0].price}</h4>
            <button className="btn btn-danger m-2" onClick={() => console.log('aquí va el carrito de compras')}>Añadir 🛒</button>
          </div>
        </div>
      </div>

    </div>

  )
}

export default Detalles