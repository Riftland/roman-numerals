
const numberToRoman = number => {
  let roman = ''
  const conversionTable = {
    '1': 'I',
    '2': 'II',
    '3': 'III',
    '5': 'V',
    '10': 'X'
  }
  if (number > 5 && number < 9) {
    number -= 5
    roman += conversionTable[5]
    numberToRoman(number)
  }
  if ((number + 1) % 5 === 0) {
    number = number + 1
    roman += conversionTable[1]
    numberToRoman(number)
  }
  if (number > 10) {
    number -= 10
    roman += conversionTable[10]
    numberToRoman(number)
  }
  return `${roman}${conversionTable[number]}`
}

module.exports = numberToRoman