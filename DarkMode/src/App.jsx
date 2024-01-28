import { useState } from 'react'
import './App.css'
import './index.css'
import { createCustomTheme } from './theme/DarkMode'
import { ThemeProvider, CssBaseline, Paper, Typography, Container } from '@mui/material'
import { Switch } from './components/Switch'
import LanzaMoneda from './components/LanzaMoneda'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const theme = createCustomTheme(isDarkMode)

  function toggleDarkMode(){
    setIsDarkMode(!isDarkMode)
  }

  return (
   <>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Container component='main' className="mierda">
        <Paper elevation={3} sx={{p:4, textAlign: 'center'}}>
          <Typography variant='h3' color='primary'>
            {isDarkMode ? 'Mode dark' : 'Mode Light'}
          </Typography>
         <Switch checked={isDarkMode} onChange={toggleDarkMode}/>
        </Paper>
      </Container>
    </ThemeProvider>

    <Container sx={{
      p: 2,
      m: 2,
      border: 1,
      borderRadius: 2,
    }}>
      <LanzaMoneda/>
    </Container>
    </>
  )
}

export default App
