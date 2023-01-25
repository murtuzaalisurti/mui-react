import { useState } from 'react'
import Greeter from './components/Greeter'
import Input from './components/Input'
import { Container, Grid } from '@mui/material'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Container>
      {/* every MUI component has 3 common props - children, classes & sx */}
      <Greeter name='murtuza' message='welcome' />
      <Input />
      <Grid container spacing={5}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Grid>
    </Container>
  )
}

export default App
