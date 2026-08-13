import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router'

import App from './components/App'
import Quote from './components/Quote'

const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Quote />} />
  </Route>
)

const router = createBrowserRouter(routes)

export default router