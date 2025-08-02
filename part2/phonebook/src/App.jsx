import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]);
  const [filteredPersons, setFilteredPersons] = useState(persons);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [nameFilter, setNameFilter] = useState('');

  const onSubmit = (event) => {
	event.preventDefault();
	if (persons.find(person => person.name === newName))
		alert(`${newName} is already added to phonebook`);
	else {
		const newPersons = persons.concat(
			{
				name: newName,
				number: newNumber
			}
		)
		setPersons(newPersons);
		setFilteredPersons(newPersons.filter(person =>
			person.name.toLowerCase().includes(nameFilter.toLowerCase())
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

const onChangeNameFilter = (event) => {
	setFilteredPersons(persons.filter(person =>
		person.name.toLowerCase().includes(event.target.value.toLowerCase())
	));
	setNameFilter(event.target.value);
};


  return (
    <div>
      <h2>Phonebook</h2>
	  <input value={nameFilter} onChange={onChangeNameFilter}/>

	  <h2>add a new</h2>
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
		{filteredPersons.map(person =>
			<p key={person.name}>{person.name} {person.number}</p>
		)}
	  <div>debug: {newName}</div>
    </div>
  )
}

export default App