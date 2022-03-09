import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import menu from "../../resources/menu.png"
import "../../styles/sidebar.css"
import { getAuth, onAuthStateChanged } from "firebase/auth";


const Sidebar = () => {
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
            isClicked && 
            <nav>
                <ul className='options'>
                {isLoggedIn 
                ? 
                ""
                :
                <>
                <li>
                    <Link to="/ingresar">Iniciar sesión</Link>
                </li>
                  <li>
                <Link to="/registro">Registrarse</Link>
                </li>
                </>
                }
                <li id=''> 
                <a href="#contacto">Contáctanos</a>
                </li>
                </ul>
            </nav>
            }
        </div>
    )
};

export default Sidebar;
