import React, { useState } from 'react';

function Exercicio05() {
  const [nomeAluno, setNomeAluno] = useState('');
  const [matricula, setMatricula] = useState('');
  const [telefone, setTelefone] = useState('');
  const [curso, setCurso] = useState('');
  const [notas, setNotas] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Transforma a string de notas (separadas por vírgula) em um array de números
    const arrayNotas = notas.split(',').map(nota => parseFloat(nota.trim()));

    const dadosAluno = {
      aluno: nomeAluno,
      matricula: matricula,
      contato: telefone,
      curso: curso,
      notas: arrayNotas,
    };
    console.log('Exercício 05 - Dados do Aluno:', dadosAluno);
  };

  return (
    <div>
      <h2>Exercício 05: Cadastro de Alunos</h2>
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
          <label>Matrícula:</label>
          <input
            type="text"
            value={matricula}
            onChange={(e) => setMatricula(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Telefone de Contato:</label>
          <input
            type="tel"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Curso:</label>
          <input
            type="text"
            value={curso}
            onChange={(e) => setCurso(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Notas (separadas por vírgula):</label>
          <input
            type="text"
            value={notas}
            onChange={(e) => setNotas(e.target.value)}
            placeholder="Ex: 8.5, 9, 7.2"
            required
          />
        </div>
        <button type="submit">Cadastrar Aluno</button>
      </form>
    </div>
  );
}

export default Exercicio05;