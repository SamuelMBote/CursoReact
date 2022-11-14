import IProduto from './IProduto';

export default interface IPessoa {
  cliente: string;
  idade: number;
  compras: IProduto[];
  ativa: boolean;
}
