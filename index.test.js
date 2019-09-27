const numberToRoman = require('./index')

describe('Kata Roman Numerals', () => {
  const TEST_LIST = [
    {
      title: 'should convert 1 to I',
      input: 1,
      expected: 'I'
    }
  ]

  TEST_LIST.forEach(sample => {
    it(sample.title, () => {
      const result = numberToRoman(sample.input)

      expect(result).toBe(sample.expected)
    })
  })
})
