import { useReducer } from "react";
// import {textCheck} from '../../utils/regex'

const initialState = {
  cardNumber: undefined,
  expire: undefined,      // array de 2 campos
  ccv: undefined,
  fullName: undefined,
  type: ["DNI", "ID", "LE", "LL"],
  idNumber: undefined,
  email: undefined,
  errors: []
}

export const useCard = () => {
  const [state, dispatch] = useReducer(
    (prevState, action) => {
      switch (action.type) {
        case "CLEAN_ERRORS":
          return { ...prevState, errors: [] };
        default:
          throw new Error(`Unknown action type: ${action.type}`);
      }
    }
    , initialState
  );

  const cleanErrors = () => dispatch({ type: "CLEAN_ERRORS" })

  // const validateInput = fn => {
  //   const error = fn(state.value)
  //   if (error !==null){
  //     dispatch({type: "ADD_ERROR", error: error})
  //   }
  // }

  return { state, cleanErrors }
}