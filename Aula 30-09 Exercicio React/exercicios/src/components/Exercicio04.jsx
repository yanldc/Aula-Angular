import React, { useState } from 'react';

function Exercicio04() {
  const [nomeEscola, setNomeEscola] = useState('');
  const [endereco, setEndereco] = useState('');
  const [telefone, setTelefone] = useState('');
  const [nomeCurso, setNomeCurso] = useState('');
  const [descricaoCurso, setDescricaoCurso] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const dadosCurso = {
      escola: nomeEscola,
      endereco: endereco,
      contato: telefone,
      curso: nomeCurso,
      descricao: descricaoCurso,
    };
    console.log('Exercício 04 - Dados do Curso:', dadosCurso);
  };

  return (
    <div>
      <h2>Exercício 04: Cadastro de Cursos</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome da Escola:</label>
          <input
            type="text"
            value={nomeEscola}
            onChange={(e) => setNomeEscola(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Endereço:</label>
          <input
            type="text"
            value={endereco}
            onChange={(e) => setEndereco(e.target.value)}
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
          <label>Nome do Curso:</label>
          <input
            type="text"
            value={nomeCurso}
            onChange={(e) => setNomeCurso(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Descrição do Curso:</label>
          <textarea
            value={descricaoCurso}
            onChange={(e) => setDescricaoCurso(e.target.value)}
            required
          />
        </div>
        <button type="submit">Cadastrar Curso</button>
      </form>
    </div>
  );
}

export default Exercicio04;