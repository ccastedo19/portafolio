import React, { useState } from 'react';
import LogoHtml from '../../src/img/html-logo-1.png';
import LogoCss from '../../src/img/logo-css.png';
import LogoJS from '../../src/img/logo-js.png';
import LogoPhp from '../../src/img/logo-php.png';
import LogoPython from '../../src/img/logo-python.png';
import LogoCsharp from '../../src/img/logo-csharp.png';
import LogoShopify from '../../src/img/logo-shopify.png';
import LogoLaravel from '../../src/img/logo-laravel.png';
import LogoReact from '../../src/img/logo-react.png';
import LogoSql from '../../src/img/logo-sql.png';
import LogoPostgres from '../../src/img/logo-postgres.png';
import LogoPhpmyadmin from '../../src/img/logo-phpmyadmin.png';
import LogoNet from '../../src/img/logo-net.png'
import LogoFlutter from '../../src/img/logo-flutter.png';
import LogoFirebase from '../../src/img/logo-firebase.png';
import LogoBoostrap from '../../src/img/logo-boostrap.png';
import LogoBoostrap2 from '../../src/img/logo-boostrap2.png';
import LogoGithub from '../../src/img/logo-github.png';
import LogoGit from '../../src/img/logo-git.png';
import LogoMaterialize from '../../src/img/logo-materialize.png';
import LogoNode from '../../src/img/logo-node.png';
import LogoNpm from '../../src/img/logo-npm.png';
import LogoUi from '../../src/img/logo-ui.png';
import LogoBlazor from '../../src/img/logo-blazor.png';
import Button from 'react-bootstrap/Button';

export const Skill = () => {
  const [filter, setFilter] = useState('tec'); 

  const handleFilterClick = (filterValue) => {
    setFilter(filterValue); 
  };
  
  return (
    <section id="skills" className="skills section-bg">
      <div className="container">

        <div className="section-title">
          <h2>Habilidades</h2>
          <p>Esta página ha sido creada con <Button className='btn-skill' style={{cursor:'pointer',position:'relative',bottom:'5px'}} variant='dark'>React JS <img style={{width:'22px',height:'19px'}} src={LogoReact} alt='logoReact'/></Button> <Button className='btn-skill' style={{color:'#fff',position:'relative',bottom:'5px'}} variant='success'>Bootstrap <img style={{width:'22px',height:'19px'}} src={LogoBoostrap} alt='LogoBoostrap'/> </Button> </p>
          <p className='txtRelleno' style={{marginTop:'15px',marginBottom:'10px'}}>Explora mi diversa gama de habilidades técnicas y creativas, en las cuales destaco en cada una de ellas.</p>
        </div>

        <div className='container-agrupador'> 
          <div className="btn-group" role="group" aria-label="Filtros">
            <button style={{fontWeight:'700',letterSpacing:'1px',padding:'10px'}} type="button" className={`btn ${filter === 'tec' ? 'btn-primary' : 'btn-secondary'}`} onClick={() => handleFilterClick('tec')}>
              TECNOLOGÍAS
            </button>
            <button style={{fontWeight:'700',letterSpacing:'1px',padding:'10px'}} type="button" className={`btn ${filter === 'tools' ? 'btn-primary' : 'btn-secondary'}`} onClick={() => handleFilterClick('tools')}>
              HERRAMIENTAS
            </button>
          </div>
        </div>
        

        <div className='contentSkill'>

          {filter === 'tec' && (
            <div className='container-tec'>
              <div className={`Logo-Skill ${filter === 'tec' ? '' : 'hidden'}`} id="tec">
                <img style={{width:'100px'}} src={LogoHtml} alt='LogoHtml' />
                <span>HTML</span>
              </div>
              <div className={`Logo-Skill ${filter === 'tec' ? '' : 'hidden'}`} id="tec">
                <img style={{width:'100px'}} src={LogoCss} alt='LogoCss' />
                <span>CSS</span>
              </div>
              <div className={`Logo-Skill ${filter === 'tec' ? '' : 'hidden'}`} id="tec">
                <img style={{width:'100px'}} src={LogoJS} alt='LogoJS' />
                <span>JavaScript</span>
              </div>

              <div className={`Logo-Skill ${filter === 'tec' ? '' : 'hidden'}`} id="tec">
                <img style={{width:'100px'}} src={LogoPhp} alt='LogoPhp' />
                <span>PHP</span>
              </div>

              <div className={`Logo-Skill ${filter === 'tec' ? '' : 'hidden'}`} id="tec">
                <img style={{width:'100px'}} src={LogoPython} alt='LogoPython' />
                <span>Python</span>
              </div>

              <div className={`Logo-Skill ${filter === 'tec' ? '' : 'hidden'}`} id="tec">
                <img style={{width:'100px'}} src={LogoCsharp} alt='LogoCsharp' />
                <span>C#</span>
              </div>

              <div className={`Logo-Skill ${filter === 'tec' ? '' : 'hidden'}`} id="tec">
                <img style={{width:'100px'}} src={LogoLaravel} alt='LogoLaravel' />
                <span>Laravel</span>
              </div>

              <div className={`Logo-Skill ${filter === 'tec' ? '' : 'hidden'}`} id="tec">
                <img style={{width:'100px'}} src={LogoFlutter} alt='LogoLaravel' />
                <span>Flutter</span>
              </div>

              <div className={`Logo-Skill ${filter === 'tec' ? '' : 'hidden'}`} id="tec">
                <img style={{width:'100px'}} src={LogoReact} alt='LogoReact' />
                <span>React JS</span>
              </div>

              <div className={`Logo-Skill ${filter === 'tec' ? '' : 'hidden'}`} id="tec">
                <img style={{width:'100px'}} src={LogoNet} alt='LogoNet' />
                <span>.Net Core</span>
              </div>

              <div className={`Logo-Skill ${filter === 'tec' ? '' : 'hidden'}`} id="tec">
                <img style={{width:'100px'}} src={LogoShopify} alt='LogoShopify' />
                <span>Shopify</span>
              </div>

              <div className={`Logo-Skill ${filter === 'tec' ? '' : 'hidden'}`} id="tec">
                <img style={{width:'100px'}} src={LogoSql} alt='LogoSql' />
                <span>SQL Server</span>
              </div>

              <div className={`Logo-Skill ${filter === 'tec' ? '' : 'hidden'}`} id="tec">
                <img style={{width:'100px'}} src={LogoPostgres} alt='LogoPostgres' />
                <span>Postgre SQL</span>
              </div>

              <div className={`Logo-Skill ${filter === 'tec' ? '' : 'hidden'}`} id="tec">
                <img style={{width:'100px'}} src={LogoFirebase} alt='LogoFirebase' />
                <span>Firebase</span>
              </div>

              <div className='Logo-Skill ultimo-logo' id="tec">
                <img style={{width:'100px'}} src={LogoPhpmyadmin} alt='LogoPhpmyadmin' />
                <span>PhpMyAdmin</span>
              </div>

              <div className="Logo-Skill espacio" id="tools">
                <img style={{width:'100px'}} src={LogoMaterialize} alt='LogoMaterialize' />
                <span>Materialize</span>
              </div>

            </div>
          )}
          
          {filter === 'tools' && (
              <div className='containerTools'>
                <div className={`Logo-Skill ${filter === 'tools' ? '' : 'hidden'}`} id="tools">
                  <img style={{width:'100px'}} src={LogoGit} alt='LogoGit' />
                <span>Git</span>
              </div>

              <div className={`Logo-Skill ${filter === 'tools' ? '' : 'hidden'}`} id="tools">
                <img style={{width:'100px'}} src={LogoNode} alt='LogoNode' />
                <span>Node JS</span>
              </div>

              <div className={`Logo-Skill ${filter === 'tools' ? '' : 'hidden'}`} id="tools">
                <img style={{width:'100px'}} src={LogoGithub} alt='LogoGithub' />
                <span>Github</span>
              </div>

              <div className={`Logo-Skill ${filter === 'tools' ? '' : 'hidden'}`} id="tools">
                <img style={{width:'100px'}} src={LogoNpm} alt='LogoNpm' />
                <span>NPM</span>
              </div>

              <div className={`Logo-Skill ${filter === 'tools' ? '' : 'hidden'}`} id="tools">
                <img style={{width:'100px'}} src={LogoBlazor} alt='LogoBlazor' />
                <span>Blazor</span>
              </div>

              <div className={`Logo-Skill ${filter === 'tools' ? '' : 'hidden'}`} id="tools">
                <img style={{width:'100px'}} src={LogoBoostrap2} alt='LogoBoostrap2' />
                <span>Bootstrap</span>
              </div>

              <div className={`Logo-Skill ${filter === 'tools' ? '' : 'hidden'}`} id="tools">
                <img style={{width:'100px'}} src={LogoUi} alt='LogoUi' />
                <span>Material ui</span>
              </div>

              <div className={`Logo-Skill ${filter === 'tools' ? '' : 'hidden'}`} id="tools">
                <img style={{width:'100px'}} src={LogoMaterialize} alt='LogoMaterialize' />
                <span>Materialize</span>
              </div>

              {/*<div className="Logo-Skill espacio" id="tools">
                <img style={{width:'100px'}} src={LogoMaterialize} alt='LogoMaterialize' />
                <span>Materialize</span>
              </div>*/}

          </div>
          )}
          

          

        </div>

          

  

      </div>
    </section>
  )
}

export default Skill;