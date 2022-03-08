import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import "../../styles/process.css"
import FirstStep from './FirstStep'

const Process = () => {

  const [first, setfirst] = useState()
  const [second, setSecond] = useState()
  const [third, setThird] = useState()

  let {id} = useParams()
  console.log(id)

  return (
    <>
    <div className='process-cont'>
      <h3 className='process-title'>Proceso del partner:</h3>
      <div className='steps-cont'>
        <div className='each-step'>
          <div className='step1' style={first ? {background:"red"} : {}}>1</div>
          <p className='step-text'>Servicio a contratar</p>
        </div>
        <div className='line'></div>
        <div className='each-step'>
          <div className='step2'>2</div>
          <p className='step-text'>Estado del servicio</p>
        </div>
        <div className='line'></div>
        <div className='each-step'>
          <div className='step3'>3</div>
          <p className='step-text'> Finalizar servicio</p>
        </div>
      </div>
    <FirstStep/>
    </div>
    </>
  )
}

export default Process