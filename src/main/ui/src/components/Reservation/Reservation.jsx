import { useReducer } from "react"
import { getDaysToBook } from "../../utils/date-wrangler"
import reducer from "./reservationReducer"
import { month, sessions } from "../../static.json"

export default function Reservation({ date }) {
  const [bookingDays, dispatch] = useReducer(reducer, date, getDaysToBook)

  // console.log(bookingDays)
  return (
    <div>
      <div className="seats">
        <label htmlFor="seats">N° de asientos Asientos</label>
        <input type="text" placeholder="Cantidad de comensales" />
      </div>
      <p>
        <button className="btn"
          onClick={() => dispatch({ type: "PREV_DAY" })}
        >
          <span>Prev</span>
        </button>
        <button className="btn"
          onClick={() => dispatch({ type: "TODAY" })}
        >
          <span>Today</span>
        </button>
        <button className="btn"
          onClick={() => dispatch({ type: "NEXT_DAY" })}
        >
          <span>Next</span>
        </button>
      </p>
      <div>
        <p>
          <span>{bookingDays.start.getDate()}</span>
          <span> {month[bookingDays.start.getMonth()]}</span>
        </p>
        <p>
          <span>{bookingDays.date.getDate()}</span>
          <span> {month[bookingDays.date.getMonth()]}</span>
        </p>
        <p>
          <span>{bookingDays.end.getDate()}</span>
          <span> {month[bookingDays.end.getMonth()]}</span>
        </p>
      </div>
      <div>
        <select value={sessions[0]}>
          {sessions.map((s, i) =>
            <option value={i}>{s}</option>
          )}
        </select>
      </div>
    </div>
  )
}