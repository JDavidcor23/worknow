import React from 'react'
import "../../styles/firstStep.css"
import contrato from "../../resources/contratar.png"

const FirstStep = ({first, setFirst, setSecond, firstText, setFirstText}) => {

    const setStepState = () => {
        setFirst(false)
        setSecond(true)
    }

    const handleOnChange = (e) => {
        setFirstText(e.target.value)
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
    }

    console.log(firstText)

    return (
        <div className='firstStep-cont' id='paso-1'>
            <div className='contrato-img'>
                <p className='contrato-title'>Especifica el servicio que deseas contratar</p>
                <img src={contrato} alt="" />
            </div>
            <form onSubmit={(e)=> handleOnSubmit(e)} className='contrato-form' action="">
                <label>Área de oficio</label>
                <input  className='contrato-input' type="text" />
                <label> Tipo de contrato </label>
                <input onChange={(e)=> handleOnChange(e)} className="contrato-input" type="text" />
                <button onClick={()=> setStepState()} className='contrato-btn' type='submit' >Contratar</button>
            </form>
        </div>
    )
}

export default FirstStep