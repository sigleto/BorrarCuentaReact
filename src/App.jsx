import React from 'react';
import Formulario from './Formulario';
import './App.css';

function App() {
  return (
    <>
      <div className="container">
        <p className="intro-paragraph">
          INTRODUCE AQUÍ TUS DATOS PARA ELIMINAR TU CUENTA EN LA APLICACIÓN "CITA PREVIA TOTAL"
        </p>
        <div className="form-container">
          <Formulario />
        </div>
      </div>
    </>
  );
}

export default App;
