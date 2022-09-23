import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
