import React from 'react';
import logo from "../../resources/W.png"
import "../../styles/navbar.css"
import Sidebar from './Sidebar';

const Navbar = () => {

    return(
        <div className='nav-cont'>
            <nav className='navbar'>
                <div className='nav-main'>
                    <img src={logo} alt='' style={{width:"40px", height:"40px"}}/>
                    <a href='#como-funciona'>CÓMO FUNCIONA</a>
                    <a href='#nosotros'>NOSOTROS</a>
                </div>
                    <Sidebar/>
            </nav>
        </div>
    )
};

export default Navbar;
