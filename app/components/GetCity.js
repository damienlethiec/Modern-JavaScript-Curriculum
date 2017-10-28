import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Button ({ city, children }) {
  return (
    <Link type='button'
      style={{margin: 10}}
      className='btn btn-success'
      to={{pathname:`/forecast/${city}`}}>
        {children}
    </Link>
  )
}

function InputField ({onUpdateCity, city}) {
  return (
    <input
      className='form-control'
      onChange={onUpdateCity}
      placeholder='St. George, Utah'
      type='text'
      value={city} />
  )
}

function getStyles (direction) {
  return {
    display: 'flex',
    flexDirection: direction || 'column',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 300
  }
}

class GetCity extends Component {
  static propTypes = {
    direction: PropTypes.string,
    onUpdateCity: PropTypes.func.isRequired,
    city: PropTypes.string.isRequired
  }

  render() {
    const {direction, onUpdateCity, city} = this.props

    return (
      <div style={getStyles(direction)}>
        <InputField
          onUpdateCity={onUpdateCity}
          city={city} />
        <Button city={city}>
            Get Weather
        </Button>
      </div>
    )
  }
}

export default GetCity;
