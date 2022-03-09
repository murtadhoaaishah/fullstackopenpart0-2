// import React, { useState, useEffect } from 'react'
// import PersonForm from './components/PersonForm'
// import Filter from './components/Filter'
// import Persons from './components/Persons'
// import createService from './components/Crude'


// const App = () => {
//   const [persons, setPersons] = useState([])
//   const [newName, setNewName] = useState('')
//   const [newNumber, setNumber] = useState('')
//   const [query, setQuery] = useState('')

//   useEffect(() => {
//     createService.getAll().then(response => {
//       setPersons(response)
//     })
//   }, [])

//   const addContact = (e) => {

//     e.preventDefault()
//     if (!newName.trim()) return
//     if (!newNumber.trim()) return

//     const newUser = {
//       name: newName,
//       number: newNumber
//     }



//     const findPerson = persons.find(person => person.name.toLowerCase() === newName.toLowerCase())

//     if (findPerson) {
//       window.confirm(`${findPerson.name} is already added to phonebook, replace the old name with a new one?`)
//       const updated = createService.update(findPerson.id, { ...findPerson, number: newNumber }).then(res => setPersons(persons.map(person => person.id === findPerson.id ? res : person)))
//       setNewName('')
//       setNumber('')
//     } else {
//       createService.create(newUser)
//       setPersons(persons.concat(newUser))
//       setNewName('')
//       setNumber('')

//     }
//   }

//   const deleteHandler = (id) => {
//     createService.remove(id)
//     setPersons(persons.filter(person => person.id !== id))
//   }

//   const filtered = query.trim()
//     ? persons.filter(person =>
//       person.name.toLowerCase()
//         .includes(query.trim().toLowerCase()))
//     : persons



//   return (
//     <div>
//       <h2>Phonebook</h2>
//       <Filter query={query} setQuery={setQuery} />

//       <PersonForm
//         onSubmit={addContact}
//         setNewName={setNewName}
//         newName={newName}
//         setNumber={setNumber}
//         newNumber={newNumber}
//       />
//       <h2>Numbers</h2>
//       {persons && <Persons filtered={filtered}
//         deleteHandler={deleteHandler} />}
//     </div >
//   )
// }
// export default App















import React, { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Persons from './components/Persons'
import createService from './components/Crude'


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNumber] = useState('')
  const [query, setQuery] = useState('')



  useEffect(() => {
    createService.getAll().then(response => {
      setPersons(response)
    })
  }, [])

  const addContact = e => {

    e.preventDefault()
    if (!newName.trim()) return
    if (!newNumber.trim()) return

    const newUser = {
      name: newName,
      number: newNumber
    }


    const findPerson = persons.find(person => person.name.toLowerCase() === newName.toLowerCase())
    if (findPerson) {
      window.confirm(`${findPerson.name} has been added to phonebook, do you want to replace it with a new one?`)
      createService.update(findPerson.id, { ...findPerson, number: newNumber })
        .then(res => setPersons(persons.map(person => person.id === findPerson.id ? res : person)))
      setNewName('')
      setNumber('')
    } else {
      createService.create(newUser)
      setPersons(persons.concat(newUser))
      setNewName('')
      setNumber('')
    }
  }


  const deleteHandler = (id) => {
    createService.remove(id)
    setPersons(persons.filter(person => person.id !== id))
  }




  const filtered = query.trim()
    ? persons.filter(person =>
      person.name.toLowerCase()
        .includes(query.trim().toLowerCase()))
    : persons

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter query={query} setQuery={setQuery} />

      <PersonForm
        onSubmit={addContact}
        setNewName={setNewName}
        newName={newName}
        setNumber={setNumber}
        newNumber={newNumber}
      />
      <h2>Numbers</h2>
      {persons && <Persons filtered={filtered}
        deleteHandler={deleteHandler}
      />}
    </div >
  )
}
export default App
