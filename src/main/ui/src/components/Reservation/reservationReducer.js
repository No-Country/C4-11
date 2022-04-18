import { getDaysToBook, getTables } from "../../utils/date-wrangler";

export default function reducer(state, action) {
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
      return {...state, choiceTable: action.payload}
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}