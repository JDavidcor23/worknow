import React from 'react';
import {Form, Input, Button} from '../../styles/StyledComponents/formLogin'
import Swal from 'sweetalert2'
import { useForm } from '../../hooks/useForm';
import { useDispatch } from "react-redux";
import {registroEmailPasswordNombre} from '../../actions/actionRegister';
import { Link } from 'react-router-dom';
const FormRegister = () => {
  const dispatch = useDispatch();

  const [formValues, handleInputChange] = useForm({
      name: '',
      email: '',
      pass1: '',
      pass2: '',
  });
  const { 
        name, 
        email, 
        pass1, 
        pass2, 
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

      // console.log(newUser)
      dispatch(registroEmailPasswordNombre(email,pass1,name))

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
        
        <Button type="submit" style={{margin:"0 auto"}}>Enviar</Button>
      </Form>
    );
};

export default FormRegister;