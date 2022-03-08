const Total = ({ parts }) => {
    const [name, exercises, id] = parts

    const total = parts.reduce((acc, cur) => acc + cur.exercises, 0)

    return (
        <p>total of{total} exercises</p>
    )
}
export default Total