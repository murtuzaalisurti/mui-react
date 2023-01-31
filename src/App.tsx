import { useState, useContext, useMemo } from 'react'
import Greeter from './components/Greeter'
import Input from './components/Input'
import { Box, Button, Container, CssBaseline, Grid, createTheme } from '@mui/material'
import ReviewCard from './components/Card'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'

// theme context
import themeContext from './context/themeContext'

// theme - MUI
import { ThemeProvider } from '@mui/material'
import { customThemeObj } from './theme/custom'
import StyledButton from './components/styled/Button'

function App() {
  const themeContextUse = useContext(themeContext)
  const [themeMode, setThemeMode] = useState(themeContextUse.themeMode)
  const theme = useMemo(() => createTheme(customThemeObj(themeMode)), [themeMode])

  return (
    <themeContext.Provider value={{ themeMode, setThemeMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Container sx={{
            p: 10
          }}>
            {/* every MUI component has 3 common props - children, classes & sx */}
            <Greeter name='murtuza' message='welcome' />

            {/**
             * ? performance tradeoff of using Box instead of div 
             * https://mui.com/system/getting-started/usage/#performance-tradeoffs
             */}
            <Box sx={{
              mb: 2
            }}>
              <Input />
              <Button variant="contained" onClick={() => {
                setThemeMode(prev => {
                  return prev === "light" ? "dark" : "light"
                })
              }}>Change Theme {themeMode}
              </Button>
              {/* <StyledButton variant="contained">Styled Button</StyledButton> */}
            </Box>

            <Grid2 container spacing={5}>
            {/* https://stackoverflow.com/a/47287319 */}
              {Array.from(Array(6)).map((_, index) => {
                return <ReviewCard imgUrl='https://source.unsplash.com/random/1920x1080/?skyscrapers' color='primary' key={index} />
              })}
            </Grid2>
          </Container>
        </CssBaseline>
      </ThemeProvider>
    </themeContext.Provider>
  )
}

export default App
