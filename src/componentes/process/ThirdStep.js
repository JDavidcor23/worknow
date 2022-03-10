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
  const ver=()=>{
    console.log(job)
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
              style={{background:"#FF5C6C"}} >1</button>
              <button type='button' 
              style={{background:"#F6E962"}} >3</button>
              <button type='button' 
              style={{background:"#77DD77"}} >5</button>
            </div>
            {/* <p>{job.votos }</p> */}
            <button className='third-btn'>Finalizar</button>
          </form>
            <button onClick={ver}>VER</button>
      </div>
    </div>
  )
}

export default ThirdStep