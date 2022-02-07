import React from "react";
import {useForm } from '../../hooks/useForm';  
import { useDispatch } from "react-redux";
import {Form, Input, Button} from '../../styles/StyledComponents/formLogin'
import { loginGoogle, loginEmailPassword, loginFacebook } from "../../actions/actionLogin";
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
    <div style={{width: "40%", display:"flex", flexDirection:"column", justifyContent:"center"}}>
    <Form  onSubmit={handleLogin}>
      <h2>INICIO DE SESION</h2>
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
      <Button type="submit">Enviar</Button>
    </Form>
    <button 
        style={{ margin: "10px 0", background:"#3F51B5", color:"white", width:"90%"}}
        onClick={handleFacebook}
        ><img src="https://res.cloudinary.com/dhu6ga6hl/image/upload/v1642524270/amazzonas/qijmxlqedsvoe06d3xhp.png" alt="" width="25px"/>Iniciar con Facebook</button>
        <button 
        className="google"
        onClick={handleGoogle}
        style={{ width: "90%" }}
        ><img src="https://img.icons8.com/color/16/000000/google-logo.png" alt=""/>Iniciar con Google</button>
    </div>
  );
};

export default FormLogin;
