import React, { useState } from "react";
import TareaFormulario from "./TareaFormulario";
import "../css/ListaTareas.css";
import Tarea from "./Tarea";

function ListaTareas() {

  const [tareas, setTareas] = useState([]);
  const agregarTarea = tarea => {
    console.log("Tarea agregada");
  }
  return (
    <>
      <TareaFormulario />
      <div className="tareas-listas-contenedor">
        {
          tareas.map((tarea)=>
            <Tarea 
              texto={tarea.texto}
              completada = {tarea.completada}
            />
            
          )
        }
      </div>
    </>
  );
}
export default ListaTareas;
