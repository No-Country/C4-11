import React from 'react';
import {Label, Input, IconVal, ErrorMessage, GroupInput} from "../helper/Form";
import { faCheckCircle, faTimesCircle} from '@fortawesome/free-solid-svg-icons';

const InputUser = ({estado, cambiarEstado, label, placeholder, type, name, error, expresionRegular, funcion}) => {

  const onChange = (e) => {
    cambiarEstado({...estado, campo: e.target.value});
  }
  const validacion = () => {
    if(expresionRegular){
      if(expresionRegular.test(estado.campo)){
          cambiarEstado({...estado, valido: 'true'})
      }
      else{
        cambiarEstado({...estado, valido: 'false'})
      }
    }
    if(funcion){
      funcion();
    };
  }

  return (
    <div>
        <Label htmlFor={name} valido={estado.valido}>{label}</Label>
          <GroupInput>
            <Input 
            type={type} 
            placeholder={placeholder} 
            id={name}
            value={estado.campo}
            onChange={onChange}
            onKeyUp={validacion}
            onBlur={validacion}
            valido={estado.valido}
            />
            <IconVal 
            icon={estado.valido === 'true' ? faCheckCircle : faTimesCircle} 
            valido={estado.valido}/>
          </GroupInput>
          <ErrorMessage valido={estado.valido}>{error}
        </ErrorMessage>
    </div>
  )
}

export default InputUser