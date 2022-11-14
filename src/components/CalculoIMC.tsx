import React, {FormEvent} from 'react';
import Button from './forms/Button';
import Input from './forms/Input';
import Titulo from './Titulo';
import IIMC from '../interfaces/IIMC';
import calculaIMC from '../functions/calculaIMC';

const CalculoIMC = () => {
  const [nome, setNome] = React.useState('');
  const [idade, setIdade] = React.useState('');
  const [peso, setPeso] = React.useState('');
  const [altura, setAltura] = React.useState('');
  const [imc, setIMC] = React.useState<IIMC>({imc: '', mensagem: ''});

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setIMC(calculaIMC(peso, altura));
  }
  return (
    <div className="container">
      <Titulo
        texto="Calculo IMC usando components de Fomularios"
        corTexto="wheat"
        displayType="6"
      />
      <form onSubmit={handleSubmit}>
        <Input
          id="nome"
          label="Nome"
          type="text"
          placeholder="Nome"
          value={nome}
          setValue={setNome}
        />
        <Input
          id="idade"
          label="Idade"
          type="text"
          placeholder="Idade"
          value={idade}
          setValue={setIdade}
        />
        <Input
          id="peso"
          label="Peso"
          type="text"
          placeholder="Peso em kg"
          value={peso}
          setValue={setPeso}
        />
        <Input
          id="altura"
          label="Altura"
          type="text"
          placeholder="Altura em cm"
          value={altura}
          setValue={setAltura}
        />
        <Button desc="Calcular" />
      </form>
      <p>Nome: {nome}</p>
      <p>Idade: {idade}</p>
      <p>Peso: {peso} kg</p>
      <p>Altura: {altura} cm</p>
      <p>Seu Indice de Massa Corporal é: {imc && imc.imc}</p>
      <p>{imc && imc.mensagem}</p>
    </div>
  );
};

export default CalculoIMC;
