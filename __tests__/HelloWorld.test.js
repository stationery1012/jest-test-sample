var hello = require('../HelloWorld.js')

describe('hello()', () => {
  it('equal 1', () => {
    expect(1).toBe(1)
  })
  it('正常系', () => {
    console.log(hello('たぬき'))
    expect(hello('たぬき')).toBe('Hello たぬき !')
  })
})
