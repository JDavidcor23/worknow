import React, { useState } from "react";
import {
  Container,
  ContainerImg,
  FormEdit,
  InputEdit,
} from "../../styles/StyledComponents/StyledPerfil";
import { Button } from "../../styles/StyledComponents/formLogin";
import { fileUpload } from "../../helpers/FileUpload";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Navbar from "../home/Navbar";
import Footer from "../home/Footer";
const Perfil = () => {
  const { id, name } = useSelector((store) => store.login);
  const [img1, setImg1] = useState(
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
  );
  const formik = useFormik({
    initialValues: {
      uid: id,
      name:name,
      url:"",
      phone: "",
      country: "",
      city: "",
    },
    onSubmit: (data) => {
      console.log(data);
      /*dispatch(registroJobsAsincrono(data));
          Swal.fire({
            icon: "success",
            title: "Producto Guardado exitosamente",
            showConfirmButton: false,
            timer: 1500,
          });*/
    },
  });
  const handlePictureClick1 = () => {
    document.querySelector("#fileSelector").click();
  };
  const handleFileChanged1 = async (e) => {
    let url = "";
    fileUpload(e.target.files[0])
      .then((response) => {
        url = response;
        setImg1(url);
        formik.values.url = url;
        console.log(url);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <>
      <Navbar />
      <Container>
        <FormEdit onSubmit={formik.handleSubmit}>
          <ContainerImg>
            <InputEdit
              id="fileSelector"
              type="file"
              className="form-control "
              placeholder="url image"
              name="url"
              style={{ display: "none" }}
              onChange={handleFileChanged1}
              required
            />
            <img
              src={img1}
              alt=""
              width="200px"
              height="200px"
              style={{ borderRadius: "50%" }}
            />
            <Button
              className="btn btn-dark"
              onClick={handlePictureClick1}
              type="button"
              style={{ width: "150px", marginTop: "20px" }}
            >
              Sube tu foto
            </Button>
          </ContainerImg>
          <InputEdit type="text" 
          placeholder="Nombre" 
          name="name" 
          value={formik.values.name} 
          onChange={formik.handleChange}
          />
          <InputEdit
            type="number"
            placeholder="Teléfono ejemplo(+57 123456789)"
            name="phone"
            onChange={formik.handleChange}

          />
          <InputEdit 
          type="text" 
          placeholder="País" 
          name="country" 
          onChange={formik.handleChange}
          />
          <InputEdit 
          type="text" 
          placeholder="ciudad" 
          name="city" 
          onChange={formik.handleChange}
          />
          <Button style={{ width: "90%", maxWidth: "450px" }}>Guardar</Button>
          {/* <FromAliado /> */}
        </FormEdit>
      </Container>
      <Footer />
    </>
  );
};

export default Perfil;
