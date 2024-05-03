import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare, faEnvelope, faPhone, faCopy } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

export const Contacto = () => {

  const notificacionCopy = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => alert("Texto copiado al portapapeles!")) 
      .catch(err => alert("Error al copiar texto: ", err));
  }

  return (
    <section id="contact" className="contact section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Contáctame</h2>
          <p>Para obtener más información, no dude en comunicarse conmigo a través de los siguientes canales:</p>
        </div>
        <div className="row" data-aos="fade-in">
          <div className="col-lg-5 d-flex align-items-stretch">
            <div className="info">

              <div className="email">
                <i className="bi bi-envelope"><FontAwesomeIcon icon={faEnvelope} style={{ width: '20px' }} /></i>
                <h4>Email:</h4>
                <p>cesar.castedo1@gmail.com <FontAwesomeIcon icon={faCopy} style={{ width: '15px', color: '#37b3ed', cursor:'pointer' }} onClick={() => notificacionCopy('cesar.castedo1@gmail.com')} /></p>
              </div>

              <div className="phone">
                <i className="bi bi-phone"><FontAwesomeIcon icon={faPhone} style={{ width: '18px' }}/></i>
                <h4>WhatsApp</h4>
                <p>+591 76000898 <a target='_blank' rel="noreferrer" href='https://wa.link/hy8x29'><FontAwesomeIcon style={{ width: '12px' }} icon={faUpRightFromSquare} /></a></p>
              </div>
              
              <div className="phone">
                <i className="bi bi-phone"><FontAwesomeIcon icon={faLinkedin} style={{ width: '20px' }}/></i>
                <h4>LinkedIn</h4>
                <p>Cesar Castedo Saucedo <a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/cesar-castedo-saucedo-823b51284/'><FontAwesomeIcon style={{ width: '12px' }} icon={faUpRightFromSquare} /></a> </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacto;
