export const capitalize = (string) => {
  const firstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1)
  return string.split(' ').map(el => firstLetter(el)).join(' ')
}
