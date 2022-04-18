// ! Al llamar al componente lleva como prop el "Date()" actual
// ? {/* <Reservation date={new Date()} /> */}
import { useReducer } from "react"
import { getDaysToBook } from "../../utils/date-wrangler"
import reducer from "./reservationReducer"
import { month, sessions, zones } from "../../static.json"

export default function Reservation({ date }) {
  const [bookingDay, dispatch] = useReducer(reducer, date, getDaysToBook)

  console.log(bookingDay)
  const setSeats = e => {
    dispatch({ type: "SET_SEATS", payload: e.target.value })
  }
  const setSession = e => {
    dispatch({ type: "SET_SESSION", payload: e.target.value })
  }

  const setZone = e => {
    dispatch({ type: "SET_ZONE", payload: e.target.value })
  }

  const showReserva = () =>{ console.log("estamos en la reserva")}
  return (
    <div>
      <div className="seats">
        <label htmlFor="seats">Asientos </label>
        <input id="seats" type="text" placeholder={bookingDay.seats}
          onBlur={setSeats} />
      </div>
      <div>
        <label htmlFor="session">Session </label>
        <select id="session" value={bookingDay.session} onChange={setSession}>
          {sessions.map((s, i) =>
            <option key={i} value={i}>{s}</option>
          )}
        </select>
      </div>
      <div>
        <label htmlFor="zone">Zone</label>
        <select id="zone" value={bookingDay.zone} onChange={setZone}>
          <option value="">Elegir</option>
          {zones.map((z, i) =>
            <option key={i} value={i}>{z}</option>
          )}
        </select>
      </div>
      <div>
        {
          bookingDay.days.map((day, i) => (
            <button key={i} className="card"
              style={{ width: 60, height: 60, margin: 3, border: 0, padding: 0, borderRadius: 10 }}
              onClick={() => dispatch({ type: "SELECT_DAY", payload: i })}
            >
              <p style={i === bookingDay.date ? { fontWeight: "bolder" } : null}>{day.getDate()}</p>
              <p>{month[day.getMonth()]}</p>
            </button>
          ))
        }
      </div>
      <div className="free-tables">
        <h3>Mesas disponibles</h3>
        {
          bookingDay.tables &&
          bookingDay.tables.map((table, i) => table &&
            (<button key={i}
              onClick={ ()=>dispatch({type: "SET_CHOICE", payload: i})}
            >{i}</button>)
          )
        }
      </div>
      {/* // TODO: no mostrar el button mienstras no este seleccionada una mesa libre */}
      <div className="reservar">
        <button onClick={showReserva}> Reservar</button>
      </div>
      <div className="map">
        {bookingDay.zone
          ? <h1>mapa {zones[bookingDay.zone]}</h1>
          : <h1>Mapa principal</h1>
        }
      </div>
    </div>
  )
}