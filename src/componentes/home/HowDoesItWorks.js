import React from 'react'
import "../../styles/howItWorks.css"
import message from "../../resources/message.svg"
import handshake from "../../resources/handshake.svg"
import user from "../../resources/user.svg"

const HowDoesItWorks = () => {
    return (
        <>
            <div className='how-cont' id='como-funciona'>
                <header className='how-title'>
                    <h4>¿Cómo funciona?</h4>
                </header>
                <div className='how-cards'>
                    
                    <div className='info-card2'>
                        <picture>
                        <img src={user} alt="" />
                        </picture>
                        <p className='cardTitle'>Busca a tu partner</p>
                        <p>En el listado podrás encontrar al partner que más necesitas, puedes filtrar por ubicación.</p>
                    </div>
                    <div className='info-card3'>
                        <picture>
                        <img src={message} alt="" />
                        </picture>
                        <p className='cardTitle'>Contacta por mensaje</p>
                        <p>Conectar con tu partner es más fácil de lo que piensas, sólo contacta por WhatsaApp en el apartado de conocer a tu aliado.</p>
                    </div>
                    <div className='info-card1'>
                        <picture>
                            <img src={handshake} alt="" />
                        </picture>
                        <p className='cardTitle'>Contrata a tu partner</p>
                        <p>Por medio de un acuerdo previo, puedes contratar a tu partner según las condiciones de ambos.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HowDoesItWorks