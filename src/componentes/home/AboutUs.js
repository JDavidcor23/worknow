import React from 'react'
import "../../styles/aboutUs.css"
import painter from "../../resources/painter.jpg"

const AboutUs = () => {
    return (

        <div className='about-cont' id='nosotros'>
            <h2 className="subtitle">Nosotros</h2>
            <picture className="imgSm" >
                <img src='https://img.freepik.com/foto-gratis/apuesto-carpintero-trabajando-madera_1157-26134.jpg?t=st=1645222887~exp=1645223487~hmac=1a7fbd6b3831bbb6fa9e89ae1b62f842bc4dfde6235ac41b11ba7c1d73be075a&w=740' alt='' />
            </picture>
            <div className='second-col'>
                <h2>¿Quiénes somos?</h2>
                <p>  Somos una plataforma que te conecta con el partner que más necesitas.</p>
                <p>Trabajamos de la mano con partners que como tú, buscan oportunidades laborales en oficios manuales, ofreciendo sus servicios con nosotros y dejando que las conexiones hablen por ellos. </p>
                <p>Nuestro medio también facilita la conexión entre quienes ofrecen servicios y quienes necesitan de estos.</p>
                <h2>¿Qué es un partner?</h2>
                <p>Un un partner es esa persona que confía en nuestra red para dar a conocer su trabajo y así incrementar su alcance respecto a los clientes.</p>
            </div>
            <picture className="imgLg">
                <img src={painter} alt='' />
            </picture>
        </div>
    )
}

export default AboutUs