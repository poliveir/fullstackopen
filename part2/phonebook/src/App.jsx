import { useEffect, useState } from 'react';
import axios from 'axios';
import Filter from './components/Filter';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

const App = () => {
	const [contacts, setContacts] = useState([]);
	const [filteredContacts, setFilteredContacts] = useState([]);

	const [newName, setNewName] = useState('');
	const [newNumber, setNewNumber] = useState('');

	const [nameFilter, setNameFilter] = useState('');

	useEffect(() => {
		axios
			.get('http://localhost:3001/persons')
			.then(response => {
				setContacts(response.data)
				setFilteredContacts(response.data)
			});
	}, []);

	const onSubmit = (event) => {
		event.preventDefault();

		if (contacts.find(contact => contact.name === newName))
			alert(`${newName} is already added to phonebook`);
		else {
			axios
				.post(
					'http://localhost:3001/persons',
					{
						name: newName,
						number: newNumber
					}
				)
				.then(response => {
					const newContactList = contacts.concat(response.data);
					setContacts(contacts.concat(newContactList))
					setFilteredContacts(newContactList.filter(contact =>
						contact.name.toLowerCase().includes(nameFilter.toLowerCase())
					));
					setNewName('');
					setNewNumber('');
				});
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