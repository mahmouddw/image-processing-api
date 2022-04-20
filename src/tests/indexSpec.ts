import supertest from 'supertest';
import app from '../index';

//testing for the endpoint
const request = supertest(app);
describe('Test endpoint responses', () => {
  it('gets the api endpoint', async () => {
    const response = await request.get('/image');
    expect(response.status).toBe(200);
  });
});
