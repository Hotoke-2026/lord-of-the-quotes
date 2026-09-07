import { checkAnswer } from '../checkAnswer.ts'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import { getRandomQuoteInfo } from '../apiClient.ts'
import { useQuery } from '@tanstack/react-query'

const Quote = () => {
  const navigate = useNavigate()
  const [characterAnswer, setCharacterAnswer] = useState('')

  const {
    data: quoteInfo,
    isError,
    isPending,
    refetch,
  } = useQuery({ queryKey: ['quote'], queryFn: getRandomQuoteInfo })

  if (isPending) return <p>Loading...</p>
  if (isError) return <p>error</p>

  function handleChange(e) {
    setCharacterAnswer(e.target.value)
  }

  function handleSubmit(e) {
  e.preventDefault()
  const result = checkAnswer(characterAnswer, quoteInfo.character)

  if (result === 'correct') {
    navigate(`/character/${quoteInfo.characterId}`)
  } else if (result === 'jimothy') {
    alert('Jimothy is not a Lord of The Rings Character, he is a raccoon with a congenital spine deformity')
  } else {
    alert(`WRONG. Correct answer is: ${quoteInfo.character}`)
  }
}
  return (
    <div className="quote-card">
      <button className="get-quote-btn" onClick={() => refetch()}>Get Quote</button>
      <div className="quote-box">
        <p>{quoteInfo.quote}</p>
      </div>
      <h2 className="quote-label">Who said that?</h2>
      <form onSubmit={handleSubmit}>
        <label className="answer-row">
          Guess the character:{' '}
          <input
            className="answer-input"
            type="text"
            value={characterAnswer}
            onChange={handleChange}
          />
        </label>
        <button className="submit-btn" type="submit">Check Answer</button>
      </form>
    </div>
  )
}

export default Quote