import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// fonts
import '@fontsource/roboto'

// theme
import { ThemeProvider } from '@mui/material'
import theme from './theme/custom'

import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>

      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
