import React from 'react';
import Detail from '../components/Detail';
import { startCase } from "lodash";

export default function DetailContainer({ location }) {
  const city = startCase(location.pathname.split("/")[2])
  return <Detail weather={location.state.weather} city={city} />
};
