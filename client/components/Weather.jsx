import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchWeather } from '../actions'

const cities = ['Auckland', 'Tokyo', 'Seoul', 'Johannesburg']

function Weather() {
  const [city, setCity] = useState('')

  const dispatch = useDispatch()
  const weather = useSelector((globalstate) => globalstate.weather)

  const cityHandler = (evt) => {
    setCity(evt.target.value)
  }

  return (
    <div>
      <form>
        <select id="city" name="city" value={city} onChange={cityHandler}>
          <option> Select your city </option>
          {cities.map((c) => (
            <option value={c} key={c}>
              {c}
            </option>
          ))}
        </select>
      </form>

      {/* <h1> {weather.temperature}</h1> */}
      <h1>
        {weather?.forecast?.map((f) => (
          <div key={f.day}>
            <p>Weather Forecast</p>
            <p>Day: {f.day}</p>
            <p>temperature: {f.temperature}</p>
            <p>Wind: {f.wind}</p>
          </div>
        ))}
      </h1>
      {/* <select>{city}</select> */}
      <option value={city}></option>

      <button onClick={() => dispatch(fetchWeather(city))}>Qlick me</button>
    </div>
  )
}

export default Weather
