import React from 'react';
interface IPropriedades {
  desc: string;
  children?: any;
}
const Button = (props: IPropriedades) => {
  return <button className="btn btn-primary">{props.desc}</button>;
};

export default Button;
