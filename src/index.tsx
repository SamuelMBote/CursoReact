import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Footer from './components/controllers/Footer';
import Header from './components/controllers/Header';
import Clientes from './components/pages/Clientes';
import Contato from './components/pages/Contato';
import Home from './components/pages/Home';
import Livros from './components/pages/Livros';
import Produtos from './components/pages/Produtos';
import './scss/main.scss';
import {GlobalStorage} from './components/providers/ContextGlobal';
import ProdutosContextos from './components/pages/ProdutosContextos';
import Formularios from './components/pages/Formularios';
import IMC from './components/pages/IMC';
import Animacoes from './components/pages/Animacoes';
import NotFound from './components/pages/NotFound';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <GlobalStorage>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="produtos" element={<Produtos />} />
          <Route path="produtos-contexto" element={<ProdutosContextos />} />
          <Route path="clientes" element={<Clientes />} />
          <Route path="livros" element={<Livros />} />
          <Route path="contato" element={<Contato />} />

          <Route path="formularios" element={<Formularios />} />
          <Route path="imc" element={<IMC />} />
          <Route path="animacoes" element={<Animacoes />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </GlobalStorage>
  </React.StrictMode>,
);

