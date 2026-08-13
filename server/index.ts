import server from './server.ts'
import { PORT } from '../env.ts'
const port = PORT || 3000


server.listen(port, function () {
  // eslint-disable-next-line no-console
  console.log('Listening on port', port)
})
