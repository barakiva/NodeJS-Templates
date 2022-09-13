import {add, subtract} from '../src/app/calculator.js'
import chai from 'chai';

const assert = chai.assert;

describe('Addition', () => {
	it('Adding 1 and 3 results in 4', ()=> {
		assert.equal(add(1,3), 4)
	})
})

// test('5 minus 3 equals 2', () => {
// 	expect(subtract(5,3)).toBe(2)
// })

