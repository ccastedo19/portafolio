import React from 'react'


export const Resume = () => {
  return (
    <section id="resume" className="resume">
      <div className="container">
        <div className="section-title" style={{ paddingbottom: "5px" }}>
          <h2>Resumen</h2>
        </div>
        <div className="row">
          <div className="col-lg-6" data-aos="fade-up">
            <h3 className="resume-title">Perfil</h3>
            <div className="resume-item pb-0">
              <h4>Cesar Castedo Saucedo</h4>
              <p><em>Ingeniero de Sistemas con experiencia en el desarrollo Full-Stack y soporte técnico. Dominio de varias plataformas, lenguajes y frameworks. Experiencia en herramientas y procedimientos de desarrollo modernos. También cuento con conocimientos en redes, mantenimiento y reparación de equipos, instalación de sistemas y atención a usuarios. Mi enfoque se centra en desarrollar soluciones eficientes y funcionales. Buenas habilidades de colaboración dentro de un equipo productivo. </em></p>
              <ul>
                <li>Santa Cruz, Bolivia</li>
                <li>(+591) 76000898</li>
                <li>cesar.castedo1@gmail.com</li>
              </ul>
            </div>
            <h3 className="resume-title">Educación</h3>
            <div className="resume-item">
              <h4>Universidad para el desarrollo e innovación (UDI)</h4>
              <h5>2020 - 2025</h5>
              <p><em>Estudios concluidos de la carrera ingeniería de sistemas (Por titularme)</em></p>
              <p>He participado en la feria UDINOVA 2 años destacando mi proyecto "Sistema ERP" realizado con Php y SQL y mi proyecto automatizado de "Chat bot" con inteligencia artificial en python.</p>
            </div>
            <div className="resume-item">
              <h4>Instituto CEASS</h4>
              <h5>2022</h5>
              <p><em>Estudios concluidos en mantenimiento y ensamblado de computadoras.</em></p>
              <p>He adquirido conocimientos y habilidades en reparación de computadoras, instalacion de red, reparaciónde impresoras.</p>
            </div>
            <div className="resume-item">
              <h4>Colegio Espiritu Santo</h4>
              <h5>2019</h5>
              <p><em>Bachiller en humanidades</em></p>
              <p>En el colegio, desarrollé habilidades críticas y analíticas mediante cursos intensivos de programación.</p>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
            <h3 className="resume-title">Experiencia Profesional</h3>
            <div className="resume-item">
              <h4>Bolivia Impuestos</h4>
              <h5>Mayo 2025 - Freelance desde Julio 2025</h5>
              <p><em>Trabajo Presencial, Santa Cruz, Bo</em></p>
              <ul>
                <li>Brindé soporte técnico interno en infraestructura y equipos de la empresa, gestionando mantenimiento y resolución de incidencias.</li>
                <li>Soporte remoto a usuarios del sistema contable Nitro, incluyendo instalación, configuración y resolución de problemas.</li>
                <li>Asistí en la capacitación y atención de clientes para el uso adecuado del sistema.</li>
                <li>Colaboré en tareas de desarrollo en PHP para mejoras y mantenimiento del nuevo sistema Nitro.</li>
                <li>Actualmente realizo trabajos como freelancer en el desarrollo de nuevos plugins en el sistema Nitro.</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Jhimbo Importadora</h4>
              <h5>Sept 2024 - Abril 2025</h5>
              <p><em>Trabajo Presencial, Santa Cruz, Bo</em></p>
              <ul>
                <li>Desarrollo de un sistema de inventario utilizando C# y Blazor, trabajando tanto en el diseño de interfaces como en la lógica del backend.</li>
                <li>Participación en el desarrollo del sistema Hosming, desempeñando funciones como desarrollador front-end con React JS.</li>
                <li>Mantenimiento y mejora continua de los sistemas desarrollados, asegurando su rendimiento y estabilidad.</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>ElGenioX</h4>
              <h5>Nov 2023 - Feb 2024</h5>
              <p><em>Trabajo Híbrido, Santa Cruz, Bo</em></p>
              <ul>
                <li>Uso de la plataforma Shopify, abarcando diseño, desarrollo con JavaScript, manejo del lenguaje Liquid y uso de GitHub.</li>
                <li>Desarrollo de tiendas para diversas empresas, enfocado en el front-end.</li>
                <li>Contribuciones destacadas en ElgenioX: diseño de login, secciones de videos, sección de intereses, ajustes en la pasarela de pagos, ajustes mensajes de correo, consumos de Apis Rest.</li>
                <li>Participación en reuniones.</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>ABC Chile Consultora Geotécnica</h4>
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
