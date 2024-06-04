import React, { useState, useEffect } from 'react';
import {Link, useLocation} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLandmarkDome, faXmark, faBars} from '@fortawesome/free-solid-svg-icons';
import { Button } from './Button';
import './Navbar.css';
function Navbar() {

    const scrollToSection = (sectionId) => {
      const section = document.getElementById(sectionId);
      if(section){
        section.scrollIntoView({behavior: 'smooth', block: 'start'})
      }
    }

    const location = useLocation();
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
      if(window.innerWidth <= 960){
        setButton(false);
      } else {
        setButton(true);
      }
    };

    useEffect(() => {
      showButton();
    }, []);

    window.addEventListener('resize', showButton);
  return (
    <>
      <nav className='navbar'>
          <div className='navbar-container'>
              <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                  <FontAwesomeIcon icon={faLandmarkDome}/> THE KET
              </Link>
              <div className='menu-icon' onClick={handleClick}>
                  {click ? <FontAwesomeIcon icon={faXmark}/> : <FontAwesomeIcon icon={faBars}/>}
              </div>


              <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                  {location.pathname === '/' && (
                      <>
                          <li className='nav-item'>
                              <div className='nav-links' onClick={() => {
                                  scrollToSection('visitSection');
                                  closeMobileMenu();
                              }}>
                                  Visit
                              </div>
                          </li>
                          <li className='nav-item'>
                              <div className='nav-links' onClick={() => {
                                  scrollToSection('exhibitionSection');
                                  closeMobileMenu();
                              }}>
                                  Exhibitions and Events
                              </div>
                          </li>
                          <li className='nav-item'>
                              <div className='nav-links' onClick={closeMobileMenu}>
                                  Learn with us
                              </div>
                          </li>
                      </>
                  )}
              </ul>


              {button && <Button buttonStyle='btn--outline'>Buy tickets</Button>}
          </div>
      </nav>
    </>
  );
}

export default Navbar;
