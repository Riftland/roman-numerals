
const numberToRoman = number => {
  let roman = ''
  const conversionTable = {
    '1': 'I',
    '2': 'II',
    '3': 'III',
    '4': 'IV',
    '5': 'V',
    '9': 'IX'
  }
  if (number > 5 && number < 9) {
    number -= 5
    roman += conversionTable[5]
    numberToRoman(number)
  }
  return `${roman}${conversionTable[number]}`
}

module.exports = numberToRoman