import React from 'react';
import img1 from '../../img/portfolio-1.jpg';
import img2 from '../../img/portfolio-2.jpg';
import img3 from '../../img/portfolio-3.jpg';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

export const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio">
      <div className="container">

        <div className="section-title">
          <h2>Portafolio</h2>
          <p>Explora mis proyectos que destaca mi experiencia y habilidades.</p>

        </div>


        <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="100">

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src={img1} className="img-fluid" alt="portfolio1"/>
              <div className="portfolio-links">
                <p style={{fontSize:'18px', color:'white',textAlign:'center', width:'85%', position:'relative',top:'20px'}}>Desarollo de un sistema ERP (PHP, SQL, Api Rest)</p>
                <Button style={{fontWeight:'600', position:'relative',top:'35px'}} variant='danger'>Ver Proyecto <FontAwesomeIcon style={{width:'15px'}} icon={faUpRightFromSquare}/> </Button>
              </div>
            </div>
            <div className='portfolio-title'>
              <span>SISTEMA DE GESTIÓN ERP</span>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src={img2} className="img-fluid" alt="portfolio1"/>
              <div className="portfolio-links">
                <p style={{fontSize:'18px', color:'white',textAlign:'center', width:'85%', position:'relative',top:'20px'}}> Creación
                 de plantilla elaborada desde un mockup (HTML, CSS, JavaScript)</p>
                <Button style={{fontWeight:'600', position:'relative',top:'35px'}} variant='danger'>Ver Proyecto <FontAwesomeIcon style={{width:'15px'}} icon={faUpRightFromSquare}/> </Button>
              </div>
            </div>
            <div className='portfolio-title'>
              <span>PLANTILLA PARA WEB</span>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src={img3} className="img-fluid" alt="portfolio1"/>
              <div className="portfolio-links">
                <p style={{fontSize:'18px', color:'white',textAlign:'center', width:'85%', position:'relative',top:'20px'}}>Desarollo de sistema ecommerce para Barracuda (Shopify)</p>
                <Button style={{fontWeight:'600', position:'relative',top:'35px'}} variant='danger'>Ver Proyecto <FontAwesomeIcon style={{width:'15px'}} icon={faUpRightFromSquare}/> </Button>
              </div>
            </div>
            <div className='portfolio-title'>
              <span>SISTEMA DE ECOMMERCE</span>
            </div>
          </div>

          

        </div>

      </div>
    </section>
  )
}

export default Portfolio;