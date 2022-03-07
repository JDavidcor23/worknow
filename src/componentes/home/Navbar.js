import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../resources/W.png";
import "../../styles/navbar.css";
import Sidebar from "./Sidebar";
import { getAuth, onAuthStateChanged } from "firebase/auth";


const Navbar = () => {

  const location = useLocation()
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [open, setOpen] = React.useState(false);

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
  
  return (
    <div className="nav-cont">
      <nav className="navbar">
        <div className="nav-main">
          <Link to="/">
            <img src={logo} alt="" style={{ width: "40px", height: "40px" }} />
          </Link>
          {
            location.pathname === "/" 
            ?
            <>
            <a href="#como-funciona">CÓMO FUNCIONA</a>
            <a href="#nosotros">NOSOTROS</a>
            </>
            : ""
          }
          {isLoggedIn && (
            <div
              style={{
                position: "relative",
              }}
            >
              <button
                style={{
                  border: "none",
                  background: "none",
                }}
                onClick={() => setOpen(!open)}
              >
                <img
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                  alt=""
                  style={{
                    height: "40px",
                    borderRadius: "50%",
                    border: "3px solid",
                  }}
                />
              </button>
              {open && (
                  <ul className='options' style={{position: "absolute",
                    right: "1px",
                    marginTop: "10px"
                }}>
                    <li>Cerrar sesión</li>
                    <li>
                      <Link to="/perfil">
                        Editar perfil
                      </Link>
                      </li>
                  </ul>
              )}
            </div>
          )}
        </div>
        <Sidebar />
      </nav>
    </div>
  );
};

export default Navbar;
