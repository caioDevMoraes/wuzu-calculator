import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import "./assets/css/globalStyles.css"
import "./assets/css/tailwild.css"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
