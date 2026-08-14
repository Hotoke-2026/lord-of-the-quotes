import {describe, it, expect} from 'vitest';
import supertest from 'supertest';
import server from '../server';
import nock from 'nock';


const quoteResponse = {
    "docs": [
        {
            "_id": "5cd96e05de30eff6ebcce7e9",
            "dialog": "Deagol!!",
            "movie": "5cd95395de30eff6ebccde5d",
            "character": "5cd99d4bde30eff6ebccfe9e",
            "id": "5cd96e05de30eff6ebcce7e9"
        },
        {
            "_id": "5cd96e05de30eff6ebcce7ea",
            "dialog": "Deagol!",
            "movie": "5cd95395de30eff6ebccde5d",
            "character": "5cd99d4bde30eff6ebccfe9e",
            "id": "5cd96e05de30eff6ebcce7ea"
        }
    ],
    "total": 2383,
    "limit": 2,
    "offset": 0,
    "page": 1,
    "pages": 1192
}

const characterResponse = {
    "docs": [
        {
            "_id": "5cd99d4bde30eff6ebccfe9e",
            "name": "Gollum",
            "wikiUrl": "http://lotr.wikia.com//wiki/Gollum",
            "race": "Hobbit",
            "birth": "TA 2430",
            "gender": "Male",
            "death": "March 25 ,3019",
            "hair": null,
            "height": null,
            "realm": null,
            "spouse": null
        }
    ],
    "total": 1,
    "limit": 1000,
    "offset": 0,
    "page": 1,
    "pages": 1
}

nock('https://the-one-api.dev').get('/v2/quote').matchHeader('authorization', `Bearer ${process.env.API_KEY}`).reply(200, quoteResponse)
nock('https://the-one-api.dev').get('/v2/character/5cd99d4bde30eff6ebccfe9e').matchHeader('authorization', `Bearer ${process.env.API_KEY}`).reply(200, characterResponse)



describe('GET /api/v1/quoteinfo', () => {
  it('should return a 200 status code, and have a quote property and character property', async () => {
    nock('https://the-one-api.dev').get('/v2/quote').matchHeader('authorization', `Bearer ${process.env.API_KEY}`).reply(200, quoteResponse)
    nock('https://the-one-api.dev').get('/v2/character/5cd99d4bde30eff6ebccfe9e').matchHeader('authorization', `Bearer ${process.env.API_KEY}`).reply(200, characterResponse)
    const response = await supertest(server).get('/api/v1/quoteinfo');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('quote');
    expect(response.body).toHaveProperty('character');
  });
});