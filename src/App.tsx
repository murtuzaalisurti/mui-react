import { useState, useContext, useMemo } from 'react'
import Greeter from './components/Greeter'
import Input from './components/Input'
import { Button, Container, Grid, createTheme } from '@mui/material'
import Card from './components/Card'

// theme context
import themeContext from './context/themeContext'

// theme - MUI
import { ThemeProvider } from '@mui/material'
import { customThemeObj } from './theme/custom'
import StyledButton from './components/styled/Button'
// import theme from './theme/custom'

function App() {
  const themeContextUse = useContext(themeContext)
  const [themeMode, setThemeMode] = useState(themeContextUse.themeMode)
  // console.log(themeContextUse);

  const theme = useMemo(() => createTheme(customThemeObj(themeMode)), [themeMode])

  return (
    <themeContext.Provider value={{themeMode, setThemeMode}}>
      <ThemeProvider theme={theme}>
        <Container>
          {/* every MUI component has 3 common props - children, classes & sx */}
          <Greeter name='murtuza' message='welcome' />
          <Input />
          <Button color="secondary" variant="contained" onClick={() => {
            setThemeMode(prev => {
              return prev === "light" ? "dark" : "light"
            })
          }}>Change Theme {themeMode}
          </Button>
          <StyledButton>Styled Button</StyledButton>
          <Grid container spacing={5}>
            <Card color="primary.dark" />
            <Card color='secondary' />
            <Card color='primary' />
            <Card color='secondary' />
          </Grid>
        </Container>
      </ThemeProvider>
    </themeContext.Provider>
  )
}

export default App
