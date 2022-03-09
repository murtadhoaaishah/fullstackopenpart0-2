const Persons = ({ filtered, deleteHandler }) => {

    const handleDelete = (id) => {
        deleteHandler(id)
    }


    return (
        <div>
            <ul>
                {filtered.map((person, personIndex) =>
                    <li key={`person_${personIndex}`}>{person.name} : {person.number}
                        <button onClick={() => handleDelete(person.id)}> delete</button></li>)}
            </ul>
        </div >
    )
}
export default Persons