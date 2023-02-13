export const maskNumber = (phoneNumber) => {
  if (phoneNumber) {
    return `${phoneNumber.slice(0, 1)} ${phoneNumber.slice(1, 4)} XXX XX XX`
  }
}

export const convertPhoneNum = (phoneNumber) => {
  if (phoneNumber) {
    return `${phoneNumber.slice(0, 1)} ${phoneNumber.slice(
      1,
      4
    )} ${phoneNumber.slice(4, 7)} ${phoneNumber.slice(
      7,
      9
    )} ${phoneNumber.slice(9, 11)}`
  }
}
