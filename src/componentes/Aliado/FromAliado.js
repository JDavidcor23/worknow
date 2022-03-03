import React from "react";
import Swal from "sweetalert2";
import {
  FormAli,
  Label,
  Input,
  Select,
} from "../../styles/StyledComponents/FormAliado";
import { Button, TextArea } from "../../styles/StyledComponents/formLogin";
import { fileUpload } from "../../helpers/FileUpload";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { registroJobsAsincrono } from "../../actions/actionJobs";
const FromAliado = () => {
  const { id } = useSelector((store) => store.login);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      uid: id,
      url: "",
      namejob: "",
      description: "",
      city: "",
      country: "",
      identification_number:"",
      profesion:"",
      identification_type:""
    },
    onSubmit: (data) => {
      console.log(data)
     dispatch(registroJobsAsincrono(data));
     Swal.fire({
       icon: "success",
       title: "Producto Guardado exitosamente",
       showConfirmButton: false,
       timer: 1500,
     });
    },
  });
  const handlePictureClick = () => {
    document.querySelector("#fileSelector").click();
  };

  const handleFileChanged = (e) => {
    const url = [];
    for (let i = 0; i < 3; i++) {
      fileUpload(e.target.files[i])
        .then((response) => {
          url.push(response);
          console.log(url);
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
    formik.values.url = url;
  };
  return (
    <FormAli action="" onSubmit={formik.handleSubmit}>
      <Label htmlFor="">Número de identificación</Label>
      <div style={{ display: "flex", width: "100%" }}>
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
        required
        onChange={formik.handleChange}
        style={{ margin: "0 0 0 20px", width: "100%" }} />
      </div>
      <Label htmlFor="">Escoge una profesión</Label>
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
      <Label htmlFor="">Pais</Label>
      <Input 
      type="text" 
      name="country"
      required
      onChange={formik.handleChange}
      />
      <Label htmlFor="">Ciudad</Label>
      <Input 
      type="text" 
      required
      name="city" 
      onChange={formik.handleChange}
      />
      <Label htmlFor="">Nombre de tu trabajo</Label>
      <Input 
      type="text" 
      name="namejob"
      required
      onChange={formik.handleChange}
      />
      <Label htmlFor="">Descripción de tu trabajo</Label>
       <TextArea 
       required
       name="description"
       onChange={formik.handleChange}
       ></TextArea> 
      <Label htmlFor="">Añade 3 imagenes</Label>
      <input
        id="fileSelector"
        type="file"
        className="form-control "
        placeholder="url image"
        name="url"
        style={{ display: "none" }}
        onChange={handleFileChanged}
        multiple
        required
      />
      <button
        className="btn btn-dark"
        onClick={handlePictureClick}
        type="button"
      >
        Imagen
      </button>
      {/* <img
        src="https://res.cloudinary.com/dhu6ga6hl/image/upload/v1646187218/work-now/hqlsfanpvurxithbtvmy.png"
        alt=""
      />
      <img
        src="https://res.cloudinary.com/dhu6ga6hl/image/upload/v1646187218/work-now/hqlsfanpvurxithbtvmy.png"
        alt=""
      />
      <img
        src="https://res.cloudinary.com/dhu6ga6hl/image/upload/v1646187218/work-now/hqlsfanpvurxithbtvmy.png"
        alt=""
      /> */}
      <Button type="submit">Subir</Button>
    </FormAli>
  );
};

export default FromAliado;
