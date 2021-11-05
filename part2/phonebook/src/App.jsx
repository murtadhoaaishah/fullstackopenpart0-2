import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')
  const [showAll, setShowAll] = useState(true)

  const namesToShow = showAll
    ? persons.filter(persons => persons.important === true)
    : persons

  newName.includes({ newName }) === true
    ? alert('${newName} has been added to phonebook')
    : namesToShow

  const addName = e => {
    e.preventDefault()
    const namesObject = {
      names: newName,
      important: Math.random() < 0.5,
      id: persons.length + 1
    }
    setPersons(persons.concat(namesObject))
  }

  const handleNameChange = e => {
    console.log(e.target.value)
    setNewName(e.target.value)
  }

  console.log(namesToShow)
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}  >
        <div>
          name: <input value={newName}

            onChange={handleNameChange}
          />
        </div>
        <div>
          <button type="submit">add</button>

        </div>

      </form>
      <h2>Numbers</h2>
      {namesToShow.map((person, i) =>
        <p key={i}>{person.names}</p>)}

    </div >
  )
}

export default App