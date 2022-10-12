
import './App.css';
import { useState, useEffect} from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navegador from './components/Navegador';
import Carrito from './views/Carrito';
import Home from './views/Home'
import NotFound from './views/NotFound';
import ContextAPI from './ContextAPI ';
import Detalles from './views/Detalles';


function App() {

  const [pizzas, setPizzas] = useState([]);
  const [totalPedido, setTotalPedido] = useState(0);
  const estadoGlobalPizzas = {pizzas, setPizzas, totalPedido, setTotalPedido};

  
  useEffect(() => {
    consultarInformacion();
}, []);


const consultarInformacion = async () => {

    const response = await fetch('./pizzas.json')
    const data = await response.json()
    setPizzas(data);
}

console.log(pizzas)


  return (
    <div className="App">
 
     
        <BrowserRouter>
         <ContextAPI.Provider value={ estadoGlobalPizzas }>
          <Navegador />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pizza/:id" element={<Detalles />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ContextAPI.Provider>  
        </BrowserRouter>
    </div >
  );
}

export default App;
