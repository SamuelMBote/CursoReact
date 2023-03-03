import React from 'react';
function fncReducer(state: any, action: string): number | Error {
  if (action === 'aumentar') return state + 1;
  if (action === 'diminuir') return state - 1;
  return new Error('Erro: action não existe');
}
function fncRedutora(state: any[], action: {type: string; content: string}) {
  switch (action.type) {
    case 'remover':
      return state.filter((item) => item !== action.content);
    case 'adicionar':
      return [...state, action.content];
    default:
      throw new Error('');
  }
}

const Reducer = () => {
  const [state, dispatch] = React.useReducer(fncReducer, 0);
  const [estado, envio] = React.useReducer(fncRedutora, ['Banana', 'Uva']);
  return (
    <div>
      <div className="container">
        <h1>useReducer</h1>
        <button onClick={() => dispatch('diminuir')}>-</button>
        <button onClick={() => dispatch('aumentar')}>+</button>
        <p>{state instanceof Error ? null : state}</p>
      </div>
      <div className="container">
        <h1>useReducer</h1>
        <button onClick={() => envio({type: 'remover', content: 'Banana'})}>
          Remover Banana
        </button>
        <button onClick={() => envio({type: 'adicionar', content: 'Banana'})}>
          Adicionar Banana
        </button>
        <p>{estado instanceof Error ? null : estado}</p>
      </div>
    </div>
  );
};

export default Reducer;
