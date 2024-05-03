import React from 'react';
import ImagePerfil from '../../img/profile-img.jpg';
import Skill from '../../components/skill';
import Resume from '../../components/resume';

export const Sobre_mi = () => {
  return (
    <>
    <section id="about" className="about">
      <div className="container">

        <div className="section-title">
          <h2>Sobre Mí</h2>
          <p>Mi nombre es Cesar Castedo, un apasionado Ingeniero de Sistemas Full Stack especializado en desarrollo web y móvil. Me entusiasma la programación y constantemente busco expandir mis conocimientos y habilidades en nuevas tecnologías y métodos para ofrecer soluciones innovadoras y efectivas.</p>
        </div>

        <div className="row">
          <div className="col-lg-4" data-aos="fade-right">
            <img src={ImagePerfil} className="img-fluid" alt=""/>
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content title-profesion" data-aos="fade-left" style={{marginTop:'15px'}}>
            <h3>Desarollador Full-Stack</h3>
            <p className="fst-italic">
                Mis datos personales que me describen:
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Nacimiento:</strong> <span>30 Junio 2001</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.example.com</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Teléfono:</strong> <span>+591 76000898</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Ciudad:</strong> <span>Santa Cruz, Bolivia</span></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Edad:</strong> <span>22</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Grado:</strong> <span>Licenciatura</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>cesar.castedo1@gmail.com</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Desarollador:</strong> <span>Web y Móvil</span></li>
                </ul>
              </div>
            </div>
            <p className='txtCV'>
            Ingeniero en sistemas con sólida experiencia en el desarrollo full-stack. Destaco por mi capacidad para diseñar
            y desarrollar bases de datos, así como por mi habilidad en la gestión de sistemas informáticos. Poseo
            experiencia en la interacción directa con los clientes, participando activamente en reuniones para comprender
            sus necesidades y garantizar soluciones efectivas. Mi enfoque se centra en desarrollar soluciones eficientes y
            funcionales. Me caracterizo por mi proactividad y mi compromiso con la excelencia y la calidad en el desarrollo
            de proyectos.</p>

            
          </div>
        </div>

      </div>

    </section>

    <Resume />
    <Skill />
    
    

  </>
    
    

  )
}

export default Sobre_mi;