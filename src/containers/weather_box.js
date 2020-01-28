import React from "react";
import { connect } from "react-redux";

function WeatherBox(props) {
  console.log(props.cityWeather.length);

  function listWeathers(cityWeather) {
    const lists = cityWeather.map(element => {
      const temp = element.main.temp - 273.5;
      return (
        <tr key={element.id}>
          <td>{element.name}</td>
          <td>{Number(temp).toFixed(2)} (celcius)</td>
          <td>{element.main.humidity} %</td>
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

export default connect(mapStateToProps)(WeatherBox);
