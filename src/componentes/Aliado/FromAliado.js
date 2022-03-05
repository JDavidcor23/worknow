import React, { useState } from "react";
import Swal from "sweetalert2";
import {
  FormAli,
  Label,
  Input,
  Select,
  DivImages,
  ConntainerImages
} from "../../styles/StyledComponents/FormAliado";
import { Button, TextArea } from "../../styles/StyledComponents/formLogin";
import { fileUpload } from "../../helpers/FileUpload";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { registroJobsAsincrono } from "../../actions/actionJobs";
const FromAliado = () => {
  const { id } = useSelector((store) => store.login);
  const [img1, setImg1] = useState("https://res.cloudinary.com/dhu6ga6hl/image/upload/v1646187218/work-now/hqlsfanpvurxithbtvmy.png");
  const [img2, setImg2] = useState("https://res.cloudinary.com/dhu6ga6hl/image/upload/v1646187218/work-now/hqlsfanpvurxithbtvmy.png");
  const [img3, setImg3] = useState("https://res.cloudinary.com/dhu6ga6hl/image/upload/v1646187218/work-now/hqlsfanpvurxithbtvmy.png");
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      uid: id, 
      url1: "",
      url2: "",
      url3: "",
      namejob: "",
      description: "",
      city: "",
      country: "",
      identification_number:"",
      profesion:"",
      valoration:1.0,
      identification_type:""
    },
    onSubmit: (data) => {
      dispatch(registroJobsAsincrono(data));
      Swal.fire({
        icon: "success",
        title: "Producto Guardado exitosamente",
        showConfirmButton: false,
        timer: 1500,
      });
    },
  });
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
      formik.values.url1 = url
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
      formik.values.url2 = url
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
      formik.values.url3= url
      console.log(url)
    })
    .catch((error) => {
      console.log(error.message);
    });
  };
  return (
    <FormAli action="" onSubmit={formik.handleSubmit}>
        <Select 
        defaultValue={"DEFAULT"} 
        name="identification_type"
        onChange={formik.handleChange}
        required
        >
          <option value="DEFAULT" disabled>
            Tipo
          </option>
          <option value="C.C">C.C</option>
          <option value="C.E">C.E</option>
          <option value="NIT">NIT</option>
          <option value="P.E.P">P.E.P</option>
        </Select>
        <Input 
        type="number" 
        name="identification_number"
        placeholder="Número de identificación"
        required
        onChange={formik.handleChange} />
      <Select defaultValue={"DEFAULT"} 
      name="profesion"
      required
      onChange={formik.handleChange}
      >
        <option value="DEFAULT" disabled>
          Elige tu opción
        </option>
        <option value="Obrero">Obrero</option>
        <option value="Panadero">Panadero</option>
        <option value="Carpintero">Carpintero</option>
        <option value="Chef">Chef</option>
      </Select>
      <Input 
      type="text" 
      name="country"
      required
      placeholder="Pais"
      onChange={formik.handleChange}
      />
      <Input 
      type="text" 
      required
      name="city" 
      placeholder="Ciudad"
      onChange={formik.handleChange}
      />
      <Input 
      type="text" 
      name="namejob"
      required
      placeholder="Nombre de tu trabajo"
      onChange={formik.handleChange}
      />
            <Label htmlFor="">Añade 3 imagenes</Label>
      <input
        id="fileSelector1"
        type="file"
        className="form-control "
        placeholder="url image"
        name="url1"
        style={{ display: "none" }}
        onChange={handleFileChanged1}
        required
      />
      <input
        id="fileSelector2"
        type="file"
        className="form-control "
        placeholder="url image"
        name="url2"
        style={{ display: "none" }}
        onChange={handleFileChanged2}
        required
      />
      <input
        id="fileSelector3"
        type="file"
        className="form-control "
        placeholder="url image"
        name="url3"
        style={{ display: "none" }}
        onChange={handleFileChanged3}
        required
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
       onChange={formik.handleChange}
       placeholder="Descripción de tu trabajo"
       ></TextArea> 
      <Button type="submit" style={{margin:"20px 0 0 0"}}>Subir</Button>
    </FormAli>
  );
};

export default FromAliado;
