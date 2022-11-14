import React from 'react';
import ProdutosFetch from './ProdutosFetch';
import ProdutosBuscados from '../interfaces/IProdutosBuscados';
const StateTests = (): JSX.Element => {
  const estilo: object = {
    className: 'btn btn-outline-primary',
    type: 'button',
    onClick: buscaProduto,
  };
  const produtos: string[] = ['Notebook', 'Tablet', 'SmartPhone'];
  const prodPlaceHolder: ProdutosBuscados = {
    descricao: '',
    fotos: [{src: '', titulo: ''}],
    id: '',
    nome: '',
    preco: 0,
    usuario_id: '',
    vendido: '',
  };
  const [meuProduto, atualizaProduto] =
    React.useState<ProdutosBuscados>(prodPlaceHolder);

  const [carregando, setCarregando]: [
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>,
  ] = React.useState(false);

  async function buscaProduto(Event: MouseEvent) {
    setCarregando(true);
    const nome_botao = Event.target as HTMLButtonElement;
    const fetchProduto = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${nome_botao.innerText.toLowerCase()}`,
    );

    if (fetchProduto.ok) {
      const json = await fetchProduto.json();
      atualizaProduto(json);
      setCarregando(false);
    }
  }
  React.useEffect(() => {
    if (meuProduto.nome !== '')
      window.localStorage.setItem('produto', meuProduto.nome);
  }, [meuProduto]);

  React.useEffect(() => {
    const produto = window.localStorage.getItem('produto');

    async function buscaPreferencia() {
      setCarregando(true);
      const fetchProduto = await fetch(
        `https://ranekapi.origamid.dev/json/api/produto/${produto?.toLowerCase()}`,
      );

      if (fetchProduto.ok) {
        const json = await fetchProduto.json();
        atualizaProduto(json);
        setCarregando(false);
      }
    }
    produto && buscaPreferencia();
  }, []);

  return (
    <div className="container">
      <div>
        <h1>Preferência: {window.localStorage.getItem('produto')}</h1>
      </div>
      <div className="row">
        <div className="btn-group" role="group">
          {produtos.map((botao) => {
            return (
              <button key={botao} {...estilo}>
                {botao}
              </button>
            );
          })}
        </div>
      </div>
      {carregando && (
        <div className="container">
          <div className="row">
            <div className="d-flex align-items-center">
              <strong>Loading...</strong>
              <div
                className="spinner-border ms-auto"
                role="status"
                aria-hidden="true"
              ></div>
            </div>
          </div>
        </div>
      )}

      {!carregando && meuProduto && <ProdutosFetch {...meuProduto} />}
    </div>
  );
};

export default StateTests;
