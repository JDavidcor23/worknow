import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import "../../styles/process.css"
import FirstStep from './FirstStep'
import SecondStep from './SecondStep'
import ThirdStep from './ThirdStep'

const Process = () => {

  const getJobData =  useSelector((watchjobs => watchjobs.listjobs.jobsList))

  let { id } = useParams();
  const [user, setUser] = useState([])
  const [contratoID, setContratoID] = useState(sessionStorage.getItem("contratoID"))


  
  const filterDatabyId = (id) => {
      const filterData = getJobData.filter(user => user.id === id)
      setUser(filterData[0])
    }
    
    useEffect(() => {
      filterDatabyId(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  
  const [first, setFirst] = useState(true)

  const [second, setSecond] = useState(false)
  const [third, setThird] = useState(false)

  const [firstText, setFirstText] = useState("")
    useEffect(()=>{
      if(contratoID === id){
        setFirst(false)
        setSecond(true)
      }
    }, [contratoID, id])

  return (
    <>
    <div className='process-cont'>
      <h3 className='process-title'>Proceso del partner:</h3>
      <div className='steps-cont'>
        <div className='each-step'>
          <div className='step1' style={first ? {background:"gray"} : {background:"#00799e"}}>1</div>
          <p className='step-text'>Servicio a contratar</p>
        </div>
        <div className='line'></div>
        <div className='each-step'>
          <div className='step2' style={second ? {background:"gray"} : {background:"#00799e"}}>2</div>
          <p className='step-text'>Estado del servicio</p>
        </div>
        <div className='line'></div>
        <div className='each-step'>
          <div className='step3' style={third ? {background:"gray"} : {background:"#00799e"}}>3</div>
          <p className='step-text'> Finalizar servicio</p>
        </div>
      </div>
        {
          !contratoID ?
          <FirstStep setContratoID={setContratoID} firstText={firstText} setFirstText={setFirstText} setSecond={setSecond} /> : contratoID === id && second ?
          <SecondStep firstText={firstText} user={user} second={second} setSecond={setSecond} setThird={setThird}/> : third &&
          <ThirdStep third={third} setThird={setThird}/>
        }

    </div>
    </>
  )
}

export default Process