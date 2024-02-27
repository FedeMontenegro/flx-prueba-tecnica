import React from "react"
import { Provider } from 'react-redux'
import { BrowserRouter } from "react-router-dom"
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import store from "./store/index.js"
import "./css/index.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>,
    </BrowserRouter>
  </React.StrictMode>
)
