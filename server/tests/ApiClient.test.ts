import { describe, it, expect } from 'vitest'
import nock from 'nock'
import { getQuotes } from '../ExternalApiClient'
import { API_HOST } from '../../env'

describe('getQuotes', () => {
  it('returns quotes from the external API', async () => {
    const mockQuotes = {
      docs: [{ id: '1', dialog: 'You shall not pass!' }],
    }

    const baseUrl = API_HOST.replace(/\/$/, '')

    nock(baseUrl)
      .get('/quote')
      .reply(200, mockQuotes)

    const result = await getQuotes()
    expect(result).toEqual(mockQuotes)
  })
})