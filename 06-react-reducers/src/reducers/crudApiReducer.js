import types from '../actions/crudApiActions'

const initialState = {
  family: [],
}

const crudApiReducer = (state, action) => {
  const { payload } = action
  const { family } = state

  switch (action.type) {
    case types.readAllData: {
      return { ...state, family: payload }
    }

    case types.createData: {
      return { ...state, family: [...family, payload] }
    }

    case types.updateData: {
      return {
        ...state,
        family: family.map((el) => (el.id === payload.id ? payload : el)),
      }
    }

    case types.deleteData: {
      return { ...state, family: family.filter((el) => el.id !== payload) }
    }

    default:
      return state
  }
}
export { crudApiReducer, initialState }
