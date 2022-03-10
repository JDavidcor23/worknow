import React from "react";
import {useForm } from '../../hooks/useForm';  
import { useDispatch } from "react-redux";
import {Form, Input, Button} from '../../styles/StyledComponents/formLogin'
import { loginGoogle, loginEmailPassword, loginFacebook } from "../../actions/actionLogin";
import { Link } from "react-router-dom";
const FormLogin = () => {
        const dispatch = useDispatch()
        const [ values, handleInputChange ] = useForm({
          email: '',
          password: ''
      })

      const {email,password} = values;

      const handleLogin = (e) => {
        e.preventDefault();
        dispatch(loginEmailPassword(email,password));
      }
      const handleFacebook= () => {
        dispatch(loginFacebook());
      }

        const handleGoogle = () => {
          dispatch(loginGoogle());
      }
  return (
    <div style={{ display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
    <Form  onSubmit={handleLogin}>
      <h2 style={{color: "#333435", fontFamily:"Noto Sans', sans-serif", fontWeight:"600", fontSize:"2rem"}}>Inicio de sesión</h2>
      <Input 
      type="email" 
      placeholder="Correo electronico"
      onChange={handleInputChange}
      name="email"
      value={email}
      />
      <Input type="password" 
      placeholder="Contraseña"
      name="password"
      value={password}
      onChange={handleInputChange} 
      />
      <Link style={{fontSize:"0.8rem", textAlign:"right", padding:"0px 20px"}} to="/registro">¿No tienes una cuenta?, regístrate aquí</Link>
      <Button type="submit" style={{margin:"0 auto"}}>Ingresar</Button>
    </Form>
    <Button
        style={{ margin: "15px 0", display:"flex", justifyContent:"center", background:"#3F51B5", color:"white"}}
        onClick={handleFacebook}
        ><img src="https://res.cloudinary.com/dhu6ga6hl/image/upload/v1642524270/amazzonas/qijmxlqedsvoe06d3xhp.png" alt="" width="25px"/>Iniciar con Facebook</Button>
        <Button 
        className="google"
        onClick={handleGoogle}
        style={{ display:"flex", justifyContent:"center", background: "white", color:"#333435", border:"1px solid gray" }}
        ><img src="https://img.icons8.com/color/16/000000/google-logo.png" style={{width:"25px"}} alt=""/>Iniciar con Google</Button>
    </div>
  );
};

export default FormLogin;
