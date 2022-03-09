import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {eliminarJobsAsincrono} from '../../actions/actionJobs'
import { useDispatch } from "react-redux";
import {
  Cards,
  ImgCard,
  PCard,
} from "../../styles/StyledComponents/StyledCards";
const CardsJobs = ({
  setDateJobs,
  setImg1,
  setidDoc,
  setUpdate,
}) => {
  const dispatch = useDispatch()
  const { jobs } = useSelector((store) => store.jobs);
  const handleEdit = (job) => {
    setDateJobs({ ...job });
    setImg1(job.url);
    setidDoc(job.id);
    setUpdate(true);
  };
  const handleDelete = (job)=>{
    dispatch(eliminarJobsAsincrono(job))
  }
  return (
    <div>
      {jobs !== undefined &&
        jobs.map((job) => (
          <Cards key={job.id}>
            <ImgCard src={job.url} alt="" />
            <PCard>{job.namejob}</PCard>
            {job.type === "A convenir" ? (
              <PCard>Tipo de cobro: {job.type}</PCard>
            ) : (
              <>
                <PCard>Tipo de cobro: {job.type}</PCard>
                <PCard>Precio: {job.money}</PCard>
              </>
            )}
            <div>
              <button onClick={()=>handleDelete(job)}>Borrar</button>
              <Link to="/perfil/#formulario">
                <button onClick={() => handleEdit(job)}>Editar</button>
              </Link>
            </div>
          </Cards>
        ))}
    </div>
  );
};

export default CardsJobs;
