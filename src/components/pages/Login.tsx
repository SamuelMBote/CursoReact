import React from 'react';
import {useNavigate} from 'react-router';

const Login = () => {
  const navigate = useNavigate();
  function handleClick() {
    console.log('Fazer login');
    navigate('/clientes');
  }
  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleClick}>Login</button>
    </div>
  );
};

export default Login;
