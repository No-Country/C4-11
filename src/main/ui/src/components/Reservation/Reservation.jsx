import { useReducer } from "react"
import { getDaysToBook } from "../../utils/date-wrangler"
import reducer from "./reservationReducer"

export default function Reservation({date}) {
  const [bookingDays, setBookingDays] = useReducer(reducer,date,getDaysToBook)

  console.log(bookingDays)
  return <h1>Reservation Page</h1>
}