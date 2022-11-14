import React from 'react';

interface IPropriedades {
  texto: string;
  corTexto: string;
  displayType?: string;
  children?: string;
}

const Titulo = (props: IPropriedades) => {
  return (
    <section>
      <div className="container">
        <h1
          className={
            props.displayType
              ? 'animeLeft display-' + props.displayType
              : 'animeLeft'
          }
          style={{color: props.corTexto}}
        >
          {props.texto + ' ' + (props.children ? props.children : '')}
        </h1>
      </div>
    </section>
  );
};

export default Titulo;
