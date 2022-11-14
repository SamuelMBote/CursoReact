import React from 'react';
import ProdutosBuscados from '../../interfaces/IProdutosBuscados';
import IUser from '../../interfaces/IUser';

const GlobalContext = React.createContext<any>(null);

const usuarioLogado: IUser = {
  nome: 'Samuel',
  idade: 25,
  nickname: 'SamuelMBote',
  email: 'smcmbote@hotmail.com',
};

export const GlobalStorage = ({children}: any) => {
  const [produtoContext, setProdutoContext] = React.useState<
    ProdutosBuscados[] | null
  >([]);

  function limparDados() {
    setProdutoContext(null);
  }
  function buscaProdutos() {
    fetch('https://ranekapi.origamid.dev/json/api/produto')
      .then((r) => r.json())
      .then((r) => {
        setProdutoContext(r);
      });
  }

  React.useEffect(() => buscaProdutos, []);

  return (
    <GlobalContext.Provider
      value={{usuarioLogado, produtoContext, limparDados}}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export {GlobalContext};
