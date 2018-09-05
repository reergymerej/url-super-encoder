import * as app from './index'

const key = [
  'foo',
  'bar',
  'baz',
  'quux',
]

describe('encode', () => {
  it('should work', () => {
    expect(app.encode({
      foo: false,
      bar: true,
      baz: false,
      quux: true,
    }, key)).toBe('0101')

    // value order doesn't matter
    expect(app.encode({
      bar: true,
      baz: false,
      foo: false,
      quux: true,
    }, key)).toBe('0101')
  })

  it('should default missing values', () => {
    expect(app.encode({
      bar: true,
    }, key)).toBe('0100')
  })

  it('should throw for values not in key', () => {
    expect(() => {
      app.encode({
        bar: true,
        bingo: false,
      }, key)
    }).toThrow(/bingo.+missing/)
  })
})
