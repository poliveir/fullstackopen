import Button from "./Button";

const Contact = ({contact, onDeleteContact}) =>
	<p>
		{contact.name} {contact.number}
		<span> </span>
		<Button
			text='delete'
			onClick={() => onDeleteContact(contact.id)}
		></Button>
	</p>

export default Contact;