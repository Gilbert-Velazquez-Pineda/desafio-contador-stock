import { useState } from 'react';

function ItemCount () {

    const [count, setCount,] = useState (1)
    var stock =5
    return (
        
    <div className="container">
        <div className="card text-center my-5">
            <div className="card-body">
                <h2>Contador App</h2>
                <div className="my-5">
                    <h3 className="my-5">{count}</h3>
                    <button className="btn btn-success mx-3" onClick={() => setCount(count + 1)} disabled={count === stock}>Incremeto</button>
                    <button className="btn btn-danger mx-3" onClick={() => setCount(count - 1)} disabled={count === 0}>Decremento</button>
                    <button className="btn btn-secondary mx-3" onClick={() => setCount(0)}>Limpiar</button>
                </div>
                <button className="btn btn-primary mx-3" disabled={count === 0} >Agregar a Carrito</button>
            </div>
        </div>
    </div>
    );


}

export default ItemCount;