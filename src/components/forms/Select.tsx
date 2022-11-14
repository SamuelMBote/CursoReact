import React from 'react';
import {setConstantValue} from 'typescript';
interface IPropriedades {
  id: string;
  label: string;
  options: {value: string; desc: string; selected?: boolean}[];
  value?: any;
  setValue?: React.ComponentState;
  required?: boolean;
  disabled?: boolean;
}
const Select = (props: IPropriedades) => {
  return (
    <div className="container">
      <select
        className="form-select"
        name={props.id}
        id={props.id}
        value={props.value}
        onChange={({target}) => {
          props.setValue(target.value);
        }}
        disabled={props.disabled}
        required={props.required}
      >
        <option value="" disabled selected>
          Selecione
        </option>
        {props.options.map((option, index) => {
          return (
            <option key={index} value={option.value} selected={option.selected}>
              {option.desc}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
