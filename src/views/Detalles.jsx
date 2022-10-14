import React from 'react'
import { useContext } from "react";
import { useParams } from 'react-router-dom';
import { Card } from 'react-bootstrap';

import ContextAPI from "../ContextAPI ";

const Detalles = () => {

  const { id } = useParams();


  const { pizzas} = useContext(ContextAPI)

 const elemento = pizzas.filter((e) => e.id === id)
 console.log(elemento)

  /*const seleccionarPizza = ({ id, price, img, name }) => {
    const productoEncontradoIndex = pizzas.findIndex((e) => e.id === id);
    console.log(productoEncontradoIndex)
  } */





  return (

    <div>Detalle
      <div className=' container my-5'>
        <div className='row'>

          <p>{pizzas.name}</p>

          <Card className='my-2 mb-2 text-center' border="primary" style={{ width: 'auto', margin: 'auto' }}>
            <Card.Body>
              <Card.Title>{id}</Card.Title>
            </Card.Body>
          </Card>

          <p>{elemento[0].name}</p>
        
        </div>
      </div>

    </div>

  )
}

export default Detalles