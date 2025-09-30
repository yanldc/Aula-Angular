import React from 'react';
import Exercicio01 from './components/Exercicio01';
import Exercicio02 from './components/Exercicio02';
import Exercicio03 from './components/Exercicio03';
import Exercicio04 from './components/Exercicio04';
import Exercicio05 from './components/Exercicio05';
import './App.css'; // Opcional: para estilização

function App() {
  return (
    <div className="App">
      <h1>Lista de Exercícios - Formulários em React</h1>
      <hr />
      <Exercicio01 />
      <hr />
      <Exercicio02 />
      <hr />
      <Exercicio03 />
      <hr />
      <Exercicio04 />
      <hr />
      <Exercicio05 />
    </div>
  );
}

export default App;