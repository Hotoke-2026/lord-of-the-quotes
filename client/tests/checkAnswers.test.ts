import { describe, it, expect } from 'vitest'
import { checkAnswer } from '../checkAnswer.ts'

describe('checkAnswer', () => {
  it('returns "correct" when the answer matches the character', () => {
    const result = checkAnswer('Faramir', 'Faramir')
    expect(result).toBe('correct')
  })

  it('returns "jimothy" for the Jimothy easter egg', () => {
    const result = checkAnswer('Jimothy', 'Faramir')
    expect(result).toBe('jimothy')
  })

  it('returns "wrong" for an incorrect answer', () => {
    const result = checkAnswer('Gandalf', 'Faramir')
    expect(result).toBe('wrong')
  })
})