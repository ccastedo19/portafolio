import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import fotoPerfil from './img/foto-de-perfil-para-portafolio.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import './App.css';
//import { useLocation } from 'react-router-dom';
import { faFile, faHome, faMessage, faUser, faBars, faX, faMedal } from '@fortawesome/free-solid-svg-icons';
/*import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';*/
import Inicio from './pages/inicio/inicio';
import Portfolio from './pages/portfolio/portfolio';
import SobreMi from './pages/sobre_mi/sobre_mi';
import Contacto from './pages/contacto/contacto';


function MainNavigation() {
  //const location = useLocation();
  //const currentPath = location.pathname;
  const [color, setColor] = useState('#a8a9b4'); 

  const cambiarColor = () => {
    setColor('#a8a9b4'); // para no cambiar de color por el boostrap al hacer click
  };

  return (
    <Nav defaultActiveKey="/" className="flex-column" style={{display:'flex',flexDirection:'column',gap:'20px',marginTop:'20px'}}>
      <Nav.Item>
        <Nav.Link className='txt-nav'  href="#hero" onClick={cambiarColor} style={{color: color, fontSize:'18px'}}>
          <FontAwesomeIcon className='icon-nav' icon={faHome} style={{ fontSize: '18px', marginRight: '20px', marginBottom:'1px' }} />
          Inicio
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className='txt-nav'  href="#about" onClick={cambiarColor} style={{color: color, fontSize:'18px'}}>
          <FontAwesomeIcon className='icon-nav' icon={faUser} style={{ fontSize: '18px', marginRight: '25px', marginBottom:'1px' }} />
          Sobre mí
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className='txt-nav'  href="#skills" onClick={cambiarColor} style={{color: color, fontSize:'18px'}}>
          <FontAwesomeIcon className='icon-nav' icon={faMedal} style={{ fontSize: '18px', marginRight: '23px', marginBottom:'1px' }} />
          Habilidades
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className='txt-nav'  href="#portfolio" onClick={cambiarColor} style={{color: color, fontSize:'18px'}}>
          <FontAwesomeIcon className='icon-nav' icon={faFile} style={{ fontSize: '18px', marginRight: '27px', marginBottom:'1px' }} />
          Portafolio
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className='txt-nav'  href="#contact" onClick={cambiarColor} style={{color: color, fontSize:'18px'}}>
          <FontAwesomeIcon className='icon-nav' icon={faMessage} style={{ fontSize: '18px', marginRight: '24px', marginBottom:'0px' }} />
          Contáctame
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

function App() {
  const [isMobileNavActive, setMobileNavActive] = useState(false);
  const headerRef = useRef(null);

  const toggleMobileNav = () => {
    if (isMobileNavActive) {
        setMobileNavActive(false);
    } else {
        setMobileNavActive(true);
    }
  };


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileNavActive && headerRef.current && !headerRef.current.contains(event.target) && !event.target.closest('.mobile-nav-toggle')) {
          setMobileNavActive(false);
      }
  };
  
  
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileNavActive]); 
  
  return (
      <div className={`App ${isMobileNavActive ? 'mobile-nav-active' : ''}`}>
        <div className="mobile-nav-toggle d-xl-none" onClick={toggleMobileNav} style={{ zIndex: 10000 }}>
          <FontAwesomeIcon icon={isMobileNavActive ? faX: faBars} style={{ width: '15px' }} />
        </div>
        <header id="header" ref={headerRef}>
          <div className="d-flex flex-column">
            <div className="profile">
              <img src={fotoPerfil} alt="foto de perfil" className="img-fluid rounded-circle" />
              <h1 className="text-light">Cesar Castedo</h1>
              <div className="social-links mt-3 text-center">
                <a target='_blank' rel="noreferrer" href="https://github.com/ccastedo19" className="twitter"><FontAwesomeIcon icon={faGithub} /></a>
                <a target='_blank' rel="noreferrer" href="https://www.facebook.com/CesarCastedoS" className="facebook"><FontAwesomeIcon icon={faFacebook} /></a>
                <a target='_blank' rel="noreferrer" href="https://www.instagram.com/alecastedo2/" className="instagram"><FontAwesomeIcon icon={faInstagram} /></a>
                <a target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/cesar-castedo-saucedo-823b51284/" className="linkedin"><FontAwesomeIcon icon={faLinkedin} /></a>
              </div>
            </div>
            <div className="container-nav">
              <MainNavigation />
            </div>
          </div>
        </header>

        <Inicio />
        <SobreMi />
        <Portfolio />
        <Contacto />
      
      </div>
    
  );
}


export default App;
