const PersonForm = ({ onSubmit, setNewName, setNumber, newName, newNumber }) => {

    return (
        <form onSubmit={onSubmit}>
            <h2>add a new</h2>
            <div>
                name: <input
                    onChange={e => setNewName(e.target.value)}
                    value={newName} />
            </div>
            <div>
                number: <input
                    onChange={e => setNumber(e.target.value)}
                    value={newNumber} />
            </div>
            <div>
                <button type="submit">add</button>

            </div>
        </form>
    )
}
export default PersonForm