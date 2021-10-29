import React from "react"
import Content from "./Components/Content"
import Header from"./Components/Header"
import Total from "./Components/Total"

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      
      <Header course={course}/>
      <Content part1={part1} execises1={exercises1} part2={part2} execises2={exercises2} part3={part3} execises3={exercises3} />
      <Total execises1={exercises1} execises2={exercises2} execises3= {exercises3} />
    </div>

  )
}

export default App
