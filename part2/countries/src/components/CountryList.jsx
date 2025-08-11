import CountryInfo from "./CountryInfo";

const CountryList = ({countryList}) => {

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
					<p key={c.name.official}>{c.name.common}</p>
				)}
			</>
		)
	}
};

export default CountryList;