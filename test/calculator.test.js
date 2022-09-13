import {add, subtract} from '../src/app/calculator.js'
import chai from 'chai';

const assert = chai.assert;

describe('Addition', () => {
	it('Adding 1 and 3 results in 4', ()=> {
		assert.equal(add(1,3), 4)
	})
	it('Adding 9 and 100 results in 109', ()=> {
		assert.equal(add(9,100), 109)
	})
})

describe('Subtraction', () => {
	it('Subtracting 3 from 5 results in 2', ()=> {
		assert.equal(subtract(5,3), 2)
	})
})

