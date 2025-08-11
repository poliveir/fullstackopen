import { useEffect } from "react";
import FindCountryField from "./components/FindCountryField";
import countryService from "./services/countryService";
import { useState } from "react";
import CountryList from "./components/CountryList";

const App = () => {
	const [findCountryFieldValue, setfindCountryFieldValue] = useState('');
	const [countryList, setCountryList] = useState([]);
	const [filteredCountryList, setFilteredCountryList] = useState([]);

	useEffect(
		() => {
			countryService
				.getAll()
				.then(countryList => {
						setCountryList(countryList);
					}
				)
		},
		[]
	);

	useEffect(
		() => {
			setFilteredCountryList(
				countryList.filter(
					c => c.name.common.toLowerCase().includes(findCountryFieldValue.toLowerCase())
				)
			)
		},
		[countryList, findCountryFieldValue]
	);

	const onChangeCountry = (event) => {
		event.preventDefault();

		setfindCountryFieldValue(event.target.value);
	};

	const handleShowCountry = (countryName) => {
		setfindCountryFieldValue(countryName);
	};

	return (
		<div>
			<FindCountryField
				value={findCountryFieldValue}
				onChange={onChangeCountry}
			></FindCountryField>

			<CountryList
				countryList={filteredCountryList}
				onShowCountry={handleShowCountry}
			></CountryList>
		</div>
	);
}

export default App