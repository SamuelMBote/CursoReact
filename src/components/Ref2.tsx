import React from 'react';

const Ref2 = () => {
  const [carrinho, setCarrinho] = React.useState<number>(0);
  const [notificacao, setNotificacao] = React.useState<string | null>(null);
  const timeoutRef = React.useRef<ReturnType<typeof setTimeout>>();
  function handleClick() {
    setCarrinho(carrinho + 1);
    setNotificacao('Item adicionado ao carrinho');

    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setNotificacao(null);
      console.log(timeoutRef.current);
    }, 1000 * 2);
  }
  return (
    <div className="container">
      <p>{notificacao}</p>
      <button className="btn btn-primary" onClick={handleClick}>
        Adicionar Carrinho {carrinho}
      </button>
    </div>
  );
};

export default Ref2;
