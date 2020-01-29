import React from "react";
import { connect } from "react-redux";
import removeCity from '../actions/remove_city'

function WeatherBox(props) {

  function listWeathers(cityWeather) {
    const lists = cityWeather.map(element => {
      const temp = element.main.temp - 273.5;
      return (
        <tr key={element.id} id={element.id}>
          <td>{element.name}</td>
          <td>{Number(temp).toFixed(2)} (celcius)</td>
          <td>{element.main.humidity} %</td>
          <td><button className="btn btn-sm" onClick={() => props.removeCity(element.id, props.cityWeather)}> <i className="fas fa-trash-alt"></i></button></td>
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
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{listWeathers(props.cityWeather)}</tbody>
      </table>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    cityWeather: state.cityWeather
  };
};

const mapDisptachToProps = dispatch => {
  return {
    removeCity: (cityId, cityWeather) => dispatch(removeCity(cityId, cityWeather))
  }
}


export default connect(mapStateToProps, mapDisptachToProps)(WeatherBox);
