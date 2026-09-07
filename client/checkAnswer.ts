export function checkAnswer(answer: string, correctCharacter: string) {
  if (answer === correctCharacter) return 'correct'
  if (answer === 'Jimothy') return 'jimothy'
  return 'wrong'
}