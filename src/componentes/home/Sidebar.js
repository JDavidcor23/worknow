import React, { useState } from 'react';
import menu from "../../resources/menu.png"
import "../../styles/sidebar.css"


const Sidebar = () => {

    const [isClicked, setisClicked] = useState(false);


    return (
        <div className='sidebar'>
            <div className='menu'>
                <img onClick={() => setisClicked(!isClicked)} src={menu} style={{width:"40px", height: "40px"}} alt=''/>
            </div>
            {
                isClicked ? <nav className='options'>
                <li>Iniciar sesión</li>
                <li>Registrarse</li>
                <li>¿Por qué elegirnos?</li>
                <li>Preguntas frecuentes</li>
                <li>Contáctanos</li>
            </nav>
            :
            ""
            }
        </div>
    )
};

export default Sidebar;
