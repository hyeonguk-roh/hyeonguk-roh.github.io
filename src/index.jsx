import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Footer from './universal/Footer'
import App from './universal/App'
import './universal/styles.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Footer />
  </StrictMode>
)