import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    {
		name: 'Arto Hellas',
		phoneNumber: '040-1234567'
	}
  ])
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const onSubmit = (event) => {
	event.preventDefault();
	if (persons.find(person => person.name === newName))
		alert(`${newName} is already added to phonebook`);
	else {
		setPersons(persons.concat(
			{
				name: newName,
				phoneNumber: newNumber
			}
		));
		setNewName('');
		setNewNumber('');
	}
  };

  const onChangeName = (event) => {
	setNewName(event.target.value);
  }

  const onChangeNumber = (event) => {
	setNewNumber(event.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={onSubmit}>
		<div>
          name: <input value={newName} onChange={onChangeName}/>
		</div>
		<div>
		  number: <input value={newNumber} onChange={onChangeNumber}/>
		</div>
		<button type="submit">add</button>
      </form>
      <h2>Numbers</h2>
      {persons.map(person =>
	  	<p key={person.name}>{person.name} {person.phoneNumber}</p>
	  )}
	  <div>debug: {newName}</div>
    </div>
  )
}

export default App