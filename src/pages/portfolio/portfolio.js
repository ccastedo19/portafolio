import React, { useState } from 'react';
import img1 from '../../img/portfolio-1.jpg';
import img2 from '../../img/portfolio-2.jpg';
import img3 from '../../img/portfolio-3.jpg';
import img4 from '../../img/portfolio-4.jpg';
import img5 from '../../img/portfolio-5.jpg';
import LogoHtml from '../../img/html-logo-1.png';
import LogoCss from '../../img/logo-css.png';
import LogoJS from '../../img/logo-js.png';
import LogoPhp from '../../img/logo-php.png';
import LogoShopify from '../../img/logo-shopify.png';
import LogoLaravel from '../../img/logo-laravel.png';
import LogoReact from '../../img/logo-react.png';
import LogoBoostrap2 from '../../img/logo-boostrap2.png';
import LogoSql from '../../img/logo-sql.png';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faLock } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export const Portfolio = () => {
  const [showModal, setShowModal] = useState(false);
  const [projectDetails, setProjectDetails] = useState({ title: "", description: "" });

  const projects = [
    {
      img: img1,
      title: "SISTEMA DE GESTIÓN ERP",
      description: "Sistema ERP para gestionamiento de empresas.",
      repositorio:[{variant:"dark", icon: faGithub, url: "https://github.com/ccastedo19/sistema_erp", name: "Github" }],
      technologies: [{img: LogoHtml}, {img: LogoCss }, {img: LogoJS }, {img: LogoBoostrap2}, {img: LogoPhp }, {img: LogoSql }],
      videoUrl: "https://www.youtube.com/embed/gYhVdLIlLQU?si=QW3EGd5pDyezW9BG",
      errorDisplay: "none"
      
    },
    {
      img: img2,
      title: "PLANTILLA PARA WEB",
      description: "Plantilla para uso de página web.",
      repositorio:[{variant:"dark", icon: faGithub, url: "https://github.com/ccastedo19/Prueba-BECA", name: "Github"}, {variant:"success", icon: faGlobe, url: "https://lan-page-beca.netlify.app/", name: "Demo"}],
      technologies: [{img: LogoHtml}, {img: LogoCss }, {img: LogoJS }],
      videoUrl: "https://www.youtube.com/embed/W_obeWxmGdY?si=nZsba5sgGSTwzgSX",
      errorDisplay: "none"
     
    },
    {
      img: img3,
      title: "SISTEMA DE ECOMMERCE",
      description: "Sistema ecommerce para la empresa Barracuda.",
      repositorio:[{variant:"danger", icon: faLock, url: "#", name: "Sin vista" }],
      technologies: [{img: LogoShopify}, {img: LogoHtml}, {img: LogoCss }, {img: LogoJS }],
      videoUrl: "https://www.youtube.com/embed/P3Z8ObUdXTE?si=IvUyQeThfEZhYMSk",
      errorDisplay: "none"
      
    },
    {
      img: img4,
      title: "PÁGINA PORTAFOLIO",
      description: "Página web de mi portafolio.",
      repositorio:[{variant:"dark", icon: faGithub, url: "https://github.com/ccastedo19/portafolio", name: "Github" }],
      technologies: [{img: LogoReact}, {img: LogoHtml}, {img: LogoCss }, {img: LogoJS }],
      videoUrl: "https://www.youtube.com/embed/9VYL3mFKJZo?si=Yy3mZA59BebRRsHG",
      errorDisplay: "none"
      

    },
    { 
      img: img5,
      title: "SISTEMA BIBLIOTECARIO",
      description: "Sistema Bibliotecario para el uso de reservas de libros.",
      repositorio:[{variant:"dark", icon: faGithub, url: "https://github.com/ccastedo19/sistema_bibliotecario", name: "Github" }],
      technologies: [{img: LogoLaravel}, {img: LogoHtml}, {img: LogoCss }, {img: LogoJS }, {img: LogoBoostrap2}, {img: LogoSql }],
      videoUrl: "https://www.youtube.com/embed/gcTMy7OUCxo?si=c2bdPOZ0BAM6tBWZ",
      // textNoValid: "Video no disponible",
      errorDisplay: "block"
      
    }
  ];

  const handleShowModal = (project) => {
    setProjectDetails(project);
    setShowModal(true);
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    if (mobileNavToggle) {
      mobileNavToggle.classList.add('d-none');
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    if (mobileNavToggle) {
      mobileNavToggle.classList.remove('d-none');
    }
  };

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="section-title">
          <h2>Portafolio</h2>
          <p>Explora mis proyectos que destacan mi experiencia y habilidades.</p>
        </div>
        <div className="row portfolio-container">
          {projects.map((project, index) => (
            <div key={index} className="col-lg-4 col-md-6 portfolio-item">
              <div style={{cursor: 'pointer'}} className="portfolio-wrap" onClick={() => handleShowModal(project)}>
                <img src={project.img} className="img-fluid" alt={`portfolio-${index}`} />
                <div className='portfolio-title'>
                  <span>{project.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Modal */}
        <Modal show={showModal} onHide={handleCloseModal} size="lg" centered>
          <Modal.Header closeButton>
            <Modal.Title>{projectDetails.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="container-fluid">
              <div className="row">
              <div className="col-md-8">
              <p style={{ display: projectDetails.errorDisplay }}>{projectDetails.textNoValid}</p>
              <iframe 
                title={`Video de ${projectDetails.title}`}
                src={projectDetails.videoUrl}
                width="100%"
                height="350px"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
              </iframe>
              </div>
                <div className="col-md-4">
                  <div className='seccion-modal'>
                    <h4 id="title-modal">Repositorio</h4>
                    <div className='logo-rep-modal'>
                      {projectDetails.repositorio?.map((rep, index) => (
                        <Button target='_blank' variant={rep.variant} href={rep.url}>
                          <FontAwesomeIcon icon={rep.icon} size='lg' /><span style={{paddingLeft:"5px"}}>{rep.name}</span>
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div className='seccion-modal'>
                    <h4 id="title-modal">Tecnologías</h4>
                    <div className='logos-tec-modal'>
                      {projectDetails.technologies?.map((tech, index) => (
                        <img style={{width:"40px"}} src={tech.img} alt="imgLogo" />
                      ))}
                    </div>
                  </div>
                  <div className='seccion-modal'>
                    
                    <h4 id="title-modal">Descripción</h4>
                    <p id="descripcion-modal">{projectDetails.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>

      </div>
    </section>
  );
}

export default Portfolio;