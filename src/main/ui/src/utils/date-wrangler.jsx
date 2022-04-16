export default function addDays(date, daysToAdd) {
  const clone = new Date(date.getTime());
  clone.setDate(clone.getDate() + daysToAdd);
  return clone;
}

export function getDaysToBook(forDate, daysOffset = 0) {
  const date = addDays(forDate, daysOffset);
  return {
    date,
    start: new Date(),
    end: addDays(new Date(), 6)
  }
}