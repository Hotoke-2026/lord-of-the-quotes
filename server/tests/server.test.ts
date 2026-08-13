import {describe, it, expect} from 'vitest';
import supertest from 'supertest';
import server from '../server';

describe('GET /api/v1/quoteinfo', () => {
  it('should return a 200 status code', async () => {
    const response = await supertest(server).get('/api/v1/quoteinfo');
    expect(response.status).toBe(200);
  });
  it('should return a JSON object with quote and character properties', async () => {
    const response = await supertest(server).get('/api/v1/quoteinfo');
    expect(response.body).toHaveProperty('quote');
    expect(response.body).toHaveProperty('character');
  });
});