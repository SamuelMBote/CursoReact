interface FotosProdutosBuscados {
  titulo: string;
  src: string;
}
export default interface ProdutosBuscados {
  descricao: string;
  fotos: FotosProdutosBuscados[];
  id: string;
  nome: string;
  preco: number;
  usuario_id: string;
  vendido: string;
}
