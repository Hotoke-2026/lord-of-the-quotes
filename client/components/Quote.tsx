import { useState } from 'react'
import { getGreeting, getRandomQuoteInfo } from '../apiClient.ts'
import { useQuery } from '@tanstack/react-query'

const Quote = () => {

  const [characterAnswer, setCharacterAnswer] = useState("")
  const [quote, setQuote] = useState({ character: '', quote: ''})

  const{
    data: quoteInfo,
    isError,
    isPending,
    refetch,
  } = useQuery({queryKey: ['quote', 'character'], queryFn: getRandomQuoteInfo})
  if (isPending) return <p>Loading...</p>
  if(isError) return ('error')

  function handleChange(e){
    setCharacterAnswer(e.target.value)
    // console.log({characterAnswer})
  }

  function handleSubmit(e){
    e.preventDefault()
     console.log("correct answer:")
    console.log(quoteInfo.character)
    if(characterAnswer === quoteInfo.character){alert('correct!')}
    else if (characterAnswer==="Jimothy"){alert('Jimothy is not a Lord of The Rings Character, he is a raccoon with a congenital spine deformity')}
    else alert(`WRONG. Correct answer is: ${quoteInfo.character}`)
  }

  async function handleGetQuote() {
    refetch()
  }

  return (
    <>
    <div className="quote-card">
      {}
      <button className="get-quote-btn" onClick={handleGetQuote}>Get Quote</button>
      <div className="quote-box">
        <p>{quoteInfo.quote}</p>
      </div>
      <h2 className="quote-label">Who said that? </h2>  
      <form onSubmit={handleSubmit}>
        <label className="answer-row">Guess the character:{"  "}
        <input className="answer-input" type="text" value={characterAnswer} onChange={handleChange}></input>
        </label>
          <button className="submit-btn" type = "submit">Check Answer</button>
      </form>
      <p></p>
      </div>
    
    </>
  )
}

export default Quote
