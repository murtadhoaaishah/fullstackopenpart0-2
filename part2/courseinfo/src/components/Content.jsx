import Parts from "./Parts"

const Content = ({ parts }) => {

    return (
        <div>
            {parts.map((part, i) =>
                <Parts key={part.id} name={part.name} exercises={part.exercises} />)}
        </div>
    )
}
export default Content