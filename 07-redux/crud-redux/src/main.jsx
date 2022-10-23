import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import store from './app/store'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { MyModal } from './components'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <App />
        <MyModal />
      </Provider>
    </HashRouter>
  </React.StrictMode>,
)
