import React from 'react'
import "../../styles/firstStep.css"
import contrato from "../../resources/contratar.png"

const FirstStep = ({first, setFirst, setSecond}) => {

    const setStepState = () => {
        setFirst(false)
        setSecond(true)
    }

    return (
        <div className='firstStep-cont' id='paso-1'>
            <div className='contrato-img'>
                <p className='contrato-title'>Especifica el servicio que deseas contratar</p>
                <img src={contrato} alt="" />
            </div>
            <form className='contrato-form' action="">
                <label>Área de oficio</label>
                <input className='contrato-input' type="text" />
                <label> Tipo de contrato </label>
                <input className="contrato-input" type="text" />
                <button onClick={()=> setStepState()} className='contrato-btn' type='button' >Contratar</button>
            </form>
        </div>
    )
}

export default FirstStep