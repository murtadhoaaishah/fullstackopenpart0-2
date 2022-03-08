import StatisticLine from "./StatisticLine"

const Statistics = ({ good, bad, neutral }) => {
    if (good + bad + neutral === 0) {
        return <p>No feedback given</p>

    }
    return (
        <table>
            <tbody>
                <StatisticLine text="good" value={good} />
                <StatisticLine text="neutral" value={neutral} />

                <StatisticLine text="bad" value={bad} />

                <StatisticLine text="all" value={good + bad + neutral} />

                <StatisticLine text="average" value={(good - bad + neutral * 0) / 3} />

                <StatisticLine text="positive" value={good / 100} />

            </tbody>
        </table>
    )
}

export default Statistics