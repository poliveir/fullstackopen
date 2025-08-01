import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')

  const onSubmit = (event) => {
	event.preventDefault();
	if (persons.find(person => person.name === newName))
		alert(`${newName} is already added to phonebook`);
	else {
		setPersons(persons.concat({name: newName}));
		setNewName('');
	}
  };

  const onChange = (event) => {
	setNewName(event.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={onSubmit}>
          name: <input value={newName} onChange={onChange}/>
          <button type="submit">add</button>
      </form>
      <h2>Numbers</h2>
      {persons.map(person =>
	  	<p key={person.name}>{person.name}</p>
	  )}
	  <div>debug: {newName}</div>
    </div>
  )
}

export default App