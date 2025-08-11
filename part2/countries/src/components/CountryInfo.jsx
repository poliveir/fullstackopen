import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const weatherCodeToIcon = {
  0: "icons/svg/wi-day-sunny.svg",
  1: "icons/svg/wi-day-cloudy.svg",
  2: "icons/svg/wi-cloud.svg",
  3: "icons/svg/wi-cloudy.svg",
  45: "icons/svg/wi-fog.svg",
  48: "icons/svg/wi-fog.svg",
  51: "icons/svg/wi-showers.svg",
  53: "icons/svg/wi-showers.svg",
  55: "icons/svg/wi-rain.svg",
  61: "icons/svg/wi-rain.svg",
  63: "icons/svg/wi-rain.svg",
  65: "icons/svg/wi-rain-wind.svg",
  71: "icons/svg/wi-snow.svg",
  80: "icons/svg/wi-showers.svg",
  95: "icons/svg/wi-thunderstorm.svg"
};

const CountryInfo = ({country}) => {
	const [weather, setWeather] = useState(null);

	useEffect(
		() => {
			axios
				.get(
					'https://api.open-meteo.com/v1/forecast',
					{
						params: {
							latitude: country.capitalInfo.latlng[0],
							longitude: country.capitalInfo.latlng[1],
							current_weather: true
						}
					}
				)
			.then(response => {
				setWeather(response.data.current_weather);
			})
		},
		[]
	)

	return (
		<>
			<h1>{country.name.common}</h1>

			<p>Capital {country.capital[0]}</p>
			<p>Area {country.area}</p>

			<h1>Languages</h1>

			<ul>
				{Object.entries(country.languages).map(([key, value]) =>
					<li key={key}>{value}</li>
				)}
			</ul>

			<img src={country.flags.png} alt={country.flags.alt}></img>

			<h2>Weather in {country.capital[0]}</h2>

			{weather ? (
				<div>
					<p>Temperature {weather.temperature} °C</p>
					<img
						src={weatherCodeToIcon[weather.weathercode]}
						alt="Weather icon"
						style={
							{
								width: '100px',
								height: '100px'
							}
						}
					/>
					<p>Wind {weather.windspeed} km/h</p>
				</div>
			) : (
				<p>Loading weather...</p>
			)}


		</>
	)
};

export default CountryInfo;