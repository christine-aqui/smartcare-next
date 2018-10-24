import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

const exampleInitialState = {
  lastUpdate: 0,
  light: false,
  count: 0,
  firstName: '',
  lastName: '',
  age: '',
  gender: 'female',
  allergies: '',
  physician: '',
  primayDiagonosis: ''

}

export const actionTypes = {
  TICK: 'TICK',
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  RESET: 'RESET',
  FIRSTNAME: 'FIRSTNAME',
  LASTNAME: 'LASTNAME',
  AGE: 'AGE',
  GENDER: 'GENDER',
  PHYSICIAN: 'PHYSICIAN',
  ALLERGIES: 'ALLERGIES',
  PRIMARYDIAGONOSIS: 'PRIMARYDIAGONOSIS'

}

// REDUCERS
export const reducer = (state = exampleInitialState, action) => {
  switch (action.type) {
    case actionTypes.TICK:
      return Object.assign({}, state, {
        lastUpdate: action.ts,
        light: !!action.light
      })
    case actionTypes.INCREMENT:
      return Object.assign({}, state, {
        count: state.count + 1
      })
    case actionTypes.DECREMENT:
      return Object.assign({}, state, {
        count: state.count - 1
      })
    case actionTypes.RESET:
      return Object.assign({}, state, {
        count: exampleInitialState.count
      })
    case actionTypes.FIRSTNAME:
      return Object.assign({}, state, {
        firstName: action.payload
      })

    case actionTypes.LASTNAME:
      return Object.assign({}, state, {
        lastName: action.payload
      })
    case actionTypes.PHYSICIAN:
      return Object.assign({}, state, {
        physician: action.payload
      })
    case actionTypes.ALLERGIES:
      return Object.assign({}, state, {
        allergies: action.payload
      })

    case actionTypes.PRIMARYDIAGONOSIS:
      return Object.assign({}, state, {
        primayDiagonosis: action.payload
      })

    case actionTypes.GENDER:
      return Object.assign({}, state, {
        gender: action.payload
      })

    case actionTypes.AGE:
      return Object.assign({}, state, {
        age: action.payload
      })
    
    default: return state
  }
}

// ACTIONS
export const serverRenderClock = (isServer) => dispatch => {
  return dispatch({ type: actionTypes.TICK, light: !isServer, ts: Date.now() })
}

export const startClock = dispatch => {
  return setInterval(() => {
    // Dispatch `TICK` every 1 second
    dispatch({ type: actionTypes.TICK, light: true, ts: Date.now() })
  }, 1000)
}

export const incrementCount = () => dispatch => {
  return dispatch({ type: actionTypes.INCREMENT })
}

export const decrementCount = () => dispatch => {
  return dispatch({ type: actionTypes.DECREMENT })
}

export const resetCount = () => dispatch => {
  return dispatch({ type: actionTypes.RESET })
}

export const changeName = (payload) => dispatch => {
  return dispatch({ type: actionTypes.FIRSTNAME, payload: payload })
}

export const changeLastName = (payload) => dispatch => {
  return dispatch({ type: actionTypes.LASTNAME, payload: payload })
}

export const changeAge = (payload) => dispatch => {
  return dispatch({ type: actionTypes.AGE, payload: payload })
}

export const changeGender = (payload) => dispatch => {
  return dispatch({ type: actionTypes.GENDER, payload: payload })
}

export const changeAllergies = (payload) => dispatch => {
  return dispatch({ type: actionTypes.ALLERGIES, payload: payload })
}

export const changePrimaryDiagonosis = (payload) => dispatch => {
  return dispatch({ type: actionTypes.PRIMARYDIAGONOSIS, payload: payload })
}

export const changePhysician = (payload) => dispatch => {
  return dispatch({ type: actionTypes.PHYSICIAN, payload: payload })
}

export function initializeStore (initialState = exampleInitialState) {
  return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}