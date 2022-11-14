import React from 'react';
import IProduto from '../interfaces/IProduto';
import Titulo from './Titulo';

function ListaProdutos(): JSX.Element {
  const produtos: IProduto[] = [
    {
      id: 1,
      nome: 'Smartphone',
      preco: 'R$ 2000',
      cores: ['#29d8d5', '#252a34', '#fc3766'],
      propriedades: ['2gb ram', '128gb'],
    },
    {
      id: 2,
      nome: 'Notebook',
      preco: 'R$ 3000',
      cores: ['#ffd045', '#d4394b', '#f37c59'],
      propriedades: ['16gb ram', '512gb'],
    },
    {
      id: 3,
      nome: 'Tablet',
      preco: 'R$ 1500',
      cores: ['#365069', '#47c1c8', '#f95786'],
    },
  ];
  const inputValor: HTMLInputElement | null =
    document.querySelector('#buscarProduto');

  const [valor, alteraValor] = React.useState<number>(0);

  function buscarProduto(valorDigitado: string | null) {
    alteraValor(Number(valorDigitado));
  }
  console.log(valor);
  return (
    <div className="container">
      <Titulo texto="Lista de Produtos" corTexto="wheat" displayType="4" />
      <div className="mb-3">
        <label htmlFor="buscarProduto">Buscar Produto</label>
        <input
          id="buscarProduto"
          type="text"
          autoComplete="on"
          className="form-control"
          onKeyUp={() => {
            const valor: string | null = inputValor && inputValor.value;
            buscarProduto(valor);
          }}
        />
      </div>

      {produtos
        .filter((produto) => Number(produto.preco.replace('R$ ', '')) > valor)
        .map((produto) => {
          return (
            <div key={produto.id} className="container">
              <h2>{produto.nome}</h2>
              <p>Preço: {produto.preco}</p>
              {produto.propriedades
                ? produto.propriedades.map((propriedade): JSX.Element => {
                    return (
                      <p
                        key={propriedade}
                        style={{
                          padding: '10px',
                          width: '100%',
                        }}
                      >
                        {propriedade}
                      </p>
                    );
                  })
                : ''}
              <ul style={{listStyle: 'none'}}>
                {produto.cores
                  ? produto.cores.map((cor): JSX.Element => {
                      return (
                        <li
                          key={cor}
                          style={{
                            backgroundColor: cor,
                            padding: '10px',
                            width: '100%',
                          }}
                        >
                          {cor}
                        </li>
                      );
                    })
                  : ''}
              </ul>
            </div>
          );
        })}
    </div>
  );
}

export default ListaProdutos;
