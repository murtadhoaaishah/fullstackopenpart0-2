import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([

  ])
  const [newName, setNewName] = useState('')
  // const [showAll, setShowAll] = useState(true)

  // const namesToShow = showAll
  //   ? persons.filter(persons => persons.important === true)
  //   : persons

  // const namesToShow = persons

  // if (namesToShow.includes(newName)) {
  //   alert('${newName} has been added to phonebook')
  // }
  const findName = persons.find(person => person.names === newName)



  const addName = e => {
    e.preventDefault()
    const namesObject = {
      names: newName,
      id: persons.length + 1
    }
    if (findName) {
      alert(`${findName.names} already exist`)
      setNewName('')
      return
    }
    setPersons(persons.concat(namesObject))
    setNewName('')
  }


  const handleNameChange = e => {
    setNewName(e.target.value)
  }

  // console.log(persons)
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
      {persons.map((person, i) =>
        <p key={i}>{person.names}</p>)}

    </div >
  )
}

export default App