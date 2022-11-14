import React, {FormEvent} from 'react';
import {IInput, ISelectOption} from '../../interfaces/IInput';
import IUsuario from '../../interfaces/IUsuario';

const camposFormUser: IInput[] = [
  {id: 'nome', label: 'Nome', type: 'text'},
  {id: 'email', label: 'E-mail', type: 'email'},
  {id: 'senha', label: 'Senha', type: 'password'},
  {id: 'cep', label: 'CEP', type: 'text'},
  {id: 'rua', label: 'Rua', type: 'text'},
  {id: 'numero', label: 'Numero', type: 'text'},
  {id: 'bairro', label: 'Bairro', type: 'text'},
  {id: 'cidade', label: 'Cidade', type: 'text'},
  {id: 'estado', label: 'Estado', type: 'text'},
];
const opcoesSelect: ISelectOption[] = [
  {
    id: 'complemento',
    label: 'Complemento',
    options: [
      {valor: '', desc: ''},
      {valor: 'casa', desc: 'Casa'},
      {valor: 'apartamento', desc: 'Apartamento'},
      {valor: 'loja', desc: 'Loja'},
    ],
  },
];
const coresArray: string[] = [
  'azul',
  'roxo',
  'laranja',
  'verde',
  'vermelho',
  'cinza',
];

const Formularios = () => {
  const [usuario, setUsuario] = React.useState<IUsuario | any>({
    nome: '',
    email: '',
    senha: '',
    cep: '',
    rua: '',
    numero: '',
    bairro: '',
    cidade: '',
    estado: '',
  });

  function criaJson(event: any) {
    const {id, value} = event.target as HTMLInputElement;
    setUsuario({...usuario, [id]: value});
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    fetch('https://ranekapi.origamid.dev/json/api/usuario', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(usuario),
    }).then((r) => console.log(r));
  }
  const [selectInput, setSelect] = React.useState<string>('');
  const [radioSexo, setSexo] = React.useState('');
  const [chkTermos, setTermos] = React.useState<boolean>(false);
  const [cores, setCores] = React.useState<string[]>(['azul']);

  function handleCores({target}: any) {
    if (target.checked) {
      setCores([...cores, target.value]);
    } else {
      setCores(cores.filter((cor: string) => cor !== target.value));
    }
  }
  console.log(cores);
  function handleRadio({target}: any) {
    setSexo(target?.value);
  }
  function handleCheckbox({target}: any) {
    setTermos(target?.checked);
  }
  function checkColor(cor: string) {
    return cores.includes(cor);
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <form onSubmit={handleSubmit}>
            {camposFormUser.map(({id, label, type}) => {
              return (
                <div key={id} className="col-12">
                  <label htmlFor="nome" className="form-label">
                    {label}
                  </label>
                  <input
                    type={type}
                    name={id}
                    id={id}
                    value={usuario[id]}
                    onChange={criaJson}
                    className="form-control"
                    autoComplete={type === 'password' ? 'on' : 'off'}
                  />
                </div>
              );
            })}
            {opcoesSelect.map((select) => {
              return (
                <div key={select.id} className="col-12">
                  <label htmlFor={select.id}>{select.label}</label>
                  <select
                    className="form-select"
                    name={select.id}
                    id={select.id}
                    value={selectInput}
                    onChange={(event) => {
                      setSelect(event.target.value);
                    }}
                  >
                    {select.options?.map((option) => {
                      return (
                        <React.Fragment key={option.valor}>
                          <option
                            value={option.valor}
                            disabled={option.valor === '' ? true : false}
                          >
                            {option.desc}
                          </option>
                        </React.Fragment>
                      );
                    })}
                  </select>
                </div>
              );
            })}
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="sexo"
                id="homem"
                value={'homem'}
                onChange={handleRadio}
              />
              <label className="form-check-label" htmlFor="homem">
                Homem
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="sexo"
                id="mulher"
                value={'mulher'}
                onChange={handleRadio}
              />
              <label className="form-check-label" htmlFor="mulher">
                Mulher
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value={'Termos'}
                id="termos"
                name="termos"
                checked={chkTermos}
                onChange={handleCheckbox}
              />
              <label className="form-check-label" htmlFor="termos">
                Li e aceito os termos e condiçoes
              </label>
            </div>
            <div>
              <h6 className="display-6">Cores</h6>
              {coresArray.map((cor, index) => {
                return (
                  <div className="col-12" key={cor + '' + index}>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value={cor}
                        id={cor}
                        name={cor}
                        checked={checkColor(cor)}
                        onChange={handleCores}
                      />
                      <label className="form-check-label" htmlFor={cor}>
                        {cor}
                      </label>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="col-12 my-2">
              <p>{radioSexo}</p>
              <p>{chkTermos.toString()}</p>
              <button className="btn btn-primary">Enviar</button>
            </div>
          </form>
        </div>
        <div className="col">
          <label htmlFor="meujson"></label>
          <textarea
            className="form-control"
            name="meujson"
            id="meujson"
            cols={30}
            rows={20}
            value={JSON.stringify(usuario)}
            onChange={(event) => event.target.value}
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default Formularios;
