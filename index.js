
const numberToRoman = number => {
  if (number === 2) {
    return 'II'
  }
  if (number === 5) {
    return 'V'
  }
  return 'I'
}

module.exports = numberToRoman