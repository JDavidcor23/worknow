import React from 'react'
import "../../styles/thirdStep.css"
import grade from "../../resources/Grades-pana.png"

const ThirdStep = () => {



  return (
    <div className='third-cont'>
      <p className='state-title'> Finaliza el servicio</p>
      <div className='card3'>
          <img className='third-img' src={grade} alt="" />
          <form className='card3-form' action="">
            <p>¿Cómo fue trabajar con Martin?</p>
            <div className='valoration'>
              <button type='button' style={{background:"#FF5C6C"}}>1</button>
              <button type='button' style={{background:"#F6E962"}}>2</button>
              <button type='button' style={{background:"#77DD77"}}>3</button>
            </div>
            <button className='third-btn'>Finalizar</button>
          </form>
      </div>
    </div>
  )
}

export default ThirdStep