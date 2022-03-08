import React, { useState } from 'react'
import Statistics from './Components/Statistics'
import Button from './Components/Button'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClicks = () => {
    setGood(good + 1)
  }
  const handleBadClicks = () => {
    setBad(bad + 1)
  }
  const handleNeutralClicks = () => {
    setNeutral(neutral + 1)
  }
  return (
    <div>
      <h1>give feedbacks</h1>
      <Button onClick={handleGoodClicks} text='good' />
      <Button onClick={handleBadClicks} text='bad' />
      <Button onClick={handleNeutralClicks} text='neutral' />
      <h1>Statistics</h1>
      <Statistics good={good} bad={bad} neutral={neutral} />

    </div>
  )
}

export default App