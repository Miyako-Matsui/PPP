import { RECEIVE_WEATHER } from '../actions'

function weatherReducer(state = {}, action) {
  const { type, payload } = action

  switch (type) {
    case RECEIVE_WEATHER:
      return payload
    default:
      return state
  }
}

export default weatherReducer
