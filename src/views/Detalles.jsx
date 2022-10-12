import React from 'react'
import { useContext } from "react";
import { useParams, useNavigate } from 'react-router-dom';

import ContextAPI from "../ContextAPI ";

const Detalles = () => {

  const { id } = useParams();

  const navigate = useNavigate();

  const { pizzas, setPizzas } = useContext(ContextAPI)

  const seleccionarPizza = ({id, price, img, name}) => {
    const productoEncontradoIndex = pizzas.findIndex((e) => e.id === id);
    console.log(productoEncontradoIndex)
  }

  



  return (

    <div>Detalle</div>

  )
}

export default Detalles