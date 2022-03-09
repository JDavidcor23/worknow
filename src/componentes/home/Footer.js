import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from "../../resources/W.png"
import "../../styles/footer.css"

const Footer = () => {

    const navigate = useNavigate()

    return(
        <footer className='footer-cont' id='contact' >
            <div className='copy'>
                <p>2021 WorkNow</p>
            </div>
            <picture className='log'>
                <a href='#inicio'>
                <img onClick={()=> navigate("/")} src={logo} alt="" />
                </a>
            </picture>
            <div style={{fontSize:"0.8rem"}}>
            <p>osmeilypernia@gmail.com</p>
            <p>jorgedavid23diaz@gmail.com</p>
            </div>
        </footer>
    )
}

export default Footer