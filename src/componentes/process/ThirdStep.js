import React, { useEffect, useState } from 'react'
import "../../styles/thirdStep.css"
import grade from "../../resources/Grades-pana.png"
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const ThirdStep = () => {
  let { id } = useParams();
  const [job, setJob] = useState([]);
  const getJobData = useSelector((watchjobs) => watchjobs.listjobs.jobsList);
  const filterDatabyId = (id) => {
    const filterData = getJobData.filter((job) => job.id === id);
    setJob(filterData[0]);
  };
  const sumValoration = (number)=>{
    const value = {
      uno:0,
      tres:0,
      cinco:0,
    }
    const valueNumber = {
      uno:0,
      tres:0,
      cinco:0,
    }
    job.votos.push(number)
    for(let i = 0; i <job.votos.length; i++){
      if(job.votos[i] === 1){
        value.uno+=1
      }
      if(job.votos[i] === 3){
        value.tres+=1
      }
      if(job.votos[i] === 5){
        value.cinco+=1
      }
    }
    const getKeysValues = Object.keys(value)
    const getValues = Object.values(value)
    let mayor = 0;
    for(let i=0; i<getKeysValues.length;i++){
      if(value[getKeysValues[i]] > mayor){
        mayor = value[getKeysValues[i]]
      }
    }
    for(let i=0; i<getKeysValues.length;i++){
      
    }


  }
  useEffect(()=>{
    filterDatabyId(id)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <div className='third-cont'>
      <p className='state-title'> Finaliza el servicio</p>
      <div className='card3'>
          <img className='third-img' src={grade} alt="" />
          <form className='card3-form' action="">
            <p>¿Cómo fue trabajar con Martin?</p>
            <div className='valoration'>
              <button type='button' 
              style={{background:"#FF5C6C"}} onClick={()=>sumValoration(1)}>1</button>
              <button type='button' 
              style={{background:"#F6E962"}} onClick={()=>sumValoration(3)}>3</button>
              <button type='button' 
              style={{background:"#77DD77"}} onClick={()=>sumValoration(5)}>5</button>
            </div>
            {/* <p>{job.votos }</p> */}
            <button className='third-btn'>Finalizar</button>
          </form>
      </div>
    </div>
  )
}

export default ThirdStep