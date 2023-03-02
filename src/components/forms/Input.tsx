import React from 'react';

interface IPropriedades {
  label: string;
  type: string;
  id: string;
  value?: any;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  onChange?: Function;
  onBlur?: Function;
}

const Input = ({
  label,
  type,
  id,
  value,
  placeholder,
  required,
  disabled,
  onChange,
  onBlur,
  error,
}: {
  label: string;
  type: string;
  id: string;
  value?: any;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  onChange?: Function;
  onBlur?: Function;
  error: string | null;
}) => {
  return (
    <div className="mb-3">
      <label htmlFor={id}>{label}</label>
      <input
        className="form-control"
        id={id}
        name={id}
        onChange={(Event: React.FocusEvent<HTMLInputElement>) => {
          if (onChange && onChange instanceof Function) onChange(Event);
        }}
        placeholder={placeholder}
        onBlur={(Event: React.FocusEvent<HTMLInputElement>) => {
          if (onBlur && onBlur instanceof Function) onBlur(Event);
        }}
        type={type}
        value={value}
        autoComplete={type === 'password' ? 'on' : 'off'}
        required={required}
        disabled={disabled}
      />
      {error && <p>{error}</p>}
    </div>
  );
};

export default Input;
