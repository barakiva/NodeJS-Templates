import request from 'supertest'
import {app} from '../src/app/index.js'
import chai from 'chai';
const assert = chai.assert;

describe('GET /hello', function() {
	it('responds with Hello', async function() {
		const response = await request(app)
			.get('/hello')
		assert.equal(response.status, 200);
		assert.equal(response.body.msg, 'Hello');
	});
});

