import React from 'react';
import { useState } from 'react';

const Contador = () => {

    const [contador, setContador] = useState(0);

    return (
        <div>
            <p>cantidad de click : <span>{contador}</span></p>
            <button onClick={() => setContador((contador+1) > 0 ? (contador+1): 0)}> + </button>
            <button onClick={() => setContador((contador-1) > 0 ? (contador-1): 0)}> - </button>
        </div>

    )
}

export default Contador