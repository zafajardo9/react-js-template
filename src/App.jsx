import { NavLink, Outlet } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div className="app-shell">
      <header className="app-header">
        <h1>OntoFlow</h1>
        <nav>
          <NavLink to="/" end>
            Schema Explorer
          </NavLink>
          {/* Add more links as new routes arrive */}
        </nav>
      </header>
      <main className="app-content">
        <Outlet />
      </main>
    </div>
  )
}

export default App
