import * as Path from 'node:path'
import express from 'express'
import cors, { CorsOptions } from 'cors'
import {getQuotes, getCharacterById} from './ExternalApiClient'
import type { ExternalAPICharacter, ExternalAPICharacters, ExternalAPIQuote, ExternalAPIQuotes, quoteInfo} from '../models/lotr.ts'

const server = express()

server.get('/api/v1/quoteinfo', async (req, res) => {
  try {
    const quotes = await getQuotes()
    console.log('Quotes from API:', quotes)
    const randomQuote = quotes.docs[Math.floor(Math.random() * quotes.docs.length)]
    console.log('Random Quote:', randomQuote)
    const characterFromQuote = await getCharacterById(randomQuote.character) as ExternalAPICharacters
    const characterNameFromQuote = characterFromQuote.docs[0].name
    const quoteInfo: quoteInfo = {
      character: characterNameFromQuote,
      quote: randomQuote.dialog
    }
    console.log('Quote Info:', quoteInfo)
    res.json(quoteInfo)

  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message })
    } else {
      res.status(500).json({ error: 'An unknown server error has occurred' })
    }
  }
  
})

server.use(express.json())
server.use(cors('*' as CorsOptions))

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
