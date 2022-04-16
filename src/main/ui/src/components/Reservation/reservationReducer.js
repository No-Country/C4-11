import { getDaysToBook } from "../../utils/date-wrangler";

export default function reducer (state, action){
  switch(action.type){
    case "PREV_DAY":
      return state.date.getDay() !== state.start.getDay()
        ? getDaysToBook(state.date, -1)
        : {...state, date: state.end};
    case "NEXT_DAY":
      return state.date.getDay() !== state.end.getDay()
        ? getDaysToBook(state.date, 1)
        : {...state, date: state.start};
    case "TODAY":
      return getDaysToBook(new Date)
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}