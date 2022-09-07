import { TYPES } from '../actions/contador.actions'

export const contadorInitialState = { count: 0 }

export const contadorInit = (contadorInitialState) => {
  return { count: contadorInitialState.count + 1997 }
}

export const contadorReducer = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case TYPES.INCREMENT:
      return { count: state.count + payload }
    case TYPES.DECREMENT:
      return { count: state.count - payload }
    case TYPES.INC5:
      return { count: state.count + payload }
    case TYPES.DEC5:
      return { count: state.count - payload }
    case TYPES.RESET:
      return contadorInitialState
    default:
      return state
  }
}
