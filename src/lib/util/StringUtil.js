
export const numberWithComma = str => str ? str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : str;