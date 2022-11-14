import React, {FormEvent} from 'react';
import Titulo from '../Titulo';
import IIMC from '../../interfaces/IIMC';
import calculaIMC from '../../functions/calculaIMC';
interface IForm {
  nome: string;
  idade: number;
  peso: number;
  altura: number;
}

const Form = () => {
  const [form, setForm] = React.useState<IForm>({
    nome: '',
    idade: 0,
    peso: 0,
    altura: 0,
  });

  const [imc, setIMC] = React.useState<IIMC>({imc: '', mensagem: ''});

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    calculaIMC(form.peso.toString(), form.altura.toString());
  }
  function handleChange(event: any) {
    const {id, value} = event.target as HTMLInputElement;
    setForm({...form, [id]: value});
    console.log(form.idade);
  }

  return (
    <div className="container">
      <Titulo texto="Contato" corTexto="wheat" displayType="4" />

      <form onSubmit={handleSubmit} className="">
        <label htmlFor="teste">Nome</label>
        <input
          className="form-control"
          id="nome"
          type="text"
          value={form?.nome}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Peso</label>
        <input
          className="form-control"
          id="peso"
          type="text"
          value={form?.peso}
          onChange={handleChange}
        />
        <label htmlFor="email">Altura</label>
        <input
          className="form-control"
          id="altura"
          type="text"
          value={form?.altura}
          onChange={handleChange}
        />
        <button className="btn btn-primary my-2">Enviar</button>
      </form>
      <div className="my-2 row">
        <div className="col">
          <p>Nome: {form?.nome}</p>
          <p>Idade: {form?.idade}</p>
          <p>Peso: {form?.peso}</p>
          <p>Altura: {form?.altura}</p>
        </div>
        <div className="col">
          <p>{imc.imc ? `Seu imc é ${imc.imc}` : ''} </p>
          <p>{imc.mensagem && form.nome + ' ' + imc.mensagem}</p>
        </div>
      </div>
    </div>
  );
};

export default Form;
