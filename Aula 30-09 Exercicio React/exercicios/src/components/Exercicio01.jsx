import React, { useState } from 'react';

function Exercicio01() {
  const [nomeProduto, setNomeProduto] = useState('');
  const [precoProduto, setPrecoProduto] = useState('');
  const [dataValidade, setDataValidade] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const dadosProduto = {
      nome: nomeProduto,
      preco: precoProduto,
      validade: dataValidade,
    };
    console.log('Exercício 01 - Dados do Produto:', dadosProduto);
  };

  return (
    <div>
      <h2>Exercício 01: Cadastro de Produtos</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome do Produto:</label>
          <input
            type="text"
            value={nomeProduto}
            onChange={(e) => setNomeProduto(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Preço do Produto:</label>
          <input
            type="number"
            step="0.01"
            value={precoProduto}
            onChange={(e) => setPrecoProduto(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Data de Validade:</label>
          <input
            type="date"
            value={dataValidade}
            onChange={(e) => setDataValidade(e.target.value)}
            required
          />
        </div>
        <button type="submit">Cadastrar Produto</button>
      </form>
    </div>
  );
}

export default Exercicio01;