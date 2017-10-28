import React, {Component}from 'react';
import PropTypes from 'prop-types';
import { getDate } from '../helpers/utils';
import DayItem from './DayItem';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    maxWidth: 1200,
    margin: '50px auto'
  },
  subheader: {
    fontSize: 30,
    color: '#333',
    fontWeight: 100
  },
  header: {
    fontSize: 65,
    color: '#333',
    fontWeight: 100,
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 30,
  }
}

function ForecastUI ({city, forecast}) {
  const {header, subheader, container} = styles
  return (
    <div style={{textAlign: 'center'}}>
      <h1 style={header}>{city}</h1>
      <p style={subheader}>Select a day</p>
      <div style={container}>
        {forecast.list.map((listItem) => <DayItem key={listItem.dt} day={listItem} city={city} />)}
      </div>
    </div>
  )
}

class Forecast extends Component {
  static propTypes = {
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.object.isRequired,
    isLoading: PropTypes.bool.isRequired
  }

  render() {
    const {isLoading, city, forecastData, handleClick} = this.props
    return (
      <div>
        {
          isLoading
          ? <h1 style={styles.header}> Loading </h1>
          : <ForecastUI
              city={city}
              forecast={forecastData}
              handleClick={handleClick} />
        }
      </div>
    )
  }
}

export default Forecast;
