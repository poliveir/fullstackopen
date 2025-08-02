const ContactForm = ({onSubmit, newName, newNumber, onChangeName, onChangeNumber}) => {
	return (
		<>
			<h2>Add contact</h2>

			<form onSubmit={onSubmit}>
				<div>
					name: <input value={newName} onChange={onChangeName}/>
				</div>

				<div>
					number: <input value={newNumber} onChange={onChangeNumber}/>
				</div>

				<button type="submit">Add</button>
			</form>
		</>
	);
};

export default ContactForm;