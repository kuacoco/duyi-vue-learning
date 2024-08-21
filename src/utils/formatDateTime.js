export default function formatDateTime(dateTime, showTime = false) {
  const date = new Date(+dateTime)
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const day = date.getDate().toString().padStart(2, '0')

  if (showTime) {
    const hours = date.getHours().toString().padStart(2, '0')
    const minutes = date.getMinutes().toString().padStart(2, '0')
    const seconds = date.getSeconds().toString().padStart(2, '0')

    return `${date.getFullYear()}-${month}-${day} ${hours}:${minutes}:${seconds}`
  }

  return `${date.getFullYear()}-${month}-${day}`
}
