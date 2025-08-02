import { useState } from 'react'
import Filter from './components/Filter';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

const App = () => {
	const [contacts, setContacts] = useState([
		{ name: 'Arto Hellas', number: '040-123456', id: 1 },
		{ name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
		{ name: 'Dan Abramov', number: '12-43-234345', id: 3 },
		{ name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
	]);
	const [filteredContacts, setFilteredContacts] = useState(contacts);

	const [newName, setNewName] = useState('');
	const [newNumber, setNewNumber] = useState('');

	const [nameFilter, setNameFilter] = useState('');

	const onSubmit = (event) => {
		event.preventDefault();

		if (contacts.find(contact => contact.name === newName))
			alert(`${newName} is already added to phonebook`);
		else {
			const newContacts = contacts.concat(
				{
					name: newName,
					number: newNumber,
					id: contacts.length + 1
				}
			);
			setContacts(newContacts);
			setFilteredContacts(newContacts.filter(contact =>
				contact.name.toLowerCase().includes(nameFilter.toLowerCase())
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
		setFilteredContacts(contacts.filter(contact =>
			contact.name.toLowerCase().includes(event.target.value.toLowerCase())
		));
		setNameFilter(event.target.value);
	};


	return (
		<div>
			<h2>Phonebook</h2>

			<Filter input={nameFilter} onChange={onChangeNameFilter}></Filter>

			<ContactForm
				onSubmit={onSubmit}
				newName={newName}
				newNumber={newNumber}
				onChangeName={onChangeName}
				onChangeNumber={onChangeNumber}
			></ContactForm>

			<ContactList contacts={filteredContacts}></ContactList>
		</div>
	);
}

export default App