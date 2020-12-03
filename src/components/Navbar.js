import React,{Component, useState} from 'react';
import {Link} from 'react-router-dom';
import {Button} from './Button';
import './Navbar.css';

function Navbar (){
    const [click, setClick]= useState (false)
    const handleClick = () => setClick (!click)
    const closeMobileMenu = ()=> setClick(false);
 
    
    return (
        <>
        <nav className = 'navbar'>
            <Link to ='/'  className = 'navbar-logo'>
                 Gift Basket
           </Link>
 <div className='menu-icon' onClick= {handleClick}>
     <i className= {click ? 'fas fa-times': 'fas fa-bars'}/>
      </div>
        <ul className = {click ? 'nav-menu active': 'nav-menu'}>
            <li className = 'nav-item'>
           <Link to = '/' className = 'nav-links' onClick =  {closeMobileMenu}>
             Home
             </Link>
             </li>
        
        <li className = 'nav-item'>
           <Link to = '/products' className = 'nav-links' onClick = {closeMobileMenu}>
            Products 
            </Link>
            </li>
            <li className = 'nav-item'>

           <Link to = '/signup' className = 'nav-links' 
           onClick = {closeMobileMenu}>
             Sign Up
             </Link>
            </li>   
      </ul>
    {/*Button*/}
    </nav>
    
</>
    )};
export default Navbar;