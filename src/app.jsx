import { useState } from 'react'
import './css/homepage.css'
import Homepage from "./pages/homePage/homepage.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Homepage />
    </>
  )
}

export default App
