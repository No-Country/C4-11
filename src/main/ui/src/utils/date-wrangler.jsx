import { seats } from '../static.json';
import { reservas } from '../reservas.json';

export function getTables(zoneId) {
  const completeSeats =  Array.from({ length: seats[zoneId].length }, () => true)
  const reservaZona = reservas.filter(s => s.zone == zoneId)
  reservaZona.forEach(r => completeSeats[r.seat] = false)
  return completeSeats;
}

export default function addDays(date, daysToAdd) {
  const clone = new Date(date.getTime());
  clone.setDate(clone.getDate() + daysToAdd);
  return clone;
}

export function getDaysToBook(forDate, daysOffset = 0) {
  const date = addDays(forDate, daysOffset)
  const days = Array.from({ length: 7 }, (_, i) => addDays(forDate, i))
  return {
    date,
    days,
    seats: 0,
    session: 0,
    zone: undefined,
    tables: undefined,
    choiceTable: undefined
  }
}