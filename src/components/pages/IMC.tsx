import React from 'react';
import CalculoIMC from '../CalculoIMC';
import Checkbox from '../forms/Checkbox';

const IMC = () => {
  const [linguagens, setLinguagens] = React.useState([]);
  return (
    <div>
      <CalculoIMC />
      <div className="container">
        <Checkbox
          options={[
            {id: 'javascript', label: 'Javascript'},
            {id: 'typescript', label: 'Typescript'},
            {id: 'css', label: 'CSS'},
            {id: 'html', label: 'HTML'},
          ]}
          value={linguagens}
          setValue={setLinguagens}
        />
      </div>
    </div>
  );
};

export default IMC;
