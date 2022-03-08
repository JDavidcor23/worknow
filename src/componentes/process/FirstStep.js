import React from 'react'
import "../../styles/firstStep.css"
import contrato from "../../resources/contratar.png"

const FirstStep = () => {
    return (
        <div className='firstStep-cont'>
            <div className='contrato-img'>
                <p className='contrato-title'>Especifica el servicio que deseas contratar</p>
                <img src={contrato} alt="" />
            </div>
            <form className='contrato-form' action="">
                <label>Área de oficio</label>
                <input className='contrato-input' type="text" />
                <label> Tipo de contrato </label>
                <input className="contrato-input" type="text" />
                <button className='contrato-btn' type='button'>Contratar</button>
            </form>
        </div>
    )
}

export default FirstStep