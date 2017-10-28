import React from 'react';
import GetCityContainer from './GetCityContainer';

const styles = {
  header :{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'rgba(252, 90, 44, 0.89)',
    color: '#fff',
    padding: 5,
  }
}

export default function Main (props) {
  return (
    <div style={styles.header}>
      <h2 style={{margin: 0}}>Clever Title</h2>
      <GetCityContainer direction='row' />
    </div>
  )
}
