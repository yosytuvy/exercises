import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import PageContextProvider from './context/PageContextProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PageContextProvider>
    <App />
    </PageContextProvider>
  </React.StrictMode>,
)
