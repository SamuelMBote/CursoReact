import React from 'react';
import {ISlides} from '../interfaces/ISlides';

const Slide = (props: ISlides) => {
  const [active, setActive] = React.useState(0);
  const [position, setPosition] = React.useState(0);

  const contenteRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const {width}: any = contenteRef.current?.getBoundingClientRect();
    setPosition(-(width * active));
  }, [active]);

  function slidePrev() {
    if (active > 0) setActive(active - 1);
  }
  function slideNext() {
    if (active < props.slides.length - 1) setActive(active + 1);
  }

  return (
    <section className="slideReact ">
      <div
        ref={contenteRef}
        className="content"
        style={{transform: `translateX(${position}px)`}}
      >
        {props.slides.map((slide) => {
          return (
            <div key={slide.id} className="item">
              {slide.text}
            </div>
          );
        })}
      </div>
      <nav className="nav">
        <button className="btn btn-sm btn-primary" onClick={slidePrev}>
          Anterior
        </button>
        <button className="btn btn-primary btn-sm" onClick={slideNext}>
          Próximo
        </button>
      </nav>
    </section>
  );
};

export default Slide;
