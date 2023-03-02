import React from 'react';
import Input from './forms/Input';
import useForm from './useForm';
const Validacao = () => {
  const cep = useForm('cep');
  const nome = useForm(false);
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (cep.validate()) {
      console.log('Enviou');
    } else {
      console.log('Não enviar');
    }
  }
  return (
    <form className="container" onSubmit={handleSubmit}>
      <Input
        id="cep"
        label="CEP"
        type="text"
        placeholder="00000-000"
        {...cep}
      />
      <Input id="nome" label="Nome" type="text" placeholder="nome" {...nome} />

      <button className="btn btn-primary">Enviar</button>
    </form>
  );
};

export default Validacao;
