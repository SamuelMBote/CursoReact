import React from 'react';
interface IPropriedades {
  value: any[];
  setValue: React.ComponentState;
  options: {id: string; label: string}[];
}
const Checkbox = (props: IPropriedades): JSX.Element => {
  function handleChange({target}: React.ChangeEvent<HTMLInputElement>) {
    if (target.checked) {
      props.setValue(...props.value, target.value);
    } else {
      console.log('not changeou', target.value);
    }
    console.log(props.value);
  }
  return (
    <React.Fragment>
      {props.options.map((option, index) => {
        return (
          <div className="form-check" key={index}>
            <input
              className="form-check-input"
              type="checkbox"
              value={option.id}
              id={option.id}
              onChange={handleChange}
              checked={props.value.includes(option.id)}
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

export default Checkbox;
