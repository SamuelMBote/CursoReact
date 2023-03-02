interface ILink {
  rota: string;
  label: string;
  props?: string[];
}
export const Links: ILink[] = [
  {rota: '/', label: 'Home'},
  {rota: 'login', label: 'Login'},
  {rota: 'produto', label: 'Produto'},
  {rota: 'animacoes', label: 'Animacoes'},
  {rota: 'clientes', label: 'Clientes'},
  {rota: 'contato', label: 'Contato'},
  {rota: 'formularios', label: 'Formularios'},

  {rota: 'livros', label: 'Livros'},
  {rota: 'produtos', label: 'Produtos'},
  {rota: 'produtos-contexto', label: 'ProdutosContextos'},
];
