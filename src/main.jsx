import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Auth0Provider } from '@auth0/auth0-react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
  domain='dev-hl8w5qpf3cnht60p.us.auth0.com'
  clientId='yTingEq7YjxH7b5D8jOdQLsDOmDv9EU4'
  authorizationParams={{
    redirect_uri: window.location.origin
  }}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Auth0Provider>
)
