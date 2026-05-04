import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Terms from './pages/Terms'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="app-container">
      <Navbar />
      <main>
        <Terms />
      </main>
      <Footer />
    </div>
  </StrictMode>,
)
