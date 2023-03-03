import React from 'react';
import {Link} from 'react-router-dom';
import Reducer from '../Reducer';
import Ref from '../Ref';
import Ref2 from '../Ref2';
import TesteCustomHook from '../TesteCustomHook';
import TesteUseFetch from '../TesteUseFetch';
import Validacao from '../Validacao';
const Home = () => {
  const [contar, setContar] = React.useState(0);
  return (
    <section>
      <Ref />
      <Ref2 />
      <TesteCustomHook />
      <TesteUseFetch />
      <Validacao />
      <div className="container">
        <Link to="produto/notebook">Notebook</Link>{' '}
        <Link to="produto/smartphone">Smartphone</Link>
      </div>
      <Reducer />
    </section>
  );
};

export default Home;
