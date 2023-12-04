import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";


const Formulario = () => {
  const { register, handleSubmit,reset, formState: { errors } } = useForm();
  const navigate = useNavigate(); // Obtener la función navigate
  
  const accion = async (datos) => {
    try {
      await fetch("https://borrar-cuenta-react-backend.vercel.app/formulario", {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(datos),
        headers: { "Content-Type": "application/json" }
      });
      console.log("Datos enviados correctamente");
      reset();
      navigate('/')
      alert('¡¡Datos enviados correctamente!!; Proximamente te enviaremos un correo de confirmación para eliminar todos tus datos de forma definitiva');
    } catch (error) {
      console.log("Error al enviar los datos:", error);
    } 
  
  };

  return (
    <>
    <div className="contForm">
    
      <form className="formulario"onSubmit={handleSubmit(accion)}>
        
        
        <div className="campos">
          <label htmlFor="email"><p>*E-Mail</p></label>
          <input className="inputc" id="email" placeholder="" {...register("correo",{required: true}, { pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/ })} />
        </div>

        <div className="campos">
          <label htmlFor="Alias"><p>Alias</p></label>
          <input id="Alias" placeholder="Introduce tu alias" {...register("alias",)} />
        </div>
        
        <div className="campos comentarios">
          <label htmlFor="comentarios"><p>COMENTARIOS</p></label>
          <textarea id="comentarios" placeholder="" {...register("comentarios")} />
        </div>
        <input type="submit" value="ENVIAR DATOS" />
        {errors.alias?.type === "required" && <div><p>Es obligatorio ingresar un alias</p></div>}
        {errors.correo?.type === "pattern" && <div><p>Eso no es un correo válido</p></div>}
        
      </form>
      
      
      </div>
      
    </>
  );
};

export default Formulario;
