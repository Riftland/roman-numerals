const numberToRoman = require('./index')

describe('Kata Roman Numerals', () => {
  const TEST_LIST = [
    {
      title: 'should convert 1 to I',
      input: 1,
      expected: 'I'
    },
    {
      title: 'should convert 2 to II',
      input: 2,
      expected: 'II'
    },
    {
      title: 'should convert 3 to III',
      input: 3,
      expected: 'III'
    },
    {
      title: 'should convert 4 to IV',
      input: 4,
      expected: 'IV'
    },
    {
      title: 'should convert 5 to V',
      input: 5,
      expected: 'V'
    },
    {
      title: 'should convert 6 to VI',
      input: 6,
      expected: 'VI'
    },
    {
      title: 'should convert 7 to VII',
      input: 7,
      expected: 'VII'
    },
    {
      title: 'should convert 8 to VIII',
      input: 8,
      expected: 'VIII'
    },
  ]

  TEST_LIST.forEach(sample => {
    it(sample.title, () => {
      const result = numberToRoman(sample.input)

      expect(result).toBe(sample.expected)
    })
  })
})
