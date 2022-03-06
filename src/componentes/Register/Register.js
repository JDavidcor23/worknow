import React from "react";
import Footer from "../home/Footer";
import FormRegister from "./FormRegister";
import { Icon, DivIcons, ButtonTypesForm } from "../../styles/StyledComponents/IconsRegister";
const Register = () => {
  const [form, setForm] = React.useState("");
  return (
    <>
    {form.length < 1 &&
      <DivIcons>
        <h2
          style={{ fontSize: "2rem", color: "#087DA1", margin: "0 0 50px 0" }}
        >
          ¿Que tipo de usuario eres?
        </h2>
        <div style={{ display: "flex" }}>
          <ButtonTypesForm onClick={()=>setForm("work")} style={{ margin: "0 150px 0 0" }}>
            <Icon>

              <img
                style={{ width: "110px", height: "140px", borderRadius: "50%" }}
                src="https://res.cloudinary.com/dhu6ga6hl/image/upload/v1646335559/work-now-images/sjjwnc6hfjzmzvi2spxi.png"
                alt="logo"
                />
            </Icon>
          </ButtonTypesForm>
          <ButtonTypesForm onClick={()=>setForm("customer")}>
            <Icon>
              <img
                style={{ width: "110px", height: "140px", borderRadius: "50%" }}
                src="https://res.cloudinary.com/dhu6ga6hl/image/upload/v1646335559/work-now-images/vnbqtxabazrgcnwzoywj.png"
                alt="logo"
              />
            </Icon>
          </ButtonTypesForm>
        </div>
      </DivIcons>
    }
    {form === "work" &&
    <div style={{ display: "flex", boxShadow:"1px 0px 5px grey", padding:"20px" }}>
        <img
          style={{ height: "80vh", width:"50%" }}
          src="https://res.cloudinary.com/dhu6ga6hl/image/upload/v1643501713/amazzonas/schwesjhitavlxeazvye.svg"
          alt="logo"
        />
        <FormRegister />
        </div> 
      }
    {form === "customer" &&
    <div style={{ display: "flex", boxShadow:"1px 0px 5px grey", padding:"20px" }}>
        <img
          style={{ height: "80vh", width:"50%" }}
          src="https://res.cloudinary.com/dhu6ga6hl/image/upload/v1643501713/amazzonas/schwesjhitavlxeazvye.svg"
          alt="logo"
        />
        <FormRegister />
    </div> 
    }  
      <Footer />
    </>
  );
};

export default Register;
