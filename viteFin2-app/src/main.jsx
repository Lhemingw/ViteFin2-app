import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// Import our custom CSS
import '../scss/styles.scss'

import Alert from 'bootstrap/js/dist/alert';

// or, specify which plugins you need:
import { Tooltip, Toast, Popover } from 'bootstrap';

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Alert />
  </React.StrictMode>,
)
