import React from 'react';
interface IPropriedades {
  name: string;
  value: any;
  setValue: React.ComponentState;
  options: {
    id: string;
    label: string;
  }[];
}
const Radio = (props: IPropriedades) => {
  return (
    <React.Fragment>
      {props.options.map((option, index) => {
        return (
          <div className="form-check" key={index}>
            <input
              className="form-check-input"
              type="radio"
              name={props.name}
              id={option.id}
              value={option.id}
              onChange={({target}) => {
                props.setValue(target.value);
              }}
              checked={props.value === option.id ? true : false}
            />

            <label className="form-check-label" htmlFor={option.id}>
              {option.label}
            </label>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default Radio;
