import request from 'supertest'
import {app} from './index.js'

describe('GET /hello', function() {
	it('responds with Hello', async function() {
		const response = await request(app)
			.get('/hello')
		expect(response.status).toEqual(200);
		expect(response.body.msg).toEqual('Hello');
	});
});

