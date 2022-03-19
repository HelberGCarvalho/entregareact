import React from 'react';

import './Body.css';

import rio from '../componentes/img/Rio.png';
import bahia from '../componentes/img/Bh.png';
import foz from '../componentes/img/Foz.png';
import nordeste from '../componentes/img/Nordeste.png';
import sp from '../componentes/img/Sp.png';
import planejar from '../componentes/img/planejar.png';

function Home() {
    return (
<>

        <div className='container'>

     <header className="content">
        
      <div className="slides">
           <input type="radio" name="slide" id="slide1" checked />
           <input type="radio" name="slide" id="slide2"/>
           <input type="radio" name="slide" id="slide3" />
           <input type="radio" name="slide" id="slide4" />
           <input type="radio" name="slide" id="slide5" />
       
       <div className="slide s1">
           <img src={rio} alt="Paisagem Rio de Janeiro" />
       </div>  
       <div className="slide">
           <img src={bahia} alt="Uma Rua na Bhaia" />
       </div>
       <div className="slide">
           <img src={foz} alt="Cataratas di Iguaçu"/>
       </div>
       <div className="slide">
           <img src={nordeste} alt="Uma Praia"/>
       </div>
       <div className="slide">
           <img src={sp} alt="Masp. São Paulo"/>
       </div>
         
       </div>

       <div className="navigation">
           <label class="bar" for="slide1"></label>
           <label class="bar" for="slide2"></label>
           <label class="bar" for="slide3"></label>
           <label class="bar" for="slide4"></label>
           <label class="bar" for="slide5"></label>
       </div>



       

   </header>
    
   
    
    <section className="secDois">

      <div className="divSecDois-um">

      <div className="planeje">
        <img src={planejar} alt=""/>
        <button class="plan"><a href='https://www.melhoresdestinos.com.br/como-planejar-uma-viagem.html'>Saiba mais</a></button>
      </div>

      </div>
      <div className="divSecDois-dois">

        <div className=''>

            

        </div>

      </div>

    </section>

    </div>

</>
);

}

export default Home;