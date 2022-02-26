import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from "../../resources/W.png"
import "../../styles/footer.css"

const Footer = () => {

    const navigate = useNavigate()

    return(
        <footer className='footer-cont'>
            <div className='copy'>
                <p>2021 WorkNow</p>
            </div>
            <picture className='log'>
                <a href='#inicio'>
                <img onClick={()=> navigate("/")} src={logo} alt="" />
                </a>
            </picture>
        </footer>
    )
}

export default Footer