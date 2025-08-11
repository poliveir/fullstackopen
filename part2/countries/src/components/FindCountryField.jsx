import InputField from "./InputField";

const FindCountryField = ({ value, onChange }) => {
	return (
		<>
			<label htmlFor="countryField">Find countries </label>
			<InputField
				id='countryField'
				value={value}
				onChange={onChange}
			></InputField>
		</>
	);
}

export default FindCountryField;