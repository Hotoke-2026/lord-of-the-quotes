import { Outlet } from 'react-router'

function App() {

  return (
    <div className="page-wrapper">
      <h1 className="quote-title">Lord of the Quotes</h1>
      <Outlet />
      
    </div>
  )
}

export default App