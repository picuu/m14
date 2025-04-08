const formatDate = (timestamp) => {
  const date = new Date(timestamp)

  // Get weekday
  const weekday = date.toLocaleDateString('en-US', { weekday: 'long' })

  // Get day of the month
  const day = date.getDate()

  // Get ordinal suffix
  const getOrdinal = (n) => {
    const s = ['th', 'st', 'nd', 'rd']
    const v = n % 100
    return n + (s[(v - 20) % 10] || s[v] || s[0])
  }

  return `${weekday}, ${getOrdinal(day)}`
}

export default formatDate
