import './App.css';
import Saludo from './Saludo.js';

/*
Los componentes siempre se tienen que escribir en mayusculas ya que el dom, no lo reconoce puesto que solo las etiquetas en minusculas son propias del html. Además es necesario que todas las etiquetas en react se cierren a diferencia de html que tiene etiquetas que no lo necesitan.
*/

const Description = (props) => {
  return (
    <h1 style={{color: props.color}}>React, es un gran curso.</h1>
  )
}

function App() {
  return (
    <div className="App">
      <Saludo day="dias, Estamos trabajando en un curso de react."/>
      <Saludo day="tardes, Estamos trabajando en un curso de react."/>
      <Description color="red"></Description>
    </div>
  );
}

export default App;
