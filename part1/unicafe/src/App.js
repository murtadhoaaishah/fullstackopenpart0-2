
import React, { useState } from 'react'
import Statistics from "./Components/Statistics.jsx"
import Button from "./Components/Button"


function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const all = good + neutral + bad
  const average = (good - bad) / 3
  const positive = good / all * 100
  console.log(good)

  return (
    <div>

      <Button Onclick={() => setGood(good + 1)} text='Good' />
      <Button Onclick={() => setBad(bad + 1)} text='Bad' />
      <Button Onclick={() => setNeutral(neutral + 1)} text='Neutral' />


      <Statistics good={good} bad={bad} neutral={neutral} average={average} positive={positive} all={all} />
    </div>
  )
  ￼
}

export default App


// import React, { useState } from 'react'
  // save clicks of each button to its own state


// const App = () => {
//   const [clicks, setClicks] = useState({
//     good: 0, bad: 0, neutral: 0
//   })


//   const all = clicks.good+clicks.bad+clicks.neutral
// const average = clicks.good 
//   console.log(all)
//   const handleGoodClick = () => {
//     const newClicks = {
//       good: clicks.good + 1,
//       bad: clicks.bad,
//       neutral: clicks.neutral,
//       all: clicks.all + 1,
//     }
//    setClicks(newClicks)
//   }

//   const handleBadClick = () => {
//     const newClicks = {
//       good: clicks.good,
//       bad: clicks.bad + 1,
//       neutral: clicks.neutral,

//     }
//    setClicks(newClicks)
//   }

//   const handleNeutralClick = () => {
//     const newClicks = {
//       good: clicks.good,
//       bad: clicks.bad,
//       neutral: clicks.neutral + 1,

//     }
//    setClicks(newClicks)
//   }

//   const allClick = () => {
//     const newClicks = {
//       good: clicks.good,
//       bad: clicks.bad,
//       neutral: clicks.neutral,

//     }
//   }

//   return (
//     <div>
//       <h1>Give feedback</h1>

//     <button onClick={handleGoodClick}>good</button>
//     <button onClick={handleBadClick}>bad</button>
//     <button onClick={handleNeutralClick}>neutral</button>
//     <h2>Statistics</h2>
//     <p>Good{clicks.good}</p>
//     <p>Bad{clicks.bad}</p>
//     <p>Neutral{clicks.neutral}</p>

//     <p>Average</p>
//     <p>Positive</p>
//     </div>
//       )
//   }

// export default App
