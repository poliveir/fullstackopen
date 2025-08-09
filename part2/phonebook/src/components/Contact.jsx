import contactService from "../services/contactService";
import Button from "./Button";

const Contact = ({id, name, number}) =>
	<p>
		{name} {number}
		<span> </span>
		<Button
			text='delete'
			onClick={() => {
				if (window.confirm(`Delete ${name}?`))
					contactService.remove(id);
			}}
		></Button>
	</p>

export default Contact;