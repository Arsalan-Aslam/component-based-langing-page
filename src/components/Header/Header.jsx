import React from "react";
import Logo from "../../images/logo.png";
import '../Header/Header.css';

const Header = () => {
  
  const showMenu = () =>{
    const toggleBtn = document.getElementById("toggleBtn");
    const navList = document.getElementById("nav-list");
    console.log('toggle menu working...');
    navList.classList.toggle("active");
  }
  
  return (
    <nav className='navbar'>
      <div className='logo-container'>
        <a href='#'>
          <img src={Logo} alt='Freeeze' className='primary-icon' />
        </a>
      </div>

      <ul className='nav-list' id='nav-list'>
        <li className='list-item'>
          <a href='#'>Home</a>
        </li>
        <li className='list-item'>
          <a href='#'>About</a>
        </li>
        <li className='list-item'>
          <a href='#'>Blog</a>
        </li>
        <li className='list-item'>
          <a href='#'>Contact</a>
        </li>
      </ul>
      <div className='menu' id='toggleBtn' onClick={showMenu}>
        <div className='menu-line'></div>
        <div className='menu-line'></div>
        <div className='menu-line'></div>
      </div>
    </nav>
  );
};
export default Header;
