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
      title: 'should convert 5 to V',
      input: 5,
      expected: 'V'
    }
  ]

  TEST_LIST.forEach(sample => {
    it(sample.title, () => {
      const result = numberToRoman(sample.input)

      expect(result).toBe(sample.expected)
    })
  })
})
