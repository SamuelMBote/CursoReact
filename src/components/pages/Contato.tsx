import React, {FocusEvent} from 'react';
import Form from '../forms/Form';
import Checkbox from '../forms/Checkbox';

const Contato = () => {
  const [linguagens, setLinguagens] = React.useState<string[]>([]);

  return (
    <div className="container">
      <Form />
      <Checkbox
        options={[
          {id: 'ts', label: 'TypeScript'},
          {id: 'js', label: 'JavaScript'},
          {id: 'csharp', label: 'C#'},
        ]}
        value={linguagens}
        setValue={setLinguagens}
      />
    </div>
  );
};

export default Contato;
