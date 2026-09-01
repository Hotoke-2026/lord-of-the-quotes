import { Outlet } from 'react-router'

function App() {

  return (
    <div>
      <h1>Lord of the Quotes</h1>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default App