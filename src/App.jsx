import { useState } from 'react'
import './App.css'

function App() {
  const [billPrice, setBillPrice] = useState(0)
  const [personalRating, setPersonalRating] = useState(0)
  const [friendRating, setFriendRating] = useState(0)
  return (
    <div>
      <span>How much was the bill? <input type="text" value={billPrice} onChange={(e) => {
        setBillPrice(Number(e.target.value))
      }}/></span>
    </div>
  )
}

export default App
