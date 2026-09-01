import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router'

import App from './components/App'
import Quote from './components/Quote'
import CharacterReveal from './components/CharacterReveal'

const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Quote />} />
    <Route path="character/:id" element={<CharacterReveal />} />
  </Route>
)

const router = createBrowserRouter(routes)

export default router