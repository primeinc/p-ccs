import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.jsx'
import './index.css'

// For react-snap
const rootElement = document.getElementById('root')
const hasChildNodes = rootElement.hasChildNodes()

if (hasChildNodes) {
  // If we have child nodes, we're likely being rendered by react-snap
  // Use hydrate instead of render
  import('react-dom/client').then(({ hydrateRoot }) => {
    hydrateRoot(
      rootElement,
      <React.StrictMode>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </React.StrictMode>
    )
  })
} else {
  // Normal client-side render for development
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </React.StrictMode>
  )
}
