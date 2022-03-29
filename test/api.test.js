const {cleanString} = require('../src/p1')

console.log(p1("7-623"))
console.log(p1("..2965a"))

test('should remove non numeric characters from string', () => {
  expect(cleanString("7-623")).toBe(7623);
});