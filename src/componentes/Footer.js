import React from 'react';
import './Footer.css';
import rodape from '../componentes/img/rodape.png';

function Footer () {
    return (
<>
<div className='container'>

<div class="footerClass">
      
      <div className="FlexFooter"></div>
      <div className="FlexFooter">
      <img src={rodape}  alt=""/>
      </div>
      <div className="FlexFooter"></div>
    
    </div>
    </div>
</>
    );
}

export default Footer;