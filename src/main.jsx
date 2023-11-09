import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

function Overlay() {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', width: '100%', height: '100%' }}>
      <div style={{ position: 'absolute', top: 40, left: 40, fontSize: '20px' }}>
        <a href="https://sohyunjun.xyz/">logo.com</a>
      </div>
      <div id="nav" style={{ position: 'absolute', top: 40, right: 40, fontSize: '13px' }}>
        <a href="https://sohyunjun.xyz/about">ABOUT</a>
      </div>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Overlay />
  </React.StrictMode>,
)
