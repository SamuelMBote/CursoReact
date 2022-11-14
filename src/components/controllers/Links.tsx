interface ILink {
  rota: string;
  label: string;
}
export const Links: ILink[] = [
  {rota: '/', label: 'Home'},
  {rota: 'animacoes', label: 'Animacoes'},
  {rota: 'clientes', label: 'Clientes'},
  {rota: 'contato', label: 'Contato'},
];
