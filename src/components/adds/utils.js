const dropHMS = (date) => {
  date.setHours(0)
  date.setMinutes(0)
  date.setSeconds(0, 0)
}

function createdOn(date, timeZone) {
  const today = new Date()
  const yesterday = new Date()
  const roomLastMessageDate = new Date(date)

  yesterday.setDate(today.getDate() - 1)
  const adDate =
    timeZone === 'en'
      ? new Intl.DateTimeFormat('en').format(roomLastMessageDate)
      : new Intl.DateTimeFormat('ru').format(roomLastMessageDate)

  dropHMS(today)
  dropHMS(yesterday)
  dropHMS(roomLastMessageDate)

  if (date) {
    if (today.getTime() === roomLastMessageDate.getTime()) {
      return today
    }
    if (yesterday.getTime() === roomLastMessageDate.getTime()) {
      return yesterday
    }
    return adDate
  }
}

export default createdOn
