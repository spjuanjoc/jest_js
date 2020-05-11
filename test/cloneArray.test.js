const cloneArray = require('../src/cloneArray')

test('clone an array', () => {
    const array = [1,2,3]
    expect(cloneArray(array)).toEqual(array)
    expect(cloneArray(array)).not.toBe(array) // it is a copy
})
