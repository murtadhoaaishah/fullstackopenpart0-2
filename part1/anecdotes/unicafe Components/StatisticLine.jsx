import React from 'react'

function StatisticLine(props) {
   console.log(StatisticLine) 

  return (

    <tbody>
      <tr>
        <td>{props.text}</td>
         <td>{props.value}</td>
      </tr>
</tbody>
              
      
    
  )
}

export default StatisticLine
