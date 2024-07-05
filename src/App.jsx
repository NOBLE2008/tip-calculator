import { useState } from 'react'
import './App.css'

function App() {
  const [billPrice, setBillPrice] = useState(0)
  const [personalRating, setPersonalRating] = useState(0)
  const [friendRating, setFriendRating] = useState(0)
  return (
    <div>
      <div>How much was the bill? <input type="text" value={billPrice} onChange={(e) => {
        setBillPrice(Number(e.target.value))
      }}/></div>
      <div>How did you like the service? <select value={personalRating} onChange={(e) => {
        setPersonalRating(Number(e.target.value))
      }}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select></div>
      <div>How did your friends like the service? <select value={friendRating} onChange={(e) => {
        setFriendRating(Number(e.target.value))
      }}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
      </div>
    </div>
  )
}

export default App
