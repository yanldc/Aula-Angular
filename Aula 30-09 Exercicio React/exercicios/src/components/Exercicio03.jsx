import React, { useState } from 'react';

function Exercicio03() {
  const [nomeAluno, setNomeAluno] = useState('');
  const [nota1, setNota1] = useState('');
  const [nota2, setNota2] = useState('');
  const [nota3, setNota3] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const dadosNotas = {
      aluno: nomeAluno,
      notas: [parseFloat(nota1), parseFloat(nota2), parseFloat(nota3)],
    };
    console.log('Exercício 03 - Dados das Notas:', dadosNotas);
  };

  return (
    <div>
      <h2>Exercício 03: Cadastro de Notas</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome do Aluno:</label>
          <input
            type="text"
            value={nomeAluno}
            onChange={(e) => setNomeAluno(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Nota 1:</label>
          <input
            type="number"
            step="0.1"
            min="0"
            max="10"
            value={nota1}
            onChange={(e) => setNota1(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Nota 2:</label>
          <input
            type="number"
            step="0.1"
            min="0"
            max="10"
            value={nota2}
            onChange={(e) => setNota2(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Nota 3:</label>
          <input
            type="number"
            step="0.1"
            min="0"
            max="10"
            value={nota3}
            onChange={(e) => setNota3(e.target.value)}
            required
          />
        </div>
        <button type="submit">Cadastrar Notas</button>
      </form>
    </div>
  );
}

export default Exercicio03;