import React from 'react';
import {GlobalContext} from '../providers/ContextGlobal';
const Footer = () => {
  const {limparDados} = React.useContext(GlobalContext);

  return (
    <footer>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Footer
          </a>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav"></ul>
          </div>
          <div className="d-flex">
            <ul className="navbar-nav"></ul>
            <form action="">
              <button
                className="btn btn-outline-primary"
                type="button"
                onClick={limparDados}
              >
                Limpar Dados
              </button>
            </form>
          </div>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
