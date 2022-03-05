import React from "react";
import FromAliado from "./FromAliado"; 
import {DivAliado, ImgDiv} from '../../styles/StyledComponents/FormAliado'
const Aliado = () => {
  return (
    <DivAliado>
      <ImgDiv
        src="https://res.cloudinary.com/dhu6ga6hl/image/upload/v1645147395/work-now/zzgg0bekzzyjk9eudjln.png"
        alt=""
      />
      <FromAliado />
    </DivAliado>
  );
};

export default Aliado;
