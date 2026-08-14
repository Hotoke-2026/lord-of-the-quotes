import {describe, it, expect} from 'vitest';
import supertest from 'supertest';
import server from '../server';
import nock from 'nock';

const scope = nock('https://the-one-api.dev').get('/v2/quote').reply(200, {
    "_id": "5cd96e05de30eff6ebcce961",
    "dialog": "What were you thinking Peregrin Took? What service can a Hobbit offer such a great lord of men?",
    "movie": "5cd95395de30eff6ebccde5d",
    "character": "5cd99d4bde30eff6ebccfe2e",
    "id": "5cd96e05de30eff6ebcce961"
})

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