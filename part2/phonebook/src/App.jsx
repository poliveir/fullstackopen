import { useEffect, useState } from 'react';
import Filter from './components/Filter';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import contactService from './services/contactService';
import Notification from './components/Notification';

const App = () => {
	const [contacts, setContacts] = useState([]);
	const [filteredContacts, setFilteredContacts] = useState([]);

	const [newName, setNewName] = useState('');
	const [newNumber, setNewNumber] = useState('');

	const [nameFilter, setNameFilter] = useState('');

	const [notificationMessage, setNotificationMessage] = useState('');
	const [notificationClassName, setNotificationClassName] = useState('');

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

	const handleUpsertContact = (contact, action) => {
		let newContactList;
		if (action === 'add') {
			newContactList = contacts.concat(contact);
		}
		else {
			newContactList = contacts.map(c => c.id === contact.id ? contact : c);
		}
		setContacts(newContactList);
		setFilteredContacts(newContactList.filter(c =>
			c.name.toLowerCase().includes(nameFilter.toLowerCase())
		));
		setNewName('');
		setNewNumber('');
		const notificationAction = action === 'add' ? 'Added' : 'Updated';
		setNotificationMessage(`${notificationAction} ${contact.name}`);
		setNotificationClassName('success');
		setTimeout(
			() => {
				setNotificationMessage('')
				setNotificationClassName('')
			},
			5000
		);
	}

	const handleError = (error, contactName) => {
		setNotificationMessage(`Information of ${contactName} has already been removed from server`);
		setNotificationClassName('error');
		setTimeout(
			() => {
				setNotificationMessage('')
				setNotificationClassName('')
			},
			5000
		);
		setContacts(contacts.filter(c => c.name !== contactName));
		setFilteredContacts(filteredContacts.filter(c => c.name !== contactName));
	};

	const onSubmit = (event) => {
		event.preventDefault();

		const existingContact = contacts.find(contact => contact.name === newName);
		if (
			existingContact &&
			window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)
		) {
			contactService
				.update(
					{
						...existingContact,
						number: newNumber
					}
				)
				.then((contact) => handleUpsertContact(contact, 'update'))
				.catch((error) => handleError(error, existingContact.name));
		}
		else {
			contactService
				.create(
					{
						name: newName,
						number: newNumber
					}
				)
				.then((contact) => handleUpsertContact(contact, 'add'))
				.catch(() => handleError(error, newName));
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

	const onDeleteContact = (id) => {
		if (window.confirm(`Delete ${contacts.find(contact => contact.id === id).name}?`))
			contactService
				.remove(id)
				.then(() => {
					const newContactList = contacts.filter(contact => contact.id !== id);
					setContacts(newContactList);
					setFilteredContacts(newContactList.filter(contact =>
						contact.name.toLowerCase().includes(nameFilter.toLowerCase())
					));
				})
	};


	return (
		<div>
			<h2>Phonebook</h2>

			<Notification
				message={notificationMessage}
				classNames={`notification ${notificationClassName}`}
			></Notification>

			<Filter input={nameFilter} onChange={onChangeNameFilter}></Filter>

			<ContactForm
				onSubmit={onSubmit}
				newName={newName}
				newNumber={newNumber}
				onChangeName={onChangeName}
				onChangeNumber={onChangeNumber}
			></ContactForm>

			<ContactList
				contacts={filteredContacts}
				onDeleteContact={onDeleteContact}
			></ContactList>
		</div>
	);
}

export default App