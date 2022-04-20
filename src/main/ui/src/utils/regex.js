export const textCheck = {
  cardNumber: undefined,
  numberDayExp: undefined,
  numberMonthExp: undefined,
  fullName: /^[a-zA-ZÀ-ÿ\s]{5,16}$/,
  id: /^[0-9]{5,9}$/,
  email: /^[a-zA-Z0-9.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/,
}