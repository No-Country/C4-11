import { useReducer } from "react";
// import {textCheck} from '../../utils/regex'

const initialState = {
  cardNumber: undefined,
  expMonth: undefined,
  expYear: undefined,
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
        case "SET_CARD_NUMBER":
          return { ...prevState, cardNumber: action.payload }
        case "SET_EXPIRE_MONTH":
          return { ...prevState, expMonth: action.payload }
        case "SET_EXPIRE_YEAR":
          return { ...prevState, expYear: action.payload}
        case "SET_FULLNAME":
          return { ...prevState, fullName: action.payload }
        case "SET_EMAIL":
          return { ...prevState, email: action.payload }
        case "SET_ID_NUMBER":
          return { ...prevState, idNumber: action.payload}
        case "CLEAN_ERRORS":
          return { ...prevState, errors: [] };
        default:
          throw new Error(`Unknown action type: ${action.type}`);
      }
    }
    , initialState
  );

  const cleanErrors = () => dispatch({ type: "CLEAN_ERRORS" })
  const setCardNumber = e => dispatch({ type: "SET_CARD_NUMBER", payload: e.target.value });
  const setExpMonth = e => dispatch({ type: "SET_EXPIRE_MONTH", payload: e.target.value });
  const setExpYear = e => dispatch({ type: "SET_EXPIRE_YEAR", payload: e.target.value });
  const setFullName = e => dispatch({ type: "SET_FULLNAME", payload: e.target.value });
  const setIdNumber = e => dispatch({type: "SET_ID_NUMBER", payload: e.target.value});
  const setEmail = e => dispatch({ type: "SET_EMAIL", payload: e.target.value });

  const validateInput = fn => {
    const error = fn(state.value)
    if (error !== null) {
      dispatch({ type: "ADD_ERROR", error: error })
    }
  }

  return { state, setCardNumber, setExpMonth, setExpYear, setFullName, setIdNumber, setEmail, validateInput, cleanErrors }
}