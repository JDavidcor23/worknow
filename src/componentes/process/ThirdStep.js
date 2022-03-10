import React from 'react'
import "../../styles/thirdStep.css"
import grade from "../../resources/Grades-pana.png"
import { useNavigate } from 'react-router-dom'

const ThirdStep = () => {

  const navigate = useNavigate()




  const handleClick = () => {
    navigate("/listado")
    sessionStorage.removeItem("contratoID")
  }

  return (
    <div className='third-cont'>
      <p className='state-title'> Finaliza el servicio</p>
      <div className='card3'>
          <img className='third-img' src={grade} alt="" />
          <form className='card3-form' action="">
            <p>¿Cómo fue trabajar con Martin?</p>
            <div className='valoration'>
              <button type='button' 
              style={{background:"#FF5C6C"}}>1</button>
              <button type='button' 
              style={{background:"#F6E962"}}>3</button> 
              <button type='button' 
              style={{background:"#77DD77"}}>5</button>
            </div>
            <button onClick={() => handleClick()} className='third-btn'>Finalizar</button>
          </form>
      </div>
    </div>
  )
}


export default ThirdStep