const Part = ({ name, exercises, id }) => {
    return (
        <div key={id}>
            <span>{name}</span>  <span>{exercises}</span>
        </div>
    )
}

export default Part
