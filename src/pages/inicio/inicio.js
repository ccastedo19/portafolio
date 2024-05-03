import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const Inicio = () => {
  const [typeEffect] = useTypewriter({
    words: ['Desarollador Full-Stack'],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40
  });

  return (
    <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
      <div className="hero-container" data-aos="fade-in">
        <h1>Cesar Castedo</h1>
        <p>Soy un <span className="typed">{typeEffect}</span>
        <span style={{color:'red',fontSize:'35px'}}>
          <Cursor cursorStyle="|" />
        </span>
        </p>
      </div>
    </section>
    
  );
};



export default Inicio;
