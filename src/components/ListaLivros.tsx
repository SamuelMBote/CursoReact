import React from 'react';
import ILivros from '../interfaces/ILivros';
import Titulo from './Titulo';

function ListaLivros(): JSX.Element {
  const [livros, AdicionaLivro] = React.useState<ILivros[]>([
    {nome: 'Game of Thrones', ano: new Date(1996, 12)},
    {nome: 'Clash of Kings', ano: new Date(1998, 12)},
    {nome: 'Storm of Swords', ano: new Date(2000, 12)},
  ]);

  const nomeLivro: HTMLInputElement | null =
    document.querySelector('#nomeLivro');
  const dataLancamento: HTMLInputElement | null =
    document.querySelector('#dataLancamento');
  function inserirLivro(nome: HTMLInputElement, data: HTMLInputElement) {
    AdicionaLivro([...livros, {nome: nome.value, ano: new Date(data.value)}]);
  }

  return (
    <div className="container">
      <Titulo texto="Livros" corTexto="wheat" displayType="4" />
      <div className="row">
        <div className="col">
          <div className="">
            <label htmlFor="nomeLivro">Nome</label>
            <input
              className="form-control"
              type="text"
              id="nomeLivro"
              name="nomeLivro"
            />
          </div>
        </div>
        <div className="col">
          <div className="mb-3">
            <label htmlFor="dataLancamento">Data</label>
            <input
              className="form-control"
              type="date"
              name="dataLancamento"
              id="dataLancamento"
            />
          </div>
        </div>

        <div className="mb-3">
          <button
            className="btn btn-primary"
            type="button"
            id="insereLivro"
            onClick={() => {
              if (nomeLivro && dataLancamento)
                inserirLivro(nomeLivro, dataLancamento);
            }}
          >
            Inserir
          </button>
        </div>
      </div>
      <ul>
        {livros
          .filter((livro) => livro.ano.getFullYear() >= 1998)
          .map((livro) => {
            return (
              <li key={livro.nome + '' + livro.ano}>
                {livro.nome +
                  ', ' +
                  livro.ano.toLocaleDateString('default', {year: 'numeric'})}
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default ListaLivros;
