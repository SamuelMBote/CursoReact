import React from 'react';
import {useLocation, useParams, Outlet} from 'react-router';
import {NavLink} from 'react-router-dom';

const Produto = () => {
  const params = useParams();
  const location = useLocation();
  //console.log(params);
  //console.log(location);
  return (
    <div>
      <h1>Produto: {params.id}</h1>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className={'nav-link'} to="" end>
                Descricao
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={'nav-link'} to="avaliacao">
                Avaliacao
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={'nav-link'} to="customizado">
                Customizado
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Produto;
