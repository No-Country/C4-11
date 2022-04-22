import { getDaysToBook, getTables } from "../../utils/date-wrangler";

export default function reducer(state, action) {
  switch (action.type) {
    case "SET_SEATS":
      return {
        ...state,
        seats: action.payload
      }
    case "SET_SESSION":
      return {
        ...state,
        session: action.payload,
        zone: undefined,
        date: undefined,
        choiceTable: undefined
      }
    case "SET_ZONE":
      return {
        ...state,
        date: undefined,
        zone: action.payload,
        choiceTable: undefined
      }
    case "SELECT_DAY":
      return {
        ...state,
        tables: getTables(action.payload),
        date: state.days[action.payload]
      }
    case "SET_CHOICE":
      return {
        ...state,
        choiceTable: action.payload
      }
    case "TODAY":
      return getDaysToBook(new Date)
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}