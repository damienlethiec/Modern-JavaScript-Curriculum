import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getDate } from '../helpers/utils';

var styles = {
  dayContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    margin: 35
  },
  subheader: {
    fontSize: 30,
    color: '#333',
    fontWeight: 100
  },
  weather: {
    height: 130
  }
}

class DayItem extends Component {
  static propTypes = {
    day: PropTypes.shape({
      dt: PropTypes.number.isRequired,
      weather: PropTypes.array.isRequired,
    }).isRequired
  }
  render() {
    const {day, city} = this.props;
    const {dayContainer, weather, subheader} = styles
    const date = getDate(day.dt);
    const icon = day.weather[0].icon;
    return(
      <Link to={{ pathname: `/details/${city}`, state: { weather: day }}} style={{textDecoration: "none"}}>
        <div style={dayContainer} >
          <span style={weather} dangerouslySetInnerHTML={{ __html: require(`./../images/weather-icons/${icon}.svg`) }} />
          <h2 style={subheader}>{date}</h2>
        </div>
      </Link>
    )
  }
}

export default DayItem
