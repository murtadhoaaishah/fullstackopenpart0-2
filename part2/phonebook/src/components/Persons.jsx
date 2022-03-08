const Persons = ({ filtered }) => {
    return (
        <div>
            <ul>
                {filtered.map((person, personIndex) =>
                    <li key={`person_${personIndex}`}>{person.name} : {person.number}</li>)}
            </ul>
        </div>
    )
}
export default Persons