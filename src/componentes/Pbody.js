import React from 'react';
import eco from '../componentes/img/ecoturismo.png';
import './Pbody.css';


function Pbody() {
     return (
<>

<div className='container'>


<header className="header_Promocao">

        <div className="foto_eco">
            <img src={eco} alt="Eco turismo"/>
        </div>
    
    </header>


    
    <section className="secUm">

        <div className="divSecUm-um">
          
          <div className="contentpromo">
              <div className="card">
                <div className="topCard">
                  <h2 className="title"></h2>
                  <span className="secondText"></span>
               </div>
               
               <div className="mediaCard5"></div>
               <div className="bottomCard2">
                   <h2 id="ecotext"> <strong>Oferta!! Eco Turismo no Jalapão</strong> </h2>
                   <span className="bottomText"><br/>
                       <strong> <h3>Oferta de 10x sem juros!</h3></strong>
                   </span>
                   <div className="actionCards">
                       <button className="actions2">Confira</button>
         
                   </div>
                 </div>
              </div>
         
            </div>
        </div>
        
        <div className="divSecUm-dois">
          
          <div className="contentpromo">
              <div className="card">
                <div className="topCard">
                  <h2 className="title"></h2>
                  <span className="secondText"></span>
               </div>
               
               <div className="mediaCard6"></div>
               <div className="bottomCard2">
                   <h2 id="ecotext"> <strong>Promoção!!! Pacotes exclusivos para Bonito</strong> </h2>
                   <span className="bottomText">
                   <strong> <h3>Desconto na hospedagem!</h3></strong>
                   </span>
                   <div className="actionCards">
                       <button className="actions2">Confira</button>
         
                   </div>
                 </div>
              </div>
         
            </div>
  
        </div>
  
      </section>
      
      <section className="secDois">
  
          <div className="divSecDois-um">
            
            <div className="contentpromo">
                <div className="card">
                  <div className="topCard">
                    <h2 className="title"></h2>
                    <span className="secondText"></span>
                 </div>
                 
                 <div className="mediaCard7"></div>
                 <div className="bottomCard2">
                     <h2 id="ecotext"> <strong>Essa é sua oportunidade de conhecer o Pantanal!</strong> </h2>
                     <span className="bottomText">
                     <strong> <h3>Parcele sem Juros!</h3></strong>
                     </span>
                     <div className="actionCards">
                         <button className="actions2">Confira</button>
           
                     </div>
                   </div>
                </div>
           
              </div>
          </div>
          
          <div className="divSecDois-dois">
            
            <div className="contentpromo">
                <div className="card">
                  <div className="topCard">
                    <h2 className="title"></h2>
                    <span className="secondText"></span>
                 </div>
                 
                 <div className="mediaCard8"></div>
                 <div className="bottomCard2">
                     <h2 id="ecotext"> <strong>Super Oferta! Para Chapada Diamantina</strong> </h2>
                     <span className="bottomText"><strong> <h3>Oferta de 10x sem juros!</h3></strong></span>
                     <div className="actionCards">
                         <button className="actions2">Confira</button>
           
                     </div>
                   </div>
                </div>
           
              </div>
    
          </div>
    
        </section>
    
        <section className="secUm">

            <div className="divSecUm-um">
              
              <div className="contentpromo">
                  <div className="card">
                    <div className="topCard">
                      <h2 className="title"></h2>
                      <span className="secondText"></span>
                   </div>
                   
                   <div className="mediaCard9"></div>
                   <div className="bottomCard2">
                       <h2 id="ecotext"> <strong>Claro que Fernando de Noronha não ficaria de fora!!!</strong> </h2>
                       <span className="bottomText">
                       <strong> <h3>Pacotes em 5x sem Juros!</h3></strong>
                       </span>
                       <div className="actionCards">
                           <button className="actions2">Confira</button>
             
                       </div>
                     </div>
                  </div>
             
                </div>
            </div>
            
            <div className="divSecUm-dois">
              
              <div className="contentpromo">
                  <div className="card">
                    <div className="topCard">
                      <h2 className="title"></h2>
                      <span className="secondText"></span>
                   </div>
                   
                   <div className="mediaCard10"></div>
                   <div className="bottomCard2">
                       <h2 id="ecotext"> <strong>Lençóis Maranhenses. Pacotes com super desconto</strong> </h2>
                       <span className="bottomText">
                       <strong> <h3>Oferta com passeios incluidos!</h3></strong>
                       </span>
                       <div className="actionCards">
                           <button className="actions2">Confira</button>
             
                       </div>
                     </div>
                  </div>
             
                </div>
      
            </div>
      
          </section>


          </div>


</>
    );

}

export default Pbody;