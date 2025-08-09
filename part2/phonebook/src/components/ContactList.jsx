import Contact from "./Contact";

const ContactList = ({contacts}) => {
	return (
		<>
			<h2>Contacts</h2>

			{contacts.map(contact =>
				<Contact
					key={contact.id}
					id={contact.id}
					name={contact.name}
					number={contact.number}
				></Contact>
			)}
		</>
	);
}

export default ContactList;