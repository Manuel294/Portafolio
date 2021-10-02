import React, { Fragment } from "react";
import './styles.css';
import {Link} from 'react-router-dom'


const Portafolio = () => {

    return(
        <Fragment>
    <canvas id="bg"></canvas>
    <main id="content" style={{"opacity": "1", "margin-top": "0px"}}>
            <Link to="/"> <a className="btn btn-primary" style={{'marginLeft': '-6rem', 'position': 'relative', 'float': 'left', 'zIndex': 1, 'marginBottom': '20px'}}>Volver</a></Link>
    <h1>
    <div ></div><span>Acerca de Manuel Buitrago </span></h1>
    <div  id="main">
    <p>Mi nombre es Manuel David Buitrago Sotelo, nací en Bogotá D.C en el 9 de febrero del 2004.</p>

    <p>Me encanta la tecnología, todo lo que tiene que ver con computadoras y videojuegos, desde pequeño quise aprender sobre la tecnología y 
        en grado Decimo se me dio la oportunidad de realizar un técnico de programación de software lo cual me emociono bastante y 
        a día de hoy sigo estudiando lo mismo y planeo algún día vivir de ello</p>

    </div>
    <h2>
    <div ></div><span>Habilidades</span></h2>
    <div >
    Buen conocimiento de la programación orientada a objetos y de las matemáticas relacionadas con la informática en general. Dominio de CSS3 y HTML5,
     y avances significativos en JavaScript, JQuery, php, conocimientos de larabel y dominio de lenguaje sql.  Actualmente sigo aprendiendo y planeo expandir mis conocimientos.
    </div>
    <h2>
    <div ></div><span>Hobbies &amp; Intereses</span></h2>
    <div >
    Como ya dije antes me encanta la tecnología, especialmente los videojuegos tanto en solitario como multijugador, solía dibujar bastante historietas aunque últimamente casi no lo hago,
     me encanta montar en bicicleta y me gusta mucho la industria del cine.
    </div>
    <h2>
    <div ></div><span>Trabajando actualmente</span></h2>
    <div >
    Para poder completar mi tecnólogo, tengo que entregar un proyecto implementando todo lo visto. Mi proyecto en particular trata sobre un sistema de información que actúa como un catálogo de productos,
     permitiendo a los usuarios poder realizar peticiones de trabajos, también sirve para administrar trabajos independientes y generar reportes (etc.).
    </div>
    <h2>
    <div ></div><span>Encuentrame</span></h2>
    <div >
    <a>Facebook</a>
    </div>
    <h2>
    <div ></div><span>Contacto</span></h2>
    <div>
    <ul>
    <li>Celular: 3178219163</li>
    <li>E-mail: <a>mdbuitrago87@misena.edu.com</a></li>
    <li>Discord: <a>Elpacman294#9960</a></li>
    </ul>
    </div>
    </main>
    <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="wave" id="one"><path d="M-13.36,88.98 C168.85,182.73 276.72,-73.84 506.31,79.10 L500.00,150.00 L0.00,150.00 Z"></path></svg>
    <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="wave" id="two"><path d="M-13.36,88.98 C168.85,182.73 276.72,-73.84 506.31,79.10 L500.00,150.00 L0.00,150.00 Z"></path></svg>
    <div id="hex-holder">
    <div className="hex" id="uno"></div>
    <div className="hex" id="dos"></div>
    <div className="hex" id="tres"></div>
    </div>
    
    
        </Fragment>
              
    );
 };
 export default Portafolio