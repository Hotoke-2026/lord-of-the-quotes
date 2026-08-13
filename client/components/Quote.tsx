import { useState } from 'react'
import { getGreeting, getRandomQuoteInfo } from '../apiClient.ts'
import { useQuery } from '@tanstack/react-query'

const Quote = () => {
  //get random quote ("get quote" button generates quote)
  //display quote 
  //user input form -done!
  //submit button checks input against answer (hardcoded)
  //get answer from API query

  const [count, setCount] = useState(0)
  const [characterAnswer, setCharacterAnswer] = useState("")
  const [quote, setQuote] = useState({ character: '', quote: ''})

  // const {
  //   data: greeting,
  //   isError,
  //   isPending,
  // } = useQuery({ queryKey: ['greeting', count], queryFn: getGreeting })

  // if (isPending) return <p>Loading...</p>

  const{
    data: quoteInfo,
    isError,
    isPending,
  } = useQuery({queryKey: ['quote', 'character'], queryFn: getRandomQuoteInfo})
  if (isPending) return <p>Loading...</p>
  if(isError) return ('error')

  function handleChange(e){
    setCharacterAnswer(e.target.value)
    console.log({characterAnswer})
  }

  function handleSubmit(e){
    e.preventDefault()
    alert(characterAnswer)
  }

  async function handleGetQuote() {const data = await getRandomQuoteInfo()
  setQuote(data)}

  return (
    <>
      {/* {count}
      <h1 className="text-3xl font-bold underline">{greeting}</h1>
      {isError && (
        <p style={{ color: 'red' }}>
          There was an error retrieving the greeting.
        </p>
      )} */}
      <button onClick={handleGetQuote}>Get Quote</button>
      <p>{quote.quote}</p>
      <h2>Who said that? </h2>   
      <form onSubmit={handleSubmit}>
        <label>Guess the character:{"  "}
          <input type="text" value={characterAnswer} onChange={handleChange}></input>
        </label>
        <button type = "submit">Check Answer</button>
      </form>
      <p></p>
    
    </>
  )
}

export default Quote
