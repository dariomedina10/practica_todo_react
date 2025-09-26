import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Todo from './Componentes/Todo'
import Form from './Componentes/Form'
import FilterButton from './Componentes/FilterButton'
import './App.css'

function retornarAleatorio() {
  return Math.trunc(Math.random() * 10);
}

function App2() {
  return (
    <div>
      <form onSubmit={presion}>
        <p>Ingrese primer valor:
          <input type="number" name="valor1" />
        </p>
        <p>Ingrese segundo valor:
          <input type="number" name="valor2" />
        </p>
        <p>
          <input type="submit" value="Sumar" />
        </p>
      </form>
    </div>
  );
}

function presion(e) {
  e.preventDefault();
  const v1=parseInt(e.target.valor1.value, 10);
  const v2=parseInt(e.target.valor2.value, 10);
  const suma=v1+v2;
  alert('La suma es:'+suma);
}



function App() {
  const siglo = 21
  const persona = {
    nombre: 'Juan',
    edad: 34
  }
  return (
    <div>
      <h1>Título nivel 1</h1>
      <hr />
      <p>Estamos en el siglo {siglo}</p>
      <h3>Acceso a un objeto</h3>
      <p>{persona.nombre} tiene {persona.edad} años</p>
      <h3>Llamada a un método</h3>
      <p>Un valor aleatorio llamando a un método.</p>
      {retornarAleatorio()}
      <h3>Calculo inmediato de expresiones</h3>
      3 + 3 = {3 + 3}
      <App2 />;
    </div>
   
    
   
    
  );
}


export default App;