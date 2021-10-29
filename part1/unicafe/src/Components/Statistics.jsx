import React from 'react'
import StatisticLine from './StatisticLine'

const Statistics = (props) => {
    console.log(props)
    if (props.all === 0) {
        return (
            <div>
                <h2>Statistics</h2>
                <p>No feedback given</p>
            </div>
        )
    } else {
        return (
            <div>

                <h2>Statistics</h2>

                <table>
                    <StatisticLine text="Good" value={props.good} />
                    <StatisticLine text="Bad" value={props.bad} />
                    <StatisticLine text="Neutral" value={props.neutral} />
                    <StatisticLine text="All" value={props.all} />
                    <StatisticLine text="Average" value={props.average} />
                    <StatisticLine text="Positive" value={props.positive} />
                </table>
            </div>
        )
    }
}

export default Statistics