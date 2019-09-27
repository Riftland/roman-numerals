
const numberToRoman = number => {
  let roman = ''
  const conversionTable = {
    '1': 'I',
    '2': 'II',
    '3': 'III',
    '4': 'IV',
    '5': 'V'
  }
  if (number > 5) {
    number -= 5
    roman += conversionTable[5]
    numberToRoman(number)
  }
  return `${roman}${conversionTable[number]}`
}

module.exports = numberToRoman