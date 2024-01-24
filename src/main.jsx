import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {initialize} from './dataController.js'
import './index.css'

initialize();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
