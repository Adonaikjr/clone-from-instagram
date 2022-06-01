import { useState } from 'react'

import { Card } from '../components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <header>
      <Card/>
      </header>
    </div>
  )
}

export default App
