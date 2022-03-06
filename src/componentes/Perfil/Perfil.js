import React, { useState } from "react";
import FromAliado from "../Aliado/FromAliado";
import { FormAli, Input } from "../../styles/StyledComponents/FormAliado";
import { Button } from "../../styles/StyledComponents/formLogin";
import { fileUpload } from "../../helpers/FileUpload";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
const Perfil = () => {
  const { id } = useSelector((store) => store.login);
  const [img1, setImg1] = useState(
    "https://res.cloudinary.com/dhu6ga6hl/image/upload/v1646187218/work-now/hqlsfanpvurxithbtvmy.png"
  );
  const formik = useFormik({
    initialValues: {
      uid: id,
      number: "",
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
    document.querySelector("#fileSelector1").click();
  };
  const handleFileChanged1 = async (e) => {
    let url = "";
    fileUpload(e.target.files[0])
      .then((response) => {
        url = response;
        setImg1(url);
        formik.values.url1 = url;
        console.log(url);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div>
      <FormAli>
        <div>
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
          <img src={img1} alt="" />
          <Button
            className="btn btn-dark"
            onClick={handlePictureClick1}
            type="button"
            style={{ width: "150px" }}
          >
            Sube tu foto
          </Button>
        </div>
        <div>
          <Input type="text" placeholder="Nombre" name="number" />
          <Input type="number" placeholder="Numero de telefono" name="phone" />
          <Input type="text" placeholder="País" name="country" />
          <Input type="text" placeholder="ciudad" name="city" />
          <Button>Guardar</Button>
          {/* <FromAliado /> */}
        </div>
      </FormAli>
    </div>
  );
};

export default Perfil;
