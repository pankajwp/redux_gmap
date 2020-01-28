import axios from "axios";
import { FETCH_WEATHER, WEATHER_API_KEY } from "./index";

const search_weather = cityname => {
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname},in&appid=${WEATHER_API_KEY}`;
	const requestData = axios.get(url).catch(error => {
		return {
			type: FETCH_WEATHER,
			payload: ""
		};
	});
	// console.log(requestData);
	return {
		type: FETCH_WEATHER,
		payload: requestData
	};
};

export default search_weather;
