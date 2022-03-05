import React from 'react';
import {Form, Input, Button} from '../../styles/StyledComponents/formLogin'
import Swal from 'sweetalert2'
import {Select} from "../../styles/StyledComponents/FormAliado";
import { useForm } from '../../hooks/useForm';
import { useDispatch } from "react-redux";
import {registroEmailPasswordNombre} from '../../actions/actionRegister';
import { Link } from 'react-router-dom';
import { registroUsersAsincrono } from '../../actions/actionUser';
const FormRegister = () => {
  const dispatch = useDispatch();

  const [formValues, handleInputChange] = useForm({
      name: '',
      email: '',
      pass1: '',
      pass2: '',
      identificatión:"",
      phone:"",
      city:"",
      type:"",
  });
  const { 
        name, 
        email, 
        pass1, 
        pass2, 
        identificatión, 
        type, 
        phone,
        city
      } = formValues;

  const handleRegistro = (e) => {
    e.preventDefault();
    if(pass1 !== pass2){
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Las contraseñas no coinciden',
      })
    }else{
      const newUser={
        name, 
        email, 
        identificatión, 
        type, 
        phone,
        city
      }
      // console.log(newUser)
      // dispatch(registroEmailPasswordNombre(email,pass1,name, newUser))
      dispatch(registroUsersAsincrono(newUser))
    }
}
    return (
        <Form onSubmit={handleRegistro}>
        <h2 style={{color: "#333435", fontFamily:"Noto Sans', sans-serif", fontWeight:"600", fontSize:"2rem"}}>Registrarse</h2>
        <Input type="Nombre"   placeholder='Nombre'
        name="name"
        value={name}
        onChange={handleInputChange}
        />
        <Input type="text" 
        placeholder="Correo electronico"
        name="email"
        value={email}
        onChange={handleInputChange}
        />
        <div style={{display:"flex", justifyContent:"space-between"}}>
        <Select 
        defaultValue={"DEFAULT"} 
        name="type"
        value={type}
        onChange={handleInputChange}
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
        <Input type="number" 
         placeholder="identificación"
         name="identificatión"
         value={identificatión}
         onChange={handleInputChange}
         style={{width:"75%"}}
         />
        </div>
        <Input type="number" 
         placeholder="Número de telefono"
         name="phone"
         value={phone}
         onChange={handleInputChange}
         />
        <Input type="text" 
         placeholder="Ciudad"
         name="city"
         value={city}
         onChange={handleInputChange}
         />
        <Input type="password" 
         placeholder="Repite la contraseña"
         name="pass1"
         value={pass1}
         onChange={handleInputChange}
         />
        <Input type="password" 
         placeholder="Repite la contraseña"
         name="pass2"
         value={pass2}
         onChange={handleInputChange}
         />
        <Link style={{fontSize:"0.8rem", textAlign:"right", padding:"0px 20px"}} to="/login">¿Ya tienes una cuenta?, ingresa aquí</Link>
        
        <Button type="submit">Enviar</Button>
      </Form>
    );
};

export default FormRegister;