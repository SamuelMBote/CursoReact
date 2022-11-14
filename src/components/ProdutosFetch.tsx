import React from 'react';
import ProdutosBuscados from '../interfaces/IProdutosBuscados';
const ProdutosFetch = (produto: ProdutosBuscados) => {
  return (
    <div key={produto.id}>
      <p className="h1">
        {produto.nome}
        <span className="lead"> R$ {produto.preco}</span>
      </p>
      <p
        style={produto.vendido === 'false' ? {color: 'green'} : {color: 'red'}}
        className=" blink_me"
      >
        {produto.vendido ? '[Disponível]' : '[Sem Estoque]'}
      </p>
      <p>{produto.descricao}</p>
      <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo} />
    </div>
  );
};

export default ProdutosFetch;
