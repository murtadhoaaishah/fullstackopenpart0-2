import React, { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Persons from './components/Persons'
// import axios from 'axios'
import createService from './components/Crude'


const App = () => {
  const [persons, setPersons] = useState([
    // { name: 'Arto Hellas', number: '040-123456', id: 1 },
    // { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    // { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    // { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNumber] = useState('')
  const [query, setQuery] = useState('')

  // const contact = [...persons]
  useEffect(() => {
    createService.getAll().then(response => {
      setPersons(response)
    })
  }, [])

  const addContact = (e) => {

    e.preventDefault()
    if (!newName.trim()) return
    if (!newNumber.trim()) return


    const newUser = {
      name: newName,
      number: newNumber
    }

    const findPerson = persons.find(person => person.name.toLowerCase() === newName.toLowerCase())
    const findNumber = persons.find(person => person.number === newNumber)

    if (findPerson) {
      alert(`${findPerson.name} already`)
      setNewName('')
      setNumber('')
      return
    }

    if (findNumber) {
      alert(`${findNumber.number} already`)
      setNewName('')
      setNumber('')
      return
    }

    // if (findNumber) {
    //   console.log(findNumber)
    //   return
    // }

    setPersons(persons.concat(newUser))
    createService.create(newUser)
    setNewName('')
    setNumber('')


  }
  // if (persons.find(person =>
  //   person.name === newName.toLowerCase())) return alert('name already exist')
  // if (persons.find(person =>
  //   person.number === newNumber)) return alert('number already exist')

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
      {persons && <Persons filtered={filtered} />}
    </div >
  )
}
export default App
