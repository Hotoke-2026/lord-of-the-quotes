import request from 'superagent'
import type { quoteInfo} from '../models/lotr.ts'
const rootURL = new URL(`/api/v1`, document.baseURI)

export async function getGreeting() {
  const res = await request.get(`${rootURL}/greeting`)
  return res.body.greeting as string
}

export async function getRandomQuoteInfo(){
 
  const res = await request.get(`${rootURL}/quoteinfo`)
  return res.body as quoteInfo

}