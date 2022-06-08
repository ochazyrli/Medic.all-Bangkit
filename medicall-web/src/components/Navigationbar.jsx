import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { Button } from './Button.jsx';
import './css/Navigationbar.css';



function Navigationbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true)
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false)

  const showButton = () => {
    if(window.innerWidth <=960){
      setButton(false);
    }else {
      setButton(true);
    }
  };

  window.addEventListener('resize', showButton);

  return (
    <>
        <nav className='Navigationbar'>
            <div className='navbar-container'>
                <Link to='/' className='navbar-logo'>
                    Medic.All &nbsp; <i class="fa-solid fa-capsules"></i>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                  <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                  <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                      Home
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/aboutus' className='nav-links' onClick={closeMobileMenu}>
                      About US
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/hospilocate' className='nav-links' onClick={closeMobileMenu}>
                      Hospital Locator
                    </Link>
                  </li>
                </ul>
                {button && <Button buttonStyle='btn--outline'> Sign Up</Button>}
            </div>
        </nav>
    </>
  )
}

export default Navigationbar