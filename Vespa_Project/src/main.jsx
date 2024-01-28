import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createTheme, ThemeProvider } from '@mui/material/styles' 
import { CssBaseline } from '@mui/material'


const theme = createTheme({
  pallete: {
    primary: {
      main: '#0A0A0A'
    },
    secondary: {
      main: 'C4C4C4',
      light: 'F5F5F5',
      dark: '9D9D9D'
    }
  }
})

// Aqui importo las fuentes

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
    <CssBaseline/>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
    </React.StrictMode>,
  
)

