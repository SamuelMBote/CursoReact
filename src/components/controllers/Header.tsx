import React from 'react';
import {NavLink} from 'react-router-dom';
import {GlobalContext} from '../providers/ContextGlobal';
import Head from './Head';
import {Links} from './Links';

const Header = () => {
  const login = React.useContext(GlobalContext);

  return (
    <header>
      <Head title="Home" description="Essa é a descricao da Home" />
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
          <NavLink className={'navbar-brand'} to="/" end>
            HOme
          </NavLink>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              {Links.map((link) => {
                return (
                  <React.Fragment key={link.rota}>
                    <li className="nav-item">
                      <NavLink className={'nav-link'} to={link.rota}>
                        {link.label}
                      </NavLink>
                    </li>
                  </React.Fragment>
                );
              })}
            </ul>
          </div>
          <div className="d-flex">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  {login.usuarioLogado.nickname
                    ? login.usuarioLogado.nickname
                    : login.usuarioLogado.nome}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  {login.usuarioLogado.idade}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
