import React from 'react';
import "../../styles/firstStep.css"
import contrato from "../../resources/contratar.png"
import { useParams } from 'react-router-dom';

const FirstStep = ({setFirst, setSecond, setFirstText, setContratoID}) => {

    let { id } = useParams();
    const setStepState = () => {
        sessionStorage.setItem("contratoID", id)
        setContratoID(id)
        setFirst(false)
        setSecond(true)
    }

    const handleOnChange = (e) => {
        setFirstText(e.target.value)
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
    }

    

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