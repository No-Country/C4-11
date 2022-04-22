// ! Al llamar al componente lleva como prop el "Date()" actual
// ? {/* <Reservation date={new Date()} /> */}
import tableMap from "../Reservation/img/tableMap.png"
import React, { useReducer } from "react"
import { getDaysToBook } from "../../utils/date-wrangler"
import reducer from "./reservationReducer"
import { month, sessions, zones } from "../../static.json"
import { Link } from "react-router-dom"
import { Calendar, BotonMesas, ContenedorBotonReserva, ButtonCalendar, Imagen, ContenedorImagen, BotonReservar, SelectSession, Label, Container, ChoiceContainerUno, TituloH3, TituloH1, ChoiceContainerDos, ContenedorPicker, ChoiceContainerTres, Bottom } from "./Elements-Reservation/Elements"

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
  const showReserva = () => { console.log("estamos en la reserva") };
  return (
    <Container >
      <ContenedorPicker >
        <ChoiceContainerUno >
          <Label htmlFor="seats">Asientos </Label>
          <input id="seats" type="text" placeholder={bookingDay.seats}
            onBlur={setSeats} />
        </ChoiceContainerUno>
        <ChoiceContainerDos >
          <Label htmlFor="session">Session </Label>
          <SelectSession className="select-session " id="session" value={bookingDay.session} onChange={setSession}>
            {sessions.map((s, i) =>
              <option key={i} value={i}>{s}</option>
            )}
          </SelectSession>
        </ChoiceContainerDos>
        <ChoiceContainerTres >
          <Label htmlFor="zone">Zone</Label>
          <SelectSession id="zone" value={bookingDay.zone} onChange={setZone}>
            <option value="">Elegir</option>
            {zones.map((z, i) =>
              <option key={i} value={i}>{z}</option>
            )}
          </SelectSession>
        </ChoiceContainerTres>
      </ContenedorPicker>
      <Calendar className="">
        {
          bookingDay.days.map((day, i) => (
            <ButtonCalendar key={i} className="card "
              onClick={() => dispatch({ type: "SELECT_DAY", payload: i })}            >
              <p style={i === bookingDay.date ? { fontWeight: "bolder" } : null}>{day.getDate()}</p>
              <p>{month[day.getMonth()]}</p>
            </ButtonCalendar>
          ))
        }
      </Calendar>
      <div className="free-tables">
        <TituloH3>Mesas disponibles</TituloH3>
        {
          bookingDay.tables &&
          bookingDay.tables.map((table, i) => table &&
            (<BotonMesas key={i}
              onClick={() => dispatch({ type: "SET_CHOICE", payload: i })}
            >{i}</BotonMesas>)
          )
        }
      </div>
      <ContenedorBotonReserva>
        {bookingDay.choiceTable >= 0 &&
          <Link to="/card">
            <BotonReservar onClick={showReserva}> Reservar Mesa</BotonReservar>
          </Link>
        }
      </ContenedorBotonReserva>
      <ContenedorImagen className="map ">
        {bookingDay.zone
          ? <Label>mapa {zones[bookingDay.zone]}</Label>
          : <Imagen src={tableMap} alt="foto" />
        }
      </ContenedorImagen>
      <Bottom></Bottom>
    </Container>
  )
}