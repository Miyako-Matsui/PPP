import { getWeather } from '../apis/weather'
export const RECEIVE_WEATHER = 'RECEIVE_WEATHER '

export function receiveWeatherAction(wheatherObj) {
  return {
    type: RECEIVE_WEATHER, //step 5
    payload: wheatherObj,
  }
}

//Thunk
export function fetchWeather(city) {
  return (dispatch) => {
    //step 3
    return getWeather(city).then((data) => {
      dispatch(receiveWeatherAction(data)) //step 5
    })
  }
}
