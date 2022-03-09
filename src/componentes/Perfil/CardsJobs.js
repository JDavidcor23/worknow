import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {eliminarJobsAsincrono, listarJobsAsincrono} from '../../actions/actionJobs'
import { useDispatch } from "react-redux";
import {
  Cards,
  ImgCard,
  PCard,
} from "../../styles/StyledComponents/StyledCards";
import { Button } from "../../styles/StyledComponents/formLogin";
const CardsJobs = ({
  setDateJobs,
  setImg1,
  setidDoc,
  setUpdate,
  uid
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
    dispatch(listarJobsAsincrono(uid))
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
              <Link to="/perfil/#formulario">
                <Button onClick={() => handleEdit(job)}>Editar</Button>
              </Link>
              <Button onClick={()=>handleDelete(job)} style={{margin:"20px 0", background:"red"}}>Borrar</Button>
            </div>
          </Cards>
        ))}
    </div>
  );
};

export default CardsJobs;
