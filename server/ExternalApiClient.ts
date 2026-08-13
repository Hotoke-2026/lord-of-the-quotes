//TYPE IMPORTS
import type { ExternalAPIQuotes, ExternalAPIQuote, ExternalAPICharacter, ExternalAPICharacters} from '../models/lotr.ts'
//TYPE IMPORTS

import superagent from 'superagent'
import { API_HOST, API_KEY } from '../env.ts'


export async function getQuotes(): Promise<ExternalAPIQuotes> {
  console.log('API_HOST:', process.env.API_HOST)
  const req = await superagent.get(`${API_HOST}quote`)
    .set('Authorization', `Bearer ${API_KEY}`)
  return req.body
}

export async function getCharacterById(id:string): Promise<ExternalAPICharacters> {
  const req = await superagent.get(`${API_HOST}character/${id}`)
    .set('Authorization', `Bearer ${API_KEY}`)
  return req.body
}