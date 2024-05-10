import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "../css/Tarea.css";


function Tarea({ id, texto, completada, completarTarea, eliminarTarea }) {
  return (
    <div className= {completada ? "tarea-contenedor completada" : "tarea-contenedor"}>
      <div 
      onClick={()=> completarTarea(id)}
      className="tarea-texto">{texto}</div>
      <div className="tarea-contendor-iconos" onClick={()=>eliminarTarea(id)}>
        <AiOutlineCloseCircle className="tarea-icono"/>
      </div>
    </div>
  );
}
export default Tarea;
