import { FETCH_WEATHER, UPDATED_LIST } from "../actions";

function getWeather(state = [], action) {
	switch (action.type) {
		case FETCH_WEATHER:
			return action.payload.data ? [action.payload.data, ...state] : state;
		case UPDATED_LIST:
			return action.payload ? action.payload : state;
		default:
			return state;
	}
}

export default getWeather;
