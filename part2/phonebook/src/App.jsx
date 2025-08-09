import { useEffect, useState } from 'react';
import Filter from './components/Filter';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import contactService from './services/contactService';

const App = () => {
	const [contacts, setContacts] = useState([]);
	const [filteredContacts, setFilteredContacts] = useState([]);

	const [newName, setNewName] = useState('');
	const [newNumber, setNewNumber] = useState('');

	const [nameFilter, setNameFilter] = useState('');

	useEffect(() => {
		contactService
			.getAll()
			.then(contactList => {
				setContacts(contactList)
				setFilteredContacts(contactList)
			});
		},
		[]
	);

	const onSubmit = (event) => {
		event.preventDefault();

		if (contacts.find(contact => contact.name === newName))
			alert(`${newName} is already added to phonebook`);
		else {
			contactService
				.create(
					{
						name: newName,
						number: newNumber
					}
				)
				.then(createdContact => {
					const newContactList = contacts.concat(createdContact);
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