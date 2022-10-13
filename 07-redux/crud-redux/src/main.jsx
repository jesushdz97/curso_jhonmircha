import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import store from './app/store'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  </React.StrictMode>,
)
