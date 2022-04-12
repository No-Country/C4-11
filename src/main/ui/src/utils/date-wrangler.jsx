export default function addDays(date, daysToAdd) {
  const clone = new Date(date.getTime());
  clone.setDate(clone.getDate() + daysToAdd);
  return clone
}

export function getDaysToBook(forDate, daysOffset = 0) {
  const date = addDays(forDate, daysOffset);
  // console.log(date)
  const day = date.getDay();

  // 5: cant de dias que se pueden reservar
  return {
    date,
    start: addDays(date, -day),
    end: addDays(date, 5 - day)
  }
}