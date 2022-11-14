import React from 'react';
import useFetch from '../hooks/useFetch';
import ProdutosBuscados from '../interfaces/IProdutosBuscados';

const TesteUseFetch = () => {
  const {request, data, loading, error} = useFetch();
  React.useEffect(() => {
    async function fetchData() {
      const {response, json} = await request(
        'https://ranekapi.origamid.dev/json/api/produto',
      );
    }
    fetchData();
  }, [request]);
  if (error)
    return (
      <div className="container my-5">
        <p>{error.message}</p>
      </div>
    );

  if (loading)
    return (
      <div className="container">
        <p>Carregando...</p>
      </div>
    );
  if (data) {
    console.log(typeof data);
  }
  if (data)
    return (
      <div className="container my-3">
        {data.map((produto: ProdutosBuscados) => {
          return (
            <div key={produto.id}>
              <h1>{produto.nome}</h1>
            </div>
          );
        })}
      </div>
    );
  else return null;
};

export default TesteUseFetch;
