import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle} from '@fortawesome/free-solid-svg-icons';

const InputLogin= ({label, placeholder, type, error, expresionRegular, name, estado, cambiarEstado}) => {
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
  }
  return (
        <div className='inputClass'>
            <label htmlFor={name}>{label}</label>
            <div>
                <input 
                type={type} 
                placeholder={placeholder} 
                id={name}
                value={estado.campo}
                onChange={onChange}
                onKeyUp={validacion}
                onBlur={validacion}
                valido={estado.valido}/> 
                <FontAwesomeIcon className='fontAwesome' icon={faCheckCircle} />
            </div>
                <p>{error}</p>
        </div>
  )
}

export default InputLogin