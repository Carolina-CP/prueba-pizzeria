import React from 'react'
import { useContext } from "react";
import { useParams } from 'react-router-dom';


import ContextAPI from "../ContextAPI ";

const Carrito = () => {

  const { id } = useParams();


  const { pizzas } = useContext(ContextAPI)

  const elemento = pizzas.filter((e) => e.id === id)
  console.log(elemento)




  return (

    <div className="container m-4 mx-auto">
    <h3> Carrito</h3>

    </div>

  )
}


export default Carrito