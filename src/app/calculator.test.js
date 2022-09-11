import {add, subtract} from './calculator.js'

test('add 1 and 3, get 4', () => {
	expect(add(1,3)).toBe(4)
})

test('5 minus 3 equals 2', () => {
	expect(subtract(5,3)).toBe(2)
})