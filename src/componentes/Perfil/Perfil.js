import React, { useState } from "react";
import {
  Container,
  ContainerImg,
  FormEdit,
  InputEdit,
} from "../../styles/StyledComponents/StyledPerfil";
import { Button } from "../../styles/StyledComponents/formLogin";
import { fileUpload } from "../../helpers/FileUpload";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Navbar from "../home/Navbar";
import FromAliado from './FromAliado'
import Footer from "../home/Footer";
import { getUserForEdit, listarUserAsincrono, registroUsersAsincrono } from "../../actions/actionUser";
import Swal from "sweetalert2";
import { listarJobsAsincrono } from "../../actions/actionJobs";
const Perfil = () => {
  const { id } = useSelector((store) => store.login);
  const dispatch = useDispatch()
  const [img1, setImg1] = useState(
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
  );
  const [datesUser, setDatesUser] = useState({
    uid:id,
    name:"",
    url:"",
    phone:"",
    country:"",
    city:"",
  })
  const {usuario} = useSelector((store) => store.usuario)
  React.useEffect(() => {
    if(usuario !== undefined){
      setImg1(usuario.url)
      setDatesUser({
          uid:id,
          name:usuario.name,
          url:usuario.url,
          phone:usuario.phone,
          country:usuario.country,
          city:usuario.city,
        })
      }
    dispatch(listarJobsAsincrono(id))
    }, [dispatch, id, usuario]);
    const handleChange = ({ target }) => {
      setDatesUser({
          ...datesUser,
          [target.name]: target.value
      })
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    if(datesUser.url === ""){
      datesUser.url = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" 
    }
    if(usuario !== undefined){
        getUserForEdit(usuario.id, datesUser)
        setTimeout(()=>{
          dispatch(listarUserAsincrono(datesUser.uid)) 

        }, 2000)
        Swal.fire({
          icon: "success",
          title: "Datos actualizados correctamente",
          showConfirmButton: false,
          timer: 2500,
        });
    }else{
      console.log(usuario)
      dispatch(registroUsersAsincrono(datesUser));
      setTimeout(()=>{
        dispatch(listarUserAsincrono(datesUser.uid)) 

      }, 2000)
      Swal.fire({
        icon: "success",
        title: "Datos guardados correctamente",
        showConfirmButton: false,
        timer: 2500,
      });
     }
  }
  const handlePictureClick = () => {
    document.querySelector("#fileSelector").click();
  };
  const handleFileChanged = async (e) => {
    let url = "";
    fileUpload(e.target.files[0])
      .then((response) => {
        url = response;
         setImg1(url);
         datesUser.url = url;
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
        <h2 style={{margin:"20px 0", color:"#333435"}}>Datos de perfil</h2>
        <FormEdit onSubmit={handleSubmit}>

          <ContainerImg>
            <input
            id="fileSelector"
            type="file"
            style={{ display: "none" }}
            onChange={handleFileChanged}
            />
            <img
              src={img1}
              alt=""
              width="200px"
              height="200px"
              style={{ borderRadius: "50%" }}
            />
            <Button
              onClick={handlePictureClick}
              type="button"
              style={{ width: "150px", marginTop: "20px" }}
            >
              Sube tu foto
            </Button>
          </ContainerImg>
          <div style={{display:"flex", flexDirection:"column", width:"100%", alignItems:"center"}}>
          <InputEdit type="text" 
          placeholder="Nombre" 
          name="name"
          required 
          value={datesUser.name} 
          onChange={handleChange}
          />
          <InputEdit
            type="number"
            placeholder="Teléfono ejemplo(+57 123456789)"
            name="phone"
            required
            value={datesUser.phone} 
            onChange={handleChange}

          />
          <InputEdit 
          type="text" 
          placeholder="País" 
          name="country" 
          required
          value={datesUser.country} 
          onChange={handleChange}
          />
          <InputEdit 
          type="text" 
          placeholder="ciudad" 
          name="city" 
          required
          value={datesUser.city} 
          onChange={handleChange}
          />
          <Button>Guardar</Button>
          </div>
        </FormEdit>
          {usuario !== undefined ?
          <>
           <FromAliado />
          </>
          :  
          <div>
            <h2 style={{margin:"30px 0", color:"#333435"}}>¿Quieres ser un Partner? rellena todos los campos</h2>
          </div>
        }
      </Container>
      <Footer />
    </>
  );
};

export default Perfil;
