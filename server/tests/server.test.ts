import { describe, it, expect } from 'vitest'
import supertest from 'supertest'
import server from '../server.ts'

describe('GET /api/v1/quoteinfo', () => {
  it('returns a quote with a 200 status', async () => {
    const response = await supertest(server).get('/api/v1/quoteinfo')

    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty('quote')
    expect(response.body).toHaveProperty('character')
    expect(response.body).toHaveProperty('characterId')
  }, 10000)
})