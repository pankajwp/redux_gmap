import React, { useState } from "react";
import { connect } from "react-redux";
import searchWeather from "../actions/search_weather";

function SearchBox(props) {
  const [cityname, setCityname] = useState("");

  function handleType(event) {
    setCityname(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.city(cityname);
    setCityname("");
  }

  return (
    <div className="row pt-3">
      <div className="col-lg-12">
        <form onSubmit={handleSubmit}>
          <div className="form-inline">
            <input
              type="text"
              className="form-control mr-1"
              placeholder="Enter city name"
              value={cityname}
              onChange={handleType}
            />
            <button
              type="submit"
              className="btn btn-primary"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    city: cityname => dispatch(searchWeather(cityname))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SearchBox);
