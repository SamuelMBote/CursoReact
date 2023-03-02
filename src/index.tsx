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
import Animacoes from './components/pages/Animacoes';
import NotFound from './components/pages/NotFound';
import Login from './components/pages/Login';
import Produto from './components/pages/Produto';
import ProdutoAvaliacao from './components/nested/ProdutoAvaliacao';
import ProdutoCustomizado from './components/nested/ProdutoCustomizado';
import ProdutoDescricao from './components/nested/ProdutoDescricao';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <GlobalStorage>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="produto/:id/*" element={<Produto />}>
          <Route path="" element={<ProdutoDescricao />} />
          <Route path="avaliacao" element={<ProdutoAvaliacao />} />
          <Route path="customizado" element={<ProdutoCustomizado />} />
        </Route>
        <Route path="produtos" element={<Produtos />} />
        <Route path="produtos-contexto" element={<ProdutosContextos />} />
        <Route path="clientes" element={<Clientes />} />
        <Route path="livros" element={<Livros />} />
        <Route path="contato" element={<Contato />} />
        <Route path="formularios" element={<Formularios />} />
        <Route path="animacoes" element={<Animacoes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </GlobalStorage>,
);

