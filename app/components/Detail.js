import React from 'react';
import { convertTemp } from '../helpers/utils';
import DayItem from './DayItem';

const styles = {
  fontSize: 34,
  fontWeight: 100,
  maxWidth: 400,
  margin: '0 auto',
  textAlign: 'center',
}

export default function Detail ({weather, city}) {
  return (
    <div>
      <DayItem day={weather} />
      <div style={styles}>
        <p>{city}</p>
        <p>{weather.weather[0].description}</p>
        <p>min temp: {convertTemp(weather.main.temp.min)} degrees</p>
        <p>max temp: {convertTemp(weather.main.temp.max)} degrees</p>
        <p>humidity: {weather.humidity}</p>
      </div>
    </div>
  )
}
