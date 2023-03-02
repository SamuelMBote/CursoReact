import React from 'react';
interface IPropriedades {
  title: string;
  description: string;
}
const Head = (props: IPropriedades) => {
  React.useEffect(() => {
    document.title = props.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', props.description);
  }, [props]);
  return <></>;
};

export default Head;
