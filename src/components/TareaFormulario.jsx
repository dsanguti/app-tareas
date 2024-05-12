import React, { useState } from "react";
import "../css/TareaFormulario.css";
import { v4 as uuidv4 } from 'uuid';

function TareaFormulario(props) {

  const [input, setInput] = useState('');

  const manejarCambio = e => {
    setInput(e.target.value);
    
  }

  const manejarEnvio = e =>{
    e.preventDefault();
   
    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false
    }
    props.onSubmit(tareaNueva)

    // Se limpia el input despues de enviar la tarea
    setInput('');
  }

  return (
    <form className="tarea-formulario"
    onSubmit={manejarEnvio}>
      <input
        className="tarea-input"
        type="text"
        placeholder="Escribe una tarea"
        name="texto"
        value={input}
        onChange={manejarCambio}
      />
      <button className="tarea-boton"> Agregar Tarea</button>
    </form>
  );
}
export default TareaFormulario;
