import React from 'react';

const useFetch = () => {
  const [data, setData] = React.useState<any | null>(null);
  const [error, setError] = React.useState<Error | null>(null);
  const [loading, setLoading] = React.useState<boolean | null>(null);

  const request = React.useCallback(async (url: string, options?: object) => {
    let response;
    let json;
    try {
      setError(null);
      setLoading(true);
      response = await fetch(url, options);
      json = await response.json();
    } catch (error) {
      json = null;
      setError(error as any);
    } finally {
      setData(json);
      setLoading(false);
      return {response, json};
    }
  }, []);

  return {data, error, loading, request};
};

export default useFetch;
