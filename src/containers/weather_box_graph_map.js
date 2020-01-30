import React from "react";
import { connect } from "react-redux";
import Chart from "./spark_chart";
import MyMapComponent from "./custom_map";
import removeCity from '../actions/remove_city'
import _ from "lodash";
import {GOOGLE_API_KEY} from '../config'

function WeatherBoxMap(props) {
	function listWeathers(cityWeather) {
        const mapUrl = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&v=3.exp&libraries=geometry,drawing,places`
		//console.log(cityWeather);
		const lists = cityWeather.map(element => {
			const tempArr = element.list.map(ele =>
				parseInt(Number(ele.main.temp - 273.5).toFixed(0))
			);
			const humidityArr = element.list.map(ele => ele.main.humidity);
			return (
				<tr key={element.city.id} id={element.id}>
					<td>{element.city.name}</td>
					<td>
						<Chart temp={tempArr} />
						<i>{_.mean(tempArr)} (celcius) Avg</i>
					</td>
					<td>
						<Chart temp={humidityArr} />
						<i>{_.mean(humidityArr)} %</i>
					</td>
					<td>
						<MyMapComponent
							lat={element.city.coord.lat}
							lng={element.city.coord.lon}
							isMarkerShown
							googleMapURL={mapUrl}
							loadingElement={<div style={{ height: `100%` }} />}
							containerElement={
								<div style={{ height: `150px`, width: `300px` }} />
							}
							mapElement={<div style={{ height: `100%` }} />}
						/>
					</td>
					<td>
						<button
							className="btn btn-sm"
							onClick={() => props.removeCity(element.city.id, props.cityWeather)}
						>
							<i className="fas fa-trash-alt"></i>
						</button>                        
					</td>
				</tr>
			);
		});
		return lists;
	}

	return (
		<div className="row mt-3">
			<table className="table table-striped">
				<thead>
					<tr>
						<th>City</th>
						<th>Temprature</th>
						<th>Humidity</th>
						<th>Map</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>{listWeathers(props.cityWeather)}</tbody>
			</table>
		</div>
	);
}

const mapStatetoProps = state => {
	return {
		cityWeather: state.cityWeather
	};
};


const mapDispatchToProps = dispatch => {
    return {
        removeCity: (cityId, cityWeather) => dispatch(removeCity(cityId, cityWeather))
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(WeatherBoxMap);
