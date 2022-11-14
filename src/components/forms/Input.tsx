import React from 'react';

interface IPropriedades {
  label: string;
  type: string;
  id: string;
  value?: any;
  placeholder?: string;
  setValue?: React.ComponentState;
  required?: boolean;
  disabled?: boolean;
}

const Input = (props: IPropriedades) => {
  return (
    <div className="mb-3">
      <label htmlFor={props.label.toLowerCase()}>{props.label}</label>
      <input
        placeholder={props.placeholder}
        id={props.label.toLowerCase()}
        type={props.type}
        value={props.value}
        onChange={({target}) => {
          props.setValue(target.value);
        }}
        autoComplete={props.type === 'password' ? 'on' : 'off'}
        className="form-control"
        required={props.required}
        disabled={props.disabled}
      />
    </div>
  );
};

export default Input;
