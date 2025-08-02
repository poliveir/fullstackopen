const Filter = ({input, onChange}) => {
	return (
		<>
			<p>Name filter</p>
			<input
				placeholder="filter by name..."
				value={input}
				onChange={onChange}
			></input>
		</>
	);
};

export default Filter;