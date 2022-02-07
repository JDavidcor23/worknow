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
                    <h5>CÓMO FUNCIONA</h5>
                    <h5>NOSOTROS</h5>
                </div>
                    <Sidebar/>
            </nav>
        </div>
    )
};

export default Navbar;
