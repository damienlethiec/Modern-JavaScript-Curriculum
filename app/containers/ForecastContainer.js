import React, { Component } from 'react';
import Forecast from '../components/Forecast';
import queryString from "query-string";
import { getForecast } from './../helpers/api.js';
import { startCase } from "lodash";

class ForecastContainer extends Component {
  state = {
    isLoading: true,
    forecastData: {},
    city: ""
  }
  componentDidMount() {
    const city = startCase(this.props.location.pathname.split("/")[2]);
    this.makeRequest(city)
  }
  componentWillReceiveProps(nextProps) {
    const city = startCase(nextProps.location.pathname.split("/")[2]);
    this.makeRequest(city)
  }
  makeRequest = async (city) => {
    const response = await getForecast(city)
    this.setState({
      isLoading: false,
      forecastData: response,
      city
    });
  }
  render() {
    return (
      <Forecast
        city={this.state.city}
        isLoading={this.state.isLoading}
        forecastData={this.state.forecastData} />
    )
  }
};

export default ForecastContainer;
