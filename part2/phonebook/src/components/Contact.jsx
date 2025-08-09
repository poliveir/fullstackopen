import Button from "./Button";

const Contact = ({id, name, number, onDeleteContact}) =>
	<p>
		{name} {number}
		<span> </span>
		<Button
			text='delete'
			onClick={() => onDeleteContact(id)}
		></Button>
	</p>

export default Contact;