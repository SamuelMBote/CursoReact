import React from 'react';
import Slide from '../Slide';
import {ISlide} from '../../interfaces/ISlides';
import Imagens from '../Imagens';
const slides: ISlide[] = [
  {id: 'slide1', text: 'Slide 1'},
  {id: 'slide2', text: 'Slide 2'},
  {id: 'slide3', text: 'Slide 3'},
];
const Animacoes = () => {
  return (
    <div className="container">
      <Slide slides={slides} />
      <Imagens />
    </div>
  );
};

export default Animacoes;
