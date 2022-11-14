import React from 'react';

import useLocalStorage from '../hooks/useLocalStorage';

const TesteCustomHook = () => {
  const [produto, setProduto] = useLocalStorage('_produto', 'nome_produto');
  function handleClick(Event: any) {
    const nome_botao = Event.target as HTMLButtonElement;
    console.log(nome_botao.innerText);
    setProduto(nome_botao.innerText);
  }
  return (
    <div className="container my-5">
      <button className="btn btn-primary mx-1" onClick={handleClick}>
        Samuel
      </button>
      <button className="btn btn-primary mx-1" onClick={handleClick}>
        Bruno
      </button>
    </div>
  );
};
export default TesteCustomHook;
