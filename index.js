
const numberToRoman = number => {

  let i = 0;
  let roman = ''

  const conversionTable = {
    '1': 'I'
  }

  for (let i = 0; i < number; i++) {
    roman += conversionTable[1]
  }

  return roman

  switch (number) {
    case 1:
      return 'I'
    case 2:
      return 'II'
    case 3:
      return 'III'
    case 4:
      return 'IV'
    case 5:
      return 'V'
    case 6:
      return 'VI'
  }
}

module.exports = numberToRoman