import React from 'react'
import "../../styles/secondStep.css"

const SecondStep = ({user, setSecond, setThird, firstText}) => {

  const setStepState = () => {
    setSecond(false)
    setThird(true)
  }

  return (
    <div className='secondStep-cont' id='paso-2'>
      <p className='state-title'>Verifica el estado de tu servicio</p>
      <div className='card2-cont'>
        <div className='img2-cont'>
        <img src={user.url} alt="userimg" />
        </div>
        <div className='card2-text'>
          <p style={{fontWeight:"600"}}>{user.namejob}</p>
          <p>{user.description}</p>
          <p>Contratación: {firstText}</p>
        </div>
      </div>
      <button className='second-btn' onClick={()=> setStepState()}>Finalizar servicio</button>
    </div>
  )
}

export default SecondStep