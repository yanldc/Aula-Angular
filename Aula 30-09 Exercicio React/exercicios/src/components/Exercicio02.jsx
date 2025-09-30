import React, { useState } from 'react';

function Exercicio02() {
  const [nomePessoa, setNomePessoa] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const dadosPessoa = {
      nome: nomePessoa,
      nascimento: dataNascimento,
      telefone: telefone,
      endereco: endereco,
    };
    console.log('Exercício 02 - Dados da Pessoa:', dadosPessoa);
  };

  return (
    <div>
      <h2>Exercício 02: Cadastro de Pessoa</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome da Pessoa:</label>
          <input
            type="text"
            value={nomePessoa}
            onChange={(e) => setNomePessoa(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Data de Nascimento:</label>
          <input
            type="date"
            value={dataNascimento}
            onChange={(e) => setDataNascimento(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Telefone:</label>
          <input
            type="tel"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
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
        <button type="submit">Cadastrar Pessoa</button>
      </form>
    </div>
  );
}

export default Exercicio02;