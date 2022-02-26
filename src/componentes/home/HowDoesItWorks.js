import React from 'react'
import "../../styles/howItWorks.css"
import message from "../../resources/message.svg"
import ubication from "../../resources/ubication.svg"
import user from "../../resources/user.svg"

const HowDoesItWorks = () => {
    return (
        <>
            <div className='how-cont' id='como-funciona'>
                <header className='how-title'>
                    <h4>¿Cómo funciona?</h4>
                </header>
                <div className='how-cards'>
                    <div className='info-card1'>
                        <picture>
                            <img src={ubication} alt="" />
                        </picture>
                        <p className='cardTitle'>Elige tu ubicación</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ad quia voluptates modi excepturi eum, nemo aspernatur incidunt, error vitae, iure nesciunt. Aliquid, quas modi at explicabo optio labore vero?</p>
                    </div>
                    <div className='info-card2'>
                        <picture>
                        <img src={user} alt="" />
                        </picture>
                        <p className='cardTitle'>Elige tu ubicación</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ad quia voluptates modi excepturi eum, nemo aspernatur incidunt, error vitae, iure nesciunt. Aliquid, quas modi at explicabo optio labore vero?</p>
                    </div>
                    <div className='info-card3'>
                        <picture>
                        <img src={message} alt="" />
                        </picture>
                        <p className='cardTitle'>Elige tu ubicación</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ad quia voluptates modi excepturi eum, nemo aspernatur incidunt, error vitae, iure nesciunt. Aliquid, quas modi at explicabo optio labore vero?</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HowDoesItWorks