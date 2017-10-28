import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Main from '../containers/Main';
import HomeContainer from '../containers/HomeContainer';
import ForecastContainer from '../containers/ForecastContainer';
import DetailContainer from '../containers/DetailContainer';

const styles = {
  container: {
    width: '100%',
    height: '92%'
  }
}

export const routes = (
  <BrowserRouter>
    <div style={styles.container}>
      <Main />
      <Switch>
        <Route exact path='/' component={HomeContainer} />
        <Route path='/forecast/:city' component={ForecastContainer} />
        <Route path='/details/:city' component={DetailContainer} />
      </Switch>
    </div>
  </BrowserRouter>
);
