import { useState } from 'react'
import { Baixe } from '../components/baixe'
import { Card } from '../components/card'
import { Card2 } from '../components/card2'
import { Phoneimg } from '../components/phoneimg'
import { Container } from './style'

function App() {
  const [count, setCount] = useState(0)
  return (
    <Container>
      <div>
      <Card/>
      <Card2/>
      <Baixe/>
      </div>
      <Phoneimg/>
    </Container>
  )
}

export default App
