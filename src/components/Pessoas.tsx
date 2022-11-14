import React from 'react';
import IPessoa from '../interfaces/IPessoa';
import IProduto from '../interfaces/IProduto';
import Titulo from './Titulo';

function Pessoas(): JSX.Element {
  const luana: IPessoa = {
    cliente: 'Luana',
    idade: 27,
    compras: [
      {nome: 'Notebook', preco: 'R$ 2500'},
      {nome: 'Geladeira', preco: 'R$ 3000'},
      {nome: 'Smartphone', preco: 'R$ 1500'},
    ],
    ativa: true,
  };

  const mario: IPessoa = {
    cliente: 'Mario',
    idade: 31,
    compras: [
      {nome: 'Notebook', preco: 'R$ 2500'},
      {nome: 'Geladeira', preco: 'R$ 3000'},
      {nome: 'Smartphone', preco: 'R$ 1500'},
      {nome: 'Guitarra', preco: 'R$ 3500'},
    ],
    ativa: false,
  };
  const [pessoas, setPessoas] = React.useState<IPessoa[]>([luana]);

  React.useEffect(() => {
    setPessoas([...pessoas]);
  }, []);

  return (
    <div className="container">
      <Titulo texto="Clientes" corTexto="wheat" displayType="4" />
      {pessoas.map((pessoa) => {
        const totalGasto = pessoa.compras.reduce(
          (inicial: number, produto: IProduto): number => {
            let preco: number = Number(produto.preco.replace('R$', ''));

            return inicial + preco;
          },
          0,
        );

        return (
          <div key={pessoa.cliente}>
            <p>Nome: {pessoa.cliente}</p>
            <p>Idade: {pessoa.idade}</p>
            <p>
              Situação:{' '}
              <span style={{color: pessoa.ativa ? 'green' : 'red'}}>
                {pessoa.ativa ? 'Ativa' : 'Inativa'}
              </span>
            </p>
            <p>Total Gasto: R$ {totalGasto.toFixed(2)}</p>
            {totalGasto > 10000 && (
              <p className="blink_me" style={{color: 'yellow'}}>
                Está gastando muito
              </p>
            )}
            <br />
          </div>
        );
      })}
    </div>
  );
}

export default Pessoas;

