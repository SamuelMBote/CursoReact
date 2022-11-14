import React from 'react';

const Ref = () => {
  const [comentarios, setComentarios] = React.useState<string[]>([]);
  const [input, setInput] = React.useState('');
  const inputElement = React.useRef<HTMLInputElement | any>(null);

  function handleClick(): void {
    setComentarios([...comentarios, input]);
    setInput('');
    inputElement.current.focus();
  }

  return (
    <div className="container">
      <ul>
        {comentarios.map((comentario) => {
          return <li key={comentario}>{comentario}</li>;
        })}
      </ul>
      <input
        className="form-control"
        type="text"
        value={input}
        onChange={({target}) => setInput(target.value)}
        ref={inputElement}
      />
      <button className="btn btn-primary" type="button" onClick={handleClick}>
        Enviar
      </button>
    </div>
  );
};

export default Ref;
