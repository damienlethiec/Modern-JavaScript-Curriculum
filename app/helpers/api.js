const _baseURL = 'http://api.openweathermap.org/data/2.5/';
const _APIKEY = "889f5f629234ffbc8c8fe3377f541fcb";

function prepRouteParams (queryStringData) {
  return Object.keys(queryStringData)
    .map((key) => `${key}=${encodeURIComponent(queryStringData[key])}`)
    .join('&')
}

function prepUrl (type, queryStringData) {
  return `${_baseURL}${type}?${prepRouteParams(queryStringData)}`;
}

function getQueryStringData (city) {
  return {
    q: city,
    type: 'accurate',
    APPID: _APIKEY,
    cnt: 5
  }
}

export async function getCurrentWeather(city) {
  const queryStringData = getQueryStringData(city);
  const url = prepUrl('weather', queryStringData);

  const response = await fetch(url);
  return response.json();
}

export async function getForecast(city) {
  const queryStringData = getQueryStringData(city);
  const url = prepUrl('forecast/', queryStringData);

  const response = await fetch(url);
  return response.json();
}
