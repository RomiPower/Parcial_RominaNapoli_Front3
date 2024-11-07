import React from "react";

const Card = ({libro}) => {
  
  return (
    <div style={{backgroundColor: 'grey'}} >
      <h2>Estamos procesando tu compra:</h2>
      <h3>El libro seleccionado es : {libro.nombre}</h3>
      <h4>Su escritor es : {libro.escritor}</h4>
    </div>
  );
};

export default Card;