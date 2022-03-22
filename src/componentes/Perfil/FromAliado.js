import React, { useState } from "react";
import Swal from "sweetalert2";
import {
  Label,
  Select,
  DivImages,
  ConntainerImages
} from "../../styles/StyledComponents/FormAliado";
import CardsJobs from "./CardsJobs";
import {InputAli, FormAli} from "../../styles/StyledComponents/StyledPerfil";
import { Button, TextArea } from "../../styles/StyledComponents/formLogin";
import { fileUpload } from "../../helpers/FileUpload";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getJobsForEdit, registroJobsAsincrono } from "../../actions/actionJobs";
const FromAliado = () => {
  const { id } = useSelector((store) => store.login);
  const { usuario } = useSelector((store) => store.usuario);
  const [update, setUpdate] = useState(false)
  const [idDoc, setidDoc] = useState("")
  const [img1, setImg1] = useState("https://res.cloudinary.com/dhu6ga6hl/image/upload/v1646187218/work-now/hqlsfanpvurxithbtvmy.png");
  const [dateJobs, setDateJobs] = useState({
    uid:id,
    type:"",
    city:usuario.city,
    money:"",
    jobstype:"",
    namejob:"",
    description:"",
    url:"https://res.cloudinary.com/dhu6ga6hl/image/upload/v1646187218/work-now/hqlsfanpvurxithbtvmy.png",
    valoration:5,
    votos:[1],
  })
  const handleChange = ({ target }) => {
    setDateJobs({
        ...dateJobs,
        [target.name]: target.value
    })
  }
  const dispatch = useDispatch();
  const handleSubmit = (e)=>{
    e.preventDefault();
    if(!update){
      dispatch(registroJobsAsincrono(dateJobs))
      Swal.fire({
        icon: "success",
        title: "Trabajo guardado correctamente",
        showConfirmButton: false,
        timer: 2500,
      });
      setImg1("https://res.cloudinary.com/dhu6ga6hl/image/upload/v1646187218/work-now/hqlsfanpvurxithbtvmy.png");
      setDateJobs({
        uid:id,
        type:"",
        city:usuario.city,
        money:"",
        jobstype:"",
        namejob:"",
        description:"",
        url:"https://res.cloudinary.com/dhu6ga6hl/image/upload/v1646187218/work-now/hqlsfanpvurxithbtvmy.png",
        valoration:5,
        votos:[1],
      })
    }
    else{
      dispatch(getJobsForEdit(idDoc, dateJobs))
      Swal.fire({
        icon: "success",
        title: "Trabajo guardado correctamente",
        showConfirmButton: false,
        timer: 2500,
      });
      setImg1("https://res.cloudinary.com/dhu6ga6hl/image/upload/v1646187218/work-now/hqlsfanpvurxithbtvmy.png");
      setUpdate(false)
      setDateJobs({
        uid:id,
        type:"",
        city:usuario.city,
        money:"",
        jobstype:"",
        namejob:"",
        description:"",
        url:"https://res.cloudinary.com/dhu6ga6hl/image/upload/v1646187218/work-now/hqlsfanpvurxithbtvmy.png",
        valoration:5,
        votos:[1],
      })
      
    }
  }
  const handlePictureClick1 = () => {
    document.querySelector("#fileSelector1").click();
  };
  const handleCancel = ()=>{
    setUpdate(false)
    setDateJobs({
      uid:id,
      type:"",
      city:usuario.city,
      money:"",
      jobstype:"",
      namejob:"",
      description:"",
      url:"https://res.cloudinary.com/dhu6ga6hl/image/upload/v1646187218/work-now/hqlsfanpvurxithbtvmy.png",
      valoration:5,
      votos:[1],
    })
    setImg1("https://res.cloudinary.com/dhu6ga6hl/image/upload/v1646187218/work-now/hqlsfanpvurxithbtvmy.png");
  }
  const handleFileChanged1 = async(e) => {
  let url = ""
  fileUpload(e.target.files[0])
    .then((response) => {
      url = response
      setImg1(url)
      dateJobs.url = url
    })
    .catch((error) => {
      console.log(error.message);
    });
  };
  return (
    <>
    <FormAli action="" onSubmit={handleSubmit} id="formulario">
      <h2 style={{margin:"40px 0  20px 0"}}>Publica tus trabajos aquí</h2>
      <Select defaultValue={"DEFAULT"} 
      name="type"
      value={dateJobs.type}
      required
      onChange={handleChange}
      >
        <option value="DEFAULT" disabled>
          Tipo de cobro
        </option>
        <option value="Hora">Hora</option>
        <option value="A convenir">A convenir</option>
        <option value="Día">Día</option>
      </Select>
      {dateJobs.type === "A convenir"?
      <InputAli
        disabled
        value=""
      />
      
      :
      <InputAli
      placeholder="Tarifa y Moneda ejem(5000 COP)"
      name="money"
      value={dateJobs.money}
      onChange={handleChange}
      />
      }

      <Select defaultValue={"DEFAULT"} 
      name="jobstype"
      value={dateJobs.jobstype}
      required
      onChange={handleChange}
      >
        <option value="DEFAULT" disabled>
          Elige tu opción
        </option>
        <option value="Obrero">Obrero</option>
        <option value="Panadero">Panadero</option>
        <option value="Carpintero">Carpintero</option>
        <option value="Chef">Chef</option>
        <option value="Electricista">Electricista</option>
        <option value="Entrenador de perros">Entrenador de perros</option>
      </Select>
      <InputAli 
      type="text" 
      name="namejob"
      value={dateJobs.namejob}
      required
      placeholder="Nombre de tu trabajo"
      onChange={handleChange}
      />
      <Label htmlFor="">Añade una imagen de presentación</Label>
      <InputAli
        id="fileSelector1"
        type="file"
        className="form-control "
        placeholder="url image"
        name="url"
        style={{ display: "none" }}
        onChange={handleFileChanged1}
        
      />


      <DivImages>
        <ConntainerImages>
            <img
            style={{margin:"10px"}}
            src={img1}
            alt=""
            width="350px"
            height="350px"
          />
          <Button
            className="btn btn-dark"
            onClick={handlePictureClick1}
            type="button"
            style={{width: "150px"}}
          >
            Imagen
          </Button>
        </ConntainerImages>
      </DivImages>
       <TextArea 
       required
       name="description"
       value={dateJobs.description}
       onChange={handleChange}
       placeholder="Descripción de tu trabajo"
       ></TextArea> 
      <Button type="submit" style={{margin:"20px 0 0 0"}}>Subir</Button>
      {update &&
      <Button style={{margin:"20px 0", background:"red"}} onClick={handleCancel}>Cancelar</Button>
      }
    </FormAli>
    <CardsJobs 
    setDateJobs={setDateJobs} 
    setImg1={setImg1}
    setidDoc={setidDoc}
    setUpdate={setUpdate}
    uid={id}
    />
    </>
  );
};

export default FromAliado;
