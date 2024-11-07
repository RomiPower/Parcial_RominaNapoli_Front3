import React, { useState } from "react";
import Card from "./Card";

const Form = () => {
    const [libro, setLibro] = useState({
      nombre: "",
      escritor: "",
    });
    const [mostrar, setMostrar] = useState(false);
    const [error, setError] = useState(false);
    console.log(libro);
  
    const handleSubmit = (event) => {
      event.preventDefault();
      if (
        libro.nombre.trim().length > 3 &&
        libro.escritor.trim().length > 6
      ) {
        setMostrar(true);
      } else {
        setError(true);
      }
    };
  
    return (
      <div>
          <form onSubmit={handleSubmit}>
            <label style={{padding: '8px'}}>Nombre del libro deseado:</label>
            <input
              type="text"
              value={libro.nombre}
              onChange={(event) =>
                setLibro({ ...libro, nombre: event.target.value })
              }
              style ={{display: 'block', padding: '6px', marginTop: '10px'}}
            />
            <label style={{padding: '8px'}}>Nombre del escritor: </label>
            <input
              type="text"
              value={libro.escritor}
              onChange={(event) =>
                setLibro({ ...libro, escritor: event.target.value })
              }
              style ={{display: 'block', padding: '6px', marginTop: '10px'}}
            />
            <button style={{backgroundColor: 'violet', color: 'white',fontSize: '16px',         
                borderRadius: '5px', display: 'block',padding: '8px',   marginTop: '10px'}}>ENVIAR</button>
    
            {mostrar && (
            <Card libro={libro}/>)}

            {error && (
              <h4 style ={{color: 'red',fontSize: '20px',padding: '8px'}}>
                Por favor chequea que la información sea correcta
              </h4>
            )}
          </form>
      </div>
    );
  };

  export default Form;