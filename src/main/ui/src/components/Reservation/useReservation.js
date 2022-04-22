import { useReducer } from "react";
import { getDaysToBook, getTables } from "../../utils/date-wrangler";

function reducer(state, action) {
  switch (action.type) {
    case "SELECT_DAY":
      return { ...state, date: action.payload }
    case "SET_SESSION":
      // Si zone está seteado y cambio session debería acutalizar la disponibilidad
      return { ...state, session: action.payload }
    case "SET_SEATS":
      return {
        ...state,
        seats: action.payload
      }
    case "SET_ZONE":
      return {
        ...state,
        zone: action.payload,
        tables: getTables(action.payload)
      }
    case "TODAY":
      return getDaysToBook(new Date)
    case "SET_CHOICE":
      return { ...state, choiceTable: action.payload }
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}

export const useReservation = (date) => {
  const [bookingDay, dispatch] = useReducer(reducer, date, getDaysToBook)
  const setSeats = e => {
    dispatch({ type: "SET_SEATS", payload: e.target.value })
  }
  const setSession = e => {
    dispatch({ type: "SET_SESSION", payload: e.target.value })
  }

  const setZone = e => {
    dispatch({ type: "SET_ZONE", payload: e.target.value })
  }
  const setChoice = i => { dispatch({ type: "SET_CHOICE", payload: i }) }
  const setDay = i => { dispatch({ type: "SELECT_DAY", payload: i }) }

  const showReserva = () => { console.log("estamos en la reserva") };

  return { bookingDay, setSeats, setSession, setZone, showReserva, setChoice, setDay }
}