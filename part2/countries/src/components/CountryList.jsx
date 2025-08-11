import Button from "../../../phonebook/src/components/Button";
import CountryInfo from "./CountryInfo";

const CountryList = ({countryList, onShowCountry}) => {
	if (countryList.length > 10) {
		return <p>Too many matches, specify another filter</p>
	}
	else if (countryList.length === 1) {
		return <CountryInfo country={countryList[0]}></CountryInfo>
	}
	else {
		return (
			<>
				{countryList.map(c =>
					<p key={c.name.official}>
						{c.name.common} <Button text="Show" onClick={() => onShowCountry(c.name.common)}></Button>
					</p>
				)}
			</>
		)
	}
};

export default CountryList;