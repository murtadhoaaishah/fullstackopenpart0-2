import Part from "./Part"

const Total = ({ parts }) => {

    const total = parts.reduce((acc, cur) => acc + cur.exercises, 0)
    return (
        <div>
            <p>
                Total of {total} exercises
            </p>
        </div>
    )
}
export default Total