import React from 'react';
import {Link} from 'react-router-dom';
import Ref from '../Ref';
import Ref2 from '../Ref2';
import TesteCustomHook from '../TesteCustomHook';
import TesteUseFetch from '../TesteUseFetch';
import Validacao from '../Validacao';
const Home = () => {
  return (
    <section>
      <Ref />
      <Ref2 />
      <TesteCustomHook />
      <TesteUseFetch />
      <Validacao />
      <Link to="produto/notebook">Notebook</Link>{' '}
      <Link to="produto/smartphone">Smartphone</Link>
    </section>
  );
};

export default Home;
