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
  const [update, setUpdate] = useState(false)
  const [idDoc, setidDoc] = useState("")
  const [img1, setImg1] = useState("https://res.cloudinary.com/dhu6ga6hl/image/upload/v1646187218/work-now/hqlsfanpvurxithbtvmy.png");
  const [img2, setImg2] = useState("https://res.cloudinary.com/dhu6ga6hl/image/upload/v1646187218/work-now/hqlsfanpvurxithbtvmy.png");
  const [img3, setImg3] = useState("https://res.cloudinary.com/dhu6ga6hl/image/upload/v1646187218/work-now/hqlsfanpvurxithbtvmy.png");
  const [dateJobs, setDateJobs] = useState({
    uid:id,
    type:"",
    money:"",
    jobstype:"",
    namejob:"",
    description:"",
    url1:"",
    url2:"",
    url3:"",
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
    }else{
      dispatch(getJobsForEdit(idDoc, dateJobs))
      setUpdate(false)
    }
    e.target.reset()
  }
  const handlePictureClick1 = () => {
    document.querySelector("#fileSelector1").click();
  };
  const handlePictureClick2 = () => {
    document.querySelector("#fileSelector2").click();
  };
  const handlePictureClick3 = () => {
    document.querySelector("#fileSelector3").click();
  };

  const handleFileChanged1 = async(e) => {
  let url = ""
  fileUpload(e.target.files[0])
    .then((response) => {
      url = response
      setImg1(url)
      dateJobs.url1 = url
      console.log(url)
    })
    .catch((error) => {
      console.log(error.message);
    });
  };
  const handleFileChanged2 = async(e) => {
    let url = ""
  fileUpload(e.target.files[0])
    .then((response) => {
      url = response
      setImg2(url)
      dateJobs.url2 = url
      console.log(url)
    })
    .catch((error) => {
      console.log(error.message);
    });
  };
  const handleFileChanged3 = async(e) => {
    let url = ""
  fileUpload(e.target.files[0])
    .then((response) => {
      url = response
      setImg3(url)  
      dateJobs.url3= url
      console.log(url)
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
        <option value="A convenir">A convenir</option>
        <option value="Hora">Hora</option>
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
      </Select>
      <InputAli 
      type="text" 
      name="namejob"
      value={dateJobs.namejob}
      required
      placeholder="Nombre de tu trabajo"
      onChange={handleChange}
      />
      <Label htmlFor="">Añade 3 imagenes</Label>
      <InputAli
        id="fileSelector1"
        type="file"
        className="form-control "
        placeholder="url image"
        name="url1"
        style={{ display: "none" }}
        onChange={handleFileChanged1}
        
      />
      <InputAli
        id="fileSelector2"
        type="file"
        className="form-control "
        placeholder="url image"
        name="url2"
        style={{ display: "none" }}
        onChange={handleFileChanged2}
        
      />
      <InputAli
        id="fileSelector3"
        type="file"
        className="form-control "
        placeholder="url image"
        name="url3"
        style={{ display: "none" }}
        onChange={handleFileChanged3}
        
      />
      <DivImages>
        <ConntainerImages>
            <img
            style={{margin:"10px"}}
            src={img1}
            alt=""
            width="150px"
            height="150px"
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
        <ConntainerImages>
          <img
              style={{margin:"10px"}}
              src={img2}
              alt=""
              width="150px"
              height="150px"
            />
          <Button
            className="btn btn-dark"
            onClick={handlePictureClick2}
            type="button"
            style={{width: "150px"}}
          >
            Imagen
          </Button>
        </ConntainerImages>
        <ConntainerImages>
          <img
          style={{margin:"10px"}}
          src={img3}
          alt=""
          width="150px"
          height="150px"
        />
        <Button
        className="btn btn-dark"
        onClick={handlePictureClick3}
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
    </FormAli>
    <CardsJobs 
    setDateJobs={setDateJobs} 
    setImg1={setImg1}
    setImg2={setImg2}
    setImg3={setImg3}
    setidDoc={setidDoc}
    setUpdate={setUpdate}
    />
    </>
  );
};

export default FromAliado;
