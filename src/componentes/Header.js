import './Header.css';
import logo from '../componentes/img/ByAir001.png';


function Header() {
    return (
<>
<div className='container'>

<div className='Body'>

<header className="headerClass">
      
      <div className="FlexHead"></div>
      <div className="FlexHead">
      <img src={logo}  alt=""/>
      </div>
      <div className="FlexHead"></div>

     </header>

</div>

</div>
</>
     );
}

export default Header;