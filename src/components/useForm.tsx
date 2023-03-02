import React from 'react';

interface types {
  cep: {
    regex: RegExp;
    message: string;
  };
  cpf: {
    regex: RegExp;
    message: string;
  };
}
const validadores: types = {
  cep: {
    regex: /^\d{5}-?\d{3}$/,
    message: 'Preencha um CEP Válido',
  },
  cpf: {
    regex: /^$/,
    message: '',
  },
};

const useForm = (type: keyof types | false) => {
  const [value, setValue] = React.useState<string>('');
  const [error, setError] = React.useState<string | null>(null);

  function validate(value: string) {
    if (type === false) return true;
    else if (value.length === 0) {
      setError('Preencha um valor');
      return false;
    } else if (
      type &&
      validadores[type] &&
      !validadores[type].regex.test(value)
    ) {
      setError(type && validadores[type] && validadores[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function onChange(event: React.FormEvent<HTMLInputElement>) {
    if (event && event.target instanceof HTMLInputElement) {
      if (error) validate(event.target.value);
      setValue(event.target.value);
    }
  }

  return {
    value,
    setValue,
    error,
    onChange,
    onBlur: () => validate(value),
    validate: () => validate(value),
  };
};

export default useForm;
