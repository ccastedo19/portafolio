import React from 'react'


export const Resume = () => {
  return (
    <section id="resume" class="resume">
      <div class="container">

        <div class="section-title" style={{paddingBottom:'5px'}}>
          <h2>Resumen</h2>
        </div>

        <div class="row">
          <div class="col-lg-6" data-aos="fade-up">
            <h3 class="resume-title">Perfil</h3>
            <div class="resume-item pb-0">
              <h4>Cesar Castedo Saucedo</h4>
              <p><em>Ingeniero de sistemas con experiencia 1+ año en el ámbito de desarollador Full-Stack enfocado en la entrega de soluciones  y mi compromiso con la excelente calidad en mis proyectos. </em></p>
              <ul>
                <li>Santa Cruz, Bolivia</li>
                <li>(+591) 76000898</li>
                <li>cesar.castedo1@gmail.com</li>
              </ul>
            </div>

            <h3 class="resume-title">Educación</h3>
            <div class="resume-item">
              <h4>Universidad para el desarrollo e innovación (UDI)</h4>
              <h5>2020 - Presente</h5>
              <p><em>Estudiante de la carrera de ingenieria de sistemas</em></p>
              <p>He participado en la feria UDINOVA 2 años destacando mi proyecto "Sistema ERP" realizado con Php y SQL y mi proyecto automatizado de "Chat bot" con inteligencia artificial en python.</p>
            </div>
            <div class="resume-item">
              <h4>Colegio Espiritu Santo</h4>
              <h5>2019</h5>
              <p><em>Bachiller en humanidades</em></p>
              <p>En el colegio, desarrollé habilidades críticas y analíticas mediante cursos intensivos de programación.</p>
            </div>
          </div>
          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 class="resume-title">Experiencia Profesional</h3>
            <div class="resume-item">
              <h4>ElGenioX </h4>
              <h5>Nov 2023 - Feb 2024</h5>
              <p><em>Trabajo Híbrido, Santa Cruz, Bo </em></p>
              <ul>
                <li>Uso de la plataforma Shopify, abarcando diseño, desarrollo con JavaScript, manejo del lenguaje Liquid y uso de GitHub.</li>
                <li>Desarrollo de tiendas para diversas empresas, enfocado en el front-end.</li>
                <li>Contribuciones destacadas en ElgenioX: diseño de login, secciones de videos, sección de intereses, ajustes en la pasarela de pagos, ajustes mensajes de correo, consumos de Apis Rest.</li>
                <li>Participación en reuniones.</li>
              </ul>
            </div>
            <div class="resume-item">
              <h4>ABC Chile Consultora Geotécnica   </h4>
              <h5>Abril 2023 - Nov 2023</h5>
              <p><em>Trabajo Presencial, Santa Cruz, Bo</em></p>
              <ul>
                <li>Implementación de estrategias SEO utilizando Menterprise.</li>
                <li>Diseñé las páginas web utilizando la plantilla MPUP con HTML, CSS, JavaScript.</li>
                <li>Desarrollo y gestión de APIs Rest en GitHub, utilizadas para consumir contenido en las páginas web a través de JavaScript.</li>
                <li>Utilicé inteligencia artificial para la generación de contenido en las páginas web</li>
                <li>Creación de herramientas automatizadas con Python.</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>

  )
}

export default Resume;
