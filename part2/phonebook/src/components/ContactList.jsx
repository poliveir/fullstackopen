import Contact from "./Contact";

const ContactList = ({contacts, onDeleteContact}) => {
	return (
		<>
			<h2>Contacts</h2>

			{contacts.map(contact =>
				<Contact
					key={contact.id}
					contact={contact}
					onDeleteContact={onDeleteContact}
				></Contact>
			)}
		</>
	);
}

export default ContactList;