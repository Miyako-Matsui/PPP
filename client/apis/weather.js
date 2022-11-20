import request from 'superagent'

//step 5 この工程
export function getWeather(city) {
  return request.get(`http://localhost:3000/weather/${city}`).then((res) => {
    return res.body
  })
}
