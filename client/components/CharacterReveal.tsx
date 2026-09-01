import { useParams, Link } from 'react-router'
import { useQuery } from '@tanstack/react-query'
import { getCharacterDetails } from '../apiClient.ts'
import faramirImg from '../../Images/faramir.webp'

function CharacterReveal() {
  const { id } = useParams()

  const { data: character, isPending, isError } = useQuery({
    queryKey: ['character', id],
    queryFn: () => getCharacterDetails(id as string),
  })

  if (isPending) return <p>Loading...</p>
  if (isError) return <p>Something went wrong.</p>

  return (
    <div className="character-reveal">
      <h1>{character.name}</h1>
      <img
        src={faramirImg}
        alt={`Illustration representing ${character.name}`}
        width="200"
      />
      <ul>
        <li>Race: {character.race}</li>
        <li>Realm: {character.realm}</li>
        <li>Gender: {character.gender}</li>
      </ul>
      <Link to="/">Back to quote</Link>
    </div>
  )
}

export default CharacterReveal