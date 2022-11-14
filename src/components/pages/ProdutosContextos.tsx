import React from 'react';
import ProdutosBuscados from '../../interfaces/IProdutosBuscados';
import {GlobalContext} from '../providers/ContextGlobal';

const ProdutosContextos = () => {
  const {produtoContext} = React.useContext(GlobalContext);

  if (produtoContext === null) return null;
  return (
    <div className="container my-3">
      {produtoContext.map((produto: ProdutosBuscados) => {
        return (
          <div key={produto.id}>
            <h1
              className="display-5"
              style={
                produto.vendido === 'false' ? {color: 'green'} : {color: 'red'}
              }
            >
              {produto.nome}
              <span className="lead"> R$ {produto.preco}</span>
            </h1>
            <p className="">{produto.descricao}</p>
            {produto.fotos.map((img) => {
              return (
                <img
                  key={img.titulo}
                  style={{width: '354px', height: '472px'}}
                  className="img-fluid rounded"
                  src={img.src}
                  alt={img.titulo}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default ProdutosContextos;
