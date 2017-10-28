import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GetCity from '../components/GetCity';

class GetCityContainer extends Component {
  static defaultProps = {
    direction: 'column'
  }
  static propTypes = {
    direction: PropTypes.string
  }
  state = {
    city: ''
  }
  handleUpdateCity = (e) => {
    this.setState({
      city: e.target.value
    })
  }
  render () {
    return (
      <GetCity
        direction={this.props.direction}
        onUpdateCity={this.handleUpdateCity}
        city={this.state.city} />
    )
  }
};

export default GetCityContainer;
