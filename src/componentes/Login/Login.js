import React from "react";
import FormLogin from "./FormLogin";
import Footer from "../home/Footer"

const Login = () => {
  return (
    <>
    <div style={{ display: "flex", boxShadow:"1px 0px 5px grey", padding:"20px" }}>
        <img
          style={{ height: "80vh", width:"50%" }}
          src="https://res.cloudinary.com/dhu6ga6hl/image/upload/v1643501713/amazzonas/schwesjhitavlxeazvye.svg"
          alt="logo"
        />
        <FormLogin />
      </div>
      <Footer/>
    </>
  );
};

export default Login;
