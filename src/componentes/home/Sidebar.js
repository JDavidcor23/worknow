import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import menu from "../../resources/menu.png"
import "../../styles/sidebar.css"
import {useDispatch} from "react-redux";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { logout } from "../../actions/actionLogin";

const Sidebar = () => {
    const dispatch = useDispatch();
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);
    React.useEffect(() => {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user?.uid) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      });
    }, [setIsLoggedIn]);
    const [isClicked, setisClicked] = useState(false);
    return (
        <div className='sidebar'>
            <div className='menu'>
                <img onClick={() => setisClicked(!isClicked)} src={menu} style={{width:"40px", height: "40px"}} alt=''/>
            </div>
            {
                isClicked ? <nav className='options'>
                {isLoggedIn 
                ? 
                <li onClick={()=>dispatch(logout())}>Cerrar secion</li>
                :
                <li>
                    <Link to="/login">Iniciar sesión</Link>
                </li>
                }
                <li>Registrarse</li>
                <li>¿Por qué elegirnos?</li>
                <li>Preguntas frecuentes</li>
                <li>Contáctanos</li>
                <li><Link to="/aliado">Prueba</Link> </li>
            </nav>
            :
            ""
            }
        </div>
    )
};

export default Sidebar;
